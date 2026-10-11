'use strict';
const $=id=>document.getElementById(id);
const monthFmt=new Intl.DateTimeFormat('de-DE',{month:'long',year:'numeric'});
const dayFmt=new Intl.DateTimeFormat('de-DE',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
const shortFmt=new Intl.DateTimeFormat('de-DE',{day:'2-digit',month:'2-digit',year:'numeric'});
const berlinToday=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
function localDate(s){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d,12);}
function iso(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
let data,view=localDate(berlinToday),selected=null;
function eventsFor(date){return data.events.filter(e=>e.start<=date&&e.end>=date).sort((a,b)=>a.time.localeCompare(b.time)||a.occasion.localeCompare(b.occasion));}
function node(tag,text,className){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(className)n.className=className;return n;}
function render(){
  $('month').textContent=monthFmt.format(view);$('grid').replaceChildren();
  const start=new Date(view.getFullYear(),view.getMonth(),1,12);const offset=(start.getDay()+6)%7;start.setDate(1-offset);
  const monthDays=new Date(view.getFullYear(),view.getMonth()+1,0).getDate();const cells=Math.ceil((offset+monthDays)/7)*7;
  for(let i=0;i<cells;i++){
    const date=new Date(start);date.setDate(start.getDate()+i);const key=iso(date),events=eventsFor(key);
    const b=node('button',undefined,'day');b.type='button';
    if(date.getMonth()!==view.getMonth())b.classList.add('other');if(date.getDay()===0||date.getDay()===6)b.classList.add('weekend');if(events.length)b.classList.add('has-events');
    if(key===berlinToday){b.classList.add('today');b.setAttribute('aria-current','date');}
    b.setAttribute('aria-label',`${dayFmt.format(date)}: ${events.length} ${events.length===1?'Termin':'Termine'}`);b.append(node('span',String(date.getDate()),'number'));
    if(events.length){const count=node('span',undefined,'count');count.append(node('span',undefined,'dot'),node('span',`${events.length} ${events.length===1?'Termin':'Termine'}`));b.append(count,node('span',events[0].occasion+(events.some(e=>e.start!==e.end)?' ↔':''),'preview'));}
    b.addEventListener('click',()=>openDay(key));$('grid').append(b);
  }
  const lo=iso(new Date(view.getFullYear(),view.getMonth(),1,12)),hi=iso(new Date(view.getFullYear(),view.getMonth()+1,0,12));
  const total=data.events.filter(e=>e.start<=hi&&e.end>=lo).length;
  $('summary').textContent=`${total} Forecast-Einträge in ${monthFmt.format(view)} · Vorschau: ${shortFmt.format(localDate(data.coverage[0]))} – ${shortFmt.format(localDate(data.coverage[1]))}`;
}
function openDay(key){
 selected=key;$('day-title').textContent=dayFmt.format(localDate(key));const events=eventsFor(key);
 $('day-count').textContent=`${events.length} ${events.length===1?'Termin':'Termine'}`;$('cards').replaceChildren();
 if(!events.length){const outside=key<data.coverage[0]||key>data.coverage[1];$('cards').append(node('p',outside?'Dieses Datum liegt außerhalb des aktuellen Forecast-Zeitraums.':'Für diesen Tag sind im Forecast keine Termine aufgeführt.','empty'));}
 events.forEach((e,i)=>{
  const card=node('article',undefined,'event-card');const top=node('div',undefined,'event-top');top.append(node('span',`Termin ${i+1}`),node('strong',`${e.pax} PAX`,'pax'));card.append(top);
  const dl=node('dl');for(const [label,value,cls] of [['Anlass',e.occasion,'occasion'],['Raum',e.room],['Zeit',e.time.replace('-', ' – ')],['PAX',`${e.pax} (max.)`]]){dl.append(node('dt',label),node('dd',value,cls));}card.append(dl);
  if(e.start!==e.end)card.append(node('p',`Mehrtägiger Eintrag: ${shortFmt.format(localDate(e.start))} – ${shortFmt.format(localDate(e.end))}. Dieser Zeitraum steht im Forecast; einzelne Tageszuordnungen sind dort nicht ausgewiesen.`,'range-note'));
  $('cards').append(card);
 });if(!$('details').open)$('details').showModal();
}
$('prev').addEventListener('click',()=>{view=new Date(view.getFullYear(),view.getMonth()-1,1,12);render();});
$('next').addEventListener('click',()=>{view=new Date(view.getFullYear(),view.getMonth()+1,1,12);render();});
$('today').addEventListener('click',()=>{view=localDate(berlinToday);render();openDay(berlinToday);});
$('close').addEventListener('click',()=>$('details').close());
$('details').addEventListener('click',e=>{if(e.target===$('details')){const r=$('details').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('details').close();}});
async function refresh(initial=false){
 try{const response=await fetch('/kalender/events.json',{cache:'no-store'});if(!response.ok)throw Error('HTTP '+response.status);const fresh=await response.json();if(fresh.schema!==2||!Array.isArray(fresh.events)||!fresh.coverage)throw Error('Ungültiger Forecast');data=fresh;
 $('stand').classList.remove('error');$('stand').textContent=`Forecast-Stand: ${shortFmt.format(localDate(data.report.slice(0,10)))} · ${data.report.slice(11,16)} Uhr`;
 if(initial&&(berlinToday<data.coverage[0]||berlinToday>data.coverage[1]))view=localDate(data.coverage[0]);render();if($('details').open&&selected)openDay(selected);
 }catch(error){$('stand').classList.add('error');$('stand').textContent=data?'Aktualisierung nicht möglich. Angezeigt wird der zuletzt geladene Stand.':'Der Forecast konnte nicht geladen werden. Bitte die Seite erneut öffnen.';if(!data){$('prev').disabled=true;$('next').disabled=true;$('today').disabled=true;}}
}
refresh(true);setInterval(()=>refresh(),300000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
