/* Clear article search and dismiss mobile keyboards on Enter. */
(()=>{
 function prepare(){
  document.querySelectorAll('#search,#admin-search').forEach(input=>{
   if(input.dataset.clearReady)return;input.dataset.clearReady='1';input.setAttribute('enterkeyhint','search');
   const wrap=document.createElement('div');wrap.className='article-search-field';input.before(wrap);wrap.append(input);
   const clear=document.createElement('button');clear.type='button';clear.className='article-search-clear';clear.textContent='×';clear.setAttribute('aria-label','Suche löschen');wrap.append(clear);
   const update=()=>{clear.hidden=!input.value;};input.addEventListener('input',update);input.addEventListener('change',update);
   clear.addEventListener('click',()=>{input.value='';input.dispatchEvent(new Event('input',{bubbles:true}));input.focus();update();});update();
  });
 }
 document.addEventListener('keydown',event=>{
  const input=event.target;
  if(event.key!=='Enter'||event.isComposing||!input.matches?.('#search,#admin-search,#q'))return;
  event.preventDefault();input.blur();
  if(input.id==='q'){
   const suggestions=document.getElementById('searchSuggestions');if(suggestions){suggestions.classList.remove('open');suggestions.replaceChildren();}input.setAttribute('aria-expanded','false');
  }
 });
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',prepare);else prepare();
})();
