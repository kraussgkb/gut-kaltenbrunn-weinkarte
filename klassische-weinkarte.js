const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function chapters(items,wines){
 const available=new Map(wines.filter(w=>w.active===true&&String(w.price||'').trim()).map(w=>[w.id,w]));const used=new Set();const chapters=[];let chapter,section;
 for(const item of items){
  if(item.type==='heading'){
   if(!chapter||/^(CHAMPAGNER|ROSÉWEINE|WEISSWEINE|ROTWEINE)/.test(item.label)){chapter={label:item.label,sections:[]};chapters.push(chapter);section=null;}
   else{section={label:item.label,blocks:[]};chapter.sections.push(section);}
  }else{
   const rows=item.ids.map(id=>available.get(id)).filter(Boolean);if(!rows.length)continue;
   if(!chapter){chapter={label:'Weine',sections:[]};chapters.push(chapter);}
   if(!section){section={label:'',blocks:[]};chapter.sections.push(section);}
   rows.forEach(w=>used.add(w.id));section.blocks.push(rows);
  }
 }
 const extra=[...available.values()].filter(w=>!used.has(w.id));if(extra.length)chapters.push({label:'Weitere Weine',sections:[{label:'',blocks:extra.map(w=>[w])}]});
 return chapters.filter(c=>c.sections.some(s=>s.blocks.length));
}
(async()=>{try{
 const [wres,mres]=await Promise.all([fetch('wines.json',{cache:'no-store'}),fetch('/weinkeller/api/classic',{cache:'no-store'})]);if(!wres.ok||!mres.ok)throw Error('Die Weinkarte ist momentan nicht erreichbar.');
 const wines=await wres.json(),structure=await mres.json();const list=chapters(structure.items,wines);const seen=new Set();
 const row=w=>{const anchor=seen.has(w.id)?'':` id="wein-${esc(w.id)}"`;seen.add(w.id);return `<a class="menu-row"${anchor} href="index.html?id=${encodeURIComponent(w.id)}&ansicht=klassisch" aria-label="${esc(w.name)}, ${esc(w.year)}, ${esc(w.size)}, Details ansehen"><span class="wine-meta">${esc([w.producer,w.town,String(w.size||'').replace(/^Fl\.\s*/, '')].filter(Boolean).join(', '))}<span class="wine-id">${esc(w.id)}</span></span><span class="wine-year">${esc(w.year)}</span><span class="wine-price">${esc(w.price)}</span></a>`};
 const render=(list)=>{seen.clear();document.getElementById('contents').innerHTML=list.map((c,i)=>`<a href="#kapitel-${i}">${esc(c.label)}</a>`).join('');
 document.getElementById('menu').innerHTML=list.map((c,i)=>`<section class="menu-chapter" id="kapitel-${i}"><h2>${esc(c.label)}</h2>${c.sections.filter(s=>s.blocks.length).map(s=>(s.label?`<h3>${esc(s.label)}</h3>`:'')+s.blocks.map(rows=>`<div class="menu-wine"><p class="wine-name">${esc(rows[0].name)}</p>${rows.map(row).join('')}</div>`).join('')).join('')}</section>`).join('');
 };render(list);
 const input=document.getElementById('menu-search-input');
 const normalize=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/ß/g,'ss');
 const applySearch=()=>{const query=input.value.trim();const terms=normalize(query).split(/\s+/).filter(Boolean);let count=0;const ids=new Set();const filtered=list.map(c=>({...c,sections:c.sections.map(s=>({...s,blocks:s.blocks.map(rows=>rows.filter(w=>{const text=normalize([w.name,w.grapes,w.producer,w.id,w.region,w.country,w.year].join(' '));const matches=terms.every(t=>text.includes(t));if(matches)ids.add(w.id);return matches;})).filter(rows=>rows.length)})).filter(s=>s.blocks.length)})).filter(c=>c.sections.length);count=ids.size;render(filtered);document.getElementById('menu-search-status').textContent=query?`${count} passende Weine`:'';if(!filtered.length)document.getElementById('menu').innerHTML='<section class="menu-chapter"><h2>Keine passenden Weine</h2><p>Bitte einen anderen Suchbegriff eingeben.</p></section>';};
 input.addEventListener('input',applySearch);
 document.getElementById('menu-search-clear').onclick=()=>{input.value='';applySearch();input.focus();};
 document.getElementById('menu-search-panel').onsubmit=e=>{e.preventDefault();applySearch();input.blur();document.getElementById('menu').scrollIntoView({behavior:'smooth'});};
 if(location.hash)document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
 }catch(e){document.getElementById('menu').textContent=e.message;}})();

document.getElementById('menu-to-top').onclick=()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});

const searchToggle=document.getElementById('menu-search-toggle'),searchPanel=document.getElementById('menu-search-panel');searchToggle.onclick=()=>{const open=searchPanel.hidden;searchPanel.hidden=!open;searchToggle.setAttribute('aria-expanded',String(open));if(open)document.getElementById('menu-search-input').focus();};searchPanel.addEventListener('keydown',e=>{if(e.key==='Escape'){searchPanel.hidden=true;searchToggle.setAttribute('aria-expanded','false');searchToggle.focus();}});
