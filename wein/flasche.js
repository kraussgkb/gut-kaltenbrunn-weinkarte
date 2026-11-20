'use strict';

const instagramLinks = new Map([
  ['RI143-1-21', 'https://www.instagram.com/stories/highlights/17881226421565692/'],
]);
const article = new URLSearchParams(location.search).get('id')?.normalize('NFC');
const euro = new Intl.NumberFormat('de-DE', {style:'currency', currency:'EUR'});
const byId = (id) => document.getElementById(id);

async function findWine(path, select) {
  try {
    const response = await fetch(path, {signal:AbortSignal.timeout(4500)});
    if (!response.ok) return null;
    const wines = select(await response.json());
    return wines.find((wine) => wine.id === article) ?? null;
  } catch {
    return null;
  }
}

function showText(id, message) {
  if (!message) return;
  const element = byId(id);
  element.textContent = message;
  element.hidden = false;
}

function showLink(id, href) {
  const element = byId(id);
  element.href = href;
  element.hidden = false;
}

function showBottle(restaurant, hofladen, title) {
  const knownCutout = restaurant && window.restaurantBottleCutout?.(restaurant);
  const catalogCutout = hofladen?.image && '/hofladen/flaschen/' +
    encodeURIComponent(article) + '.webp?bild=' + encodeURIComponent(hofladen.image);
  const image = byId('bottle');
  image.onload = () => { image.hidden = false; };
  image.onerror = () => {
    if (knownCutout && catalogCutout && image.getAttribute('src') === knownCutout) {
      image.src = catalogCutout;
    }
  };
  image.alt = 'Flasche ' + title;
  if (knownCutout || catalogCutout) image.src = knownCutout || catalogCutout;
}

async function showWine() {
  const title = byId('wine-name');
  const validArticle = article && /^[\p{L}\p{N}][\p{L}\p{N}\p{M}.-]{0,63}$/u.test(article);
  const [restaurant, hofladen] = validArticle ? await Promise.all([
    findWine('/wines.json', (data) => data.filter((wine) => (wine.active === true || String(wine.active).toLowerCase() === 'ja') && wine.price != null && wine.price !== '')),
    findWine('/hofladen-katalog.json', (data) => data.wines.filter((wine) => Number.isSafeInteger(wine.price_cents) && wine.price_cents > 0)),
  ]) : [null, null];

  const wine = restaurant || hofladen;
  if (!wine) {
    title.textContent = 'Weinprofil derzeit nicht verfügbar';
    byId('catalog').hidden = false;
    return;
  }

  const name = article === 'RI143-1-21' ? 'Reimitz „Reserve“ 54' : wine.name;
  title.textContent = name;
  title.classList.toggle('long', name.length > 26);
  document.title = name + ' · WINEFUNDAY';
  showText('origin', [wine.region || hofladen?.region, wine.year].filter(Boolean).join(' · '));
  if (article === 'RI143-1-21') showText('variety', 'Sangiovese');
  showBottle(restaurant, hofladen, name);

  const encoded = encodeURIComponent(article);
  if (restaurant) showLink('restaurant', '/index.html?id=' + encoded);
  const instagram = instagramLinks.get(article);
  if (instagram) showLink('instagram', instagram);
  if (hofladen) {
    showText('shop-price', euro.format(hofladen.price_cents / 100) + ' pro Flasche · vor Ort');
    showLink('hofladen', '/hofladen?wein=' + encoded);
  }
}

showWine();
