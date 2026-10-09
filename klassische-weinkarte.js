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
 document.getElementById('contents').innerHTML=list.map((c,i)=>`<a href="#kapitel-${i}">${esc(c.label)}</a>`).join('');
 document.getElementById('menu').innerHTML=list.map((c,i)=>`<section class="menu-chapter" id="kapitel-${i}"><h2>${esc(c.label)}</h2>${c.sections.filter(s=>s.blocks.length).map(s=>(s.label?`<h3>${esc(s.label)}</h3>`:'')+s.blocks.map(rows=>`<div class="menu-wine"><p class="wine-name">${esc(rows[0].name)}</p>${rows.map(row).join('')}</div>`).join('')).join('')}</section>`).join('');
 if(location.hash)document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
 }catch(e){document.getElementById('menu').textContent=e.message;}})();

document.getElementById('menu-to-top').onclick=()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
