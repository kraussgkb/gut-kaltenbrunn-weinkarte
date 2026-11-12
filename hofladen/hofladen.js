'use strict';
const main=document.getElementById('content');
const status=document.getElementById('status');
const selected=new URLSearchParams(location.search).get('wein');
const euros=new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'});
const fields={
  'Weindaten':{country:'Land',region:'Region',town:'Ort',category:'Weinart',grapes:'Rebsorten',size:'Flaschengröße',taste:'Geschmack',alcohol:'Alkohol (% vol)',sugar:'Restzucker (g/l)',acid:'Säure (g/l)',allergens:'Allergene',organic:'Produktion'},
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
  const knownCutout=wine.image.endsWith('/RI143-1-21-a1dc4472-1ad9-4760-87ac-4eff4a05a1cd.png');
  let tryCutout=detail&&!knownCutout;
  img.alt='Flasche '+wine.name;
  img.addEventListener('error',()=>{
    if(!tryCutout){frame.remove();return;}
    tryCutout=false;
    img.src=wine.image;
  });
  img.src=tryCutout?'/hofladen/flaschen/'+encodeURIComponent(wine.id)+'.webp?bild='+encodeURIComponent(wine.image):wine.image;
  frame.append(img);
  if(knownCutout){
    frame.classList.add('reimitz-cutout');
    if(!detail){
      const mark=el('img',null,'bottle-mark');
      mark.src='/hofladen/winefunday-original.png';
      mark.alt='';
      frame.append(mark);
    }
  }
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
    copy.append(el('h2',title(wine)),el('p',[wine.producer,wine.region,wine.size].filter(Boolean).join(' · '),'muted'),el('p',price(wine),'price'));
    card.append(copy);
    grid.append(card);
  }
  main.append(grid);
}
function section(parent,name,body,cls){
  if(!body)return;
  const block=el('section',null,cls);
  block.append(el('h2',name),el('p',body));
  parent.append(block);
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
      const row=el('div');row.append(el('dt',label),el('dd',wine[key]));dl.append(row);
    }
    block.append(el('h2',heading),dl);copy.append(block);
  }
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
