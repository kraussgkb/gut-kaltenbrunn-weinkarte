'use strict';
const main=document.getElementById('content');
const status=document.getElementById('status');
const selected=new URLSearchParams(location.search).get('wein');
const euros=new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'});
const fields={
  'Weindaten':{country:'Land',region:'Region',town:'Ort',category:'Weinart',grapes:'Rebsorten',size:'Flaschengröße',taste:'Geschmack',alcohol:'Alkohol',sugar:'Restzucker (g/l)',acid:'Säure (g/l)',allergens:'Allergene',organic:'Produktion'},
  'Ausbau und Herkunft':{aging:'Ausbau',vinification:'Vinifikation',barrel:'Fass',soil:'Boden',altitude:'Höhenlage',orientation:'Ausrichtung',yield:'Ertrag',maturity:'Trinkreife',potential:'Lagerpotenzial'},
  'Servieren':{temperature:'Trinktemperatur',glass_name:'Glas',decant:'Dekantieren'},
  'Bewertungen':{awards:'Auszeichnungen',parker:'Robert Parker',falstaff:'Falstaff',spectator:'Wine Spectator',decanter:'Decanter'}
};
function el(tag,text,cls){
  const node=document.createElement(tag);
  if(text!=null)node.textContent=text;
  if(cls)node.className=cls;
  return node;
}
function link(text,url,cls){
  const a=el('a',text,cls);
  a.href=url;
  return a;
}
function price(wine){return euros.format(wine.price_cents/100)+' pro Flasche';}
const germanNumber=new Intl.NumberFormat('de-DE',{maximumFractionDigits:3,useGrouping:false});
function displayValue(key,value){
  if(value==null||value==='')return '';
  const text=String(value).trim();
  if(key==='alcohol'){
    const match=text.match(/^(\d+(?:[.,]\d+)?)\s*(?:%\s*(?:vol\.?)?)?$/i);
    return match?germanNumber.format(Number(match[1].replace(',','.')))+' % vol.':value;
  }
  if(key==='size'){
    const match=text.match(/^(?:Fl\.?\s*)?(\d+(?:[.,]\d+)?)\s*(ml|cl|l)$/i);
    if(!match)return value;
    const scale={ml:1000,cl:100,l:1}[match[2].toLowerCase()];
    return germanNumber.format(Number(match[1].replace(',','.'))/scale)+' l';
  }
  return value;
}
function signature(){
  const wrapper=el('div',null,'signature');
  const mark=el('img');
  mark.src='/Weinbilder/unterschrift.png';
  mark.alt='Unterschrift Dominik Krauß';
  wrapper.append(mark,el('small','Sommelier & Betriebsleiter · Gut Kaltenbrunn'));
  return wrapper;
}
function photo(wine,detail=false){
  if(!wine.image)return null;
  const frame=el('figure',null,'photo');
  const img=el('img');
  img.alt='Flasche '+wine.name;
  frame.append(img);
  img.addEventListener('error',()=>frame.remove(),{once:true});
  if(!detail){
    img.addEventListener('load',()=>{
      const mark=el('img',null,'bottle-mark');
      mark.src='/hofladen/winefunday-original.png';
      mark.alt='';
      frame.append(mark);
    },{once:true});
  }
  img.src='/hofladen/flaschen/'+encodeURIComponent(wine.id)+'.webp?bild='+encodeURIComponent(wine.image);
  return frame;
}
function title(wine){return [wine.name,wine.year].filter(Boolean).join(' · ');}
function list(wines){
  const intro=el('section',null,'intro');
  intro.append(el('h2','Besondere Weine für zu Hause'),el('p','Für unseren Hofladen habe ich Weine ausgewählt, die ich Ihnen auch für zu Hause ans Herz lege. Für den nächsten Abend mit Freunden, ein gutes Essen oder einfach ein Glas, auf das Sie sich freuen.'),signature());
  status.before(intro);
  status.textContent=wines.length?'Flaschenpreise für den Einkauf im Hofladen.':'Derzeit sind keine Hofladenweine gelistet.';
  const grid=el('div',null,'grid');
  for(const wine of wines){
    const card=link(null,'/hofladen?wein='+encodeURIComponent(wine.id),'card');
    const image=photo(wine);
    if(image)card.append(image);
    const copy=el('div',null,'card-copy');
    copy.append(el('h2',title(wine)),el('p',[wine.producer,wine.region,displayValue('size',wine.size)].filter(Boolean).join(' · '),'muted'),el('p',price(wine),'price'));
    card.append(copy);
    grid.append(card);
  }
  main.append(grid);
  const footer=el('footer',null,'hofladen-social');
  footer.append(
    el('h2','Mehr aus unserer Weinwelt'),
    el('p','Möchten Sie wissen, was sich rund um den Wein auf Gut Kaltenbrunn tut? Auf Instagram teile ich Empfehlungen, Entdeckungen und Einblicke aus unserem Weinkeller.'),
    link('WINEFUNDAY auf Instagram','https://www.instagram.com/winefundaysocialclub/')
  );
  main.after(footer);
}
function section(parent,name,body,cls){
  if(!body)return;
  const block=el('section',null,cls);
  block.append(el('h2',name),el('p',body));
  parent.append(block);
}
function guestRating(wine){
  const endpoint='https://ohyrmkopbjgevgzucila.supabase.co/rest/v1';
  const headers={apikey:'sb_publishable_5ZDgYMpPlhXaJVoMr3b-eg_bFFRh3sA','Content-Type':'application/json'};
  const block=el('section',null,'guest-rating');
  const heading=el('h2','Schon ausgetrunken? Jetzt das Weinerlebnis bewerten');
  heading.id='guest-rating-heading';
  block.setAttribute('aria-labelledby',heading.id);
  const summary=el('p','Bewertungen werden geladen …','muted');
  const stars=el('div',null,'guest-rating-stars');
  stars.setAttribute('role','group');
  stars.setAttribute('aria-label','Bewertung mit ein bis fünf Sternen');
  const message=el('p',null,'guest-rating-message');
  message.setAttribute('role','status');

  async function refresh(){
    try{
      const response=await fetch(endpoint+'/rpc/get_wine_rating',{
        method:'POST',headers,body:JSON.stringify({p_wine_id:wine.id})
      });
      if(!response.ok)throw Error();
      const [aggregate]=await response.json();
      const count=Number(aggregate?.rating_count||0);
      summary.textContent=count
        ? new Intl.NumberFormat('de-DE',{minimumFractionDigits:1,maximumFractionDigits:1}).format(Number(aggregate.average_rating))+' von 5 · '+count+(count===1?' Bewertung':' Bewertungen')
        : 'Noch keine Bewertungen';
    }catch{
      summary.textContent='Bewertungen sind gerade nicht verfügbar.';
    }
  }

  const buttons=Array.from({length:5},(_,index)=>{
    const rating=index+1;
    const button=el('button','★');
    button.type='button';
    button.setAttribute('aria-label',rating===1?'1 Stern':rating+' Sterne');
    button.setAttribute('aria-pressed','false');
    button.addEventListener('click',async()=>{
      buttons.forEach(star=>{star.disabled=true;});
      message.textContent='Bewertung wird gespeichert …';
      try{
        const response=await fetch(endpoint+'/wine_ratings',{
          method:'POST',headers:{...headers,Prefer:'return=minimal'},
          body:JSON.stringify({wine_id:wine.id,rating})
        });
        if(!response.ok)throw Error();
        buttons.forEach((star,i)=>{
          star.classList.toggle('selected',i<rating);
          star.setAttribute('aria-pressed',String(i===index));
        });
        message.textContent='Vielen Dank für Ihre Bewertung.';
        await refresh();
      }catch{
        message.textContent='Die Bewertung konnte nicht gespeichert werden. Bitte erneut versuchen.';
      }finally{
        buttons.forEach(star=>{star.disabled=false;});
      }
    });
    return button;
  });
  stars.append(...buttons);
  block.append(heading,summary,stars,message);
  void refresh();
  return block;
}
function detail(wine){
  const layout=el('article',null,'detail');
  const image=photo(wine,true);
  layout.append(image||el('div'));
  const copy=el('div');
  copy.append(el('p',[wine.producer,wine.region].filter(Boolean).join(' · '),'muted'),el('h1',title(wine)),el('p',price(wine),'price'));
  if(wine.note){
    const note=el('section',null,'personal-note');
    note.append(el('h2','Meine Notiz zum Wein'),el('p',wine.note),signature());
    copy.append(note);
  }else{
    copy.append(signature());
  }
  if(wine.sensory!==wine.note)section(copy,'Sensorik',wine.sensory);
  if(wine.assessment)section(copy,'WINEFUNDAY INSIGHTS',[wine.assessment.character,wine.assessment.description].filter(Boolean).join(' — '),'insights');
  section(copy,'Zum Essen',wine.pairing);
  section(copy,'Geschichte',wine.story);
  for(const [heading,keys] of Object.entries(fields)){
    const rows=Object.entries(keys).filter(([key])=>wine[key]!=null&&wine[key]!=='');
    if(!rows.length)continue;
    const block=el('section'), dl=el('dl');
    for(const [key,label] of rows){
      const row=el('div');row.append(el('dt',label),el('dd',displayValue(key,wine[key])));dl.append(row);
    }
    block.append(el('h2',heading),dl);copy.append(block);
  }
  copy.append(guestRating(wine));
  layout.append(copy);
  main.replaceChildren(link('← Alle Hofladenweine','/hofladen','back'),layout);
  document.title=title(wine)+' · WINEFUNDAY Hofladen';
}
(async()=>{
  try{
    const response=await fetch('/hofladen-katalog.json',{credentials:'omit',cache:'no-store'});
    if(!response.ok)throw Error('Katalog nicht erreichbar');
    const {wines}=await response.json();
    if(!selected){list(wines);return;}
    const wine=wines.find(item=>item.id===selected);
    if(wine){detail(wine);return;}
    status.textContent='Dieser Wein ist derzeit im Hofladen-Sortiment nicht gelistet.';
    main.append(link('Alle Hofladenweine','/hofladen'));
  }catch{
    status.textContent='Die Hofladen-Weinkarte konnte gerade nicht geladen werden.';
    main.append(link('Erneut laden',location.pathname+location.search));
  }
})();
