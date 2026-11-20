'use strict';

const article = new URLSearchParams(location.search).get('id')?.normalize('NFC');
const euro = new Intl.NumberFormat('de-DE', {style:'currency', currency:'EUR'});
const byId = (id) => document.getElementById(id);
const bottleCutouts = new Map([
  ['WD542-1-25', 'schloss-riesling'],
  ['WI501-1-21', 'afix'],
  ['WÖ433-1-19', 'wechselberg-spiegel'],
  ['WD564-1-23', 'kastanienbusch'],
  ['WD563-1-21', 'monte-vacano'],
]);

async function readJson(path) {
  try {
    const response = await fetch(path, {
      cache:'no-store',
      signal:AbortSignal.timeout(4500),
    });
    return response.ok ? await response.json() : null;
  } catch {
    return null;
  }
}

async function findWine(path, entries, isAvailable) {
  const wines = entries(await readJson(path));
  if (!Array.isArray(wines)) return null;
  return wines.find((wine) => wine?.id === article && isAvailable(wine)) ?? null;
}

async function findInstagramWine() {
  const records = await readJson('/wein/instagram-weine.json');
  if (!records || !Object.hasOwn(records, article)) return null;
  const entry = records[article];
  if (typeof entry?.name !== 'string' || !entry.name.trim()) return null;
  if (typeof entry.url !== 'string' ||
      !/^https:\/\/www\.instagram\.com\/(?:p\/[A-Za-z0-9_-]+|reel\/[A-Za-z0-9_-]+|stories\/highlights\/[0-9]+)\/$/.test(entry.url)) return null;
  return entry;
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
  const slug = bottleCutouts.get(article);
  const candidates = [
    slug && '/wein/flaschen/' + slug + '.webp',
    restaurant && window.restaurantBottleCutout?.(restaurant),
    hofladen?.image && '/hofladen/flaschen/' + encodeURIComponent(article) +
      '.webp?bild=' + encodeURIComponent(hofladen.image),
  ].filter(Boolean);
  const image = byId('bottle');
  image.alt = 'Flasche ' + title;
  image.onload = () => { image.hidden = false; };
  image.onerror = () => {
    const next = candidates.shift();
    if (next) image.src = next;
  };
  if (candidates.length) image.src = candidates.shift();
}

async function showWine() {
  const title = byId('wine-name');
  const validArticle = article && /^[\p{L}\p{N}][\p{L}\p{N}\p{M}.-]{0,63}$/u.test(article);
  const [restaurant, hofladen, instagram] = validArticle ? await Promise.all([
    findWine('/wines.json', (data) => data,
      (wine) => (wine.active === true || String(wine.active).toLowerCase() === 'ja') && wine.price != null && wine.price !== ''),
    findWine('/hofladen-katalog.json', (data) => data?.wines,
      (wine) => Number.isSafeInteger(wine.price_cents) && wine.price_cents > 0),
    findInstagramWine(),
  ]) : [null, null, null];

  const wine = restaurant || hofladen || instagram;
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
  if (instagram) {
    if (typeof instagram.subtitle === 'string') {
      showText('instagram-subtitle', instagram.subtitle.trim());
    }
    const instagramUrl = new URL(instagram.url);
    if (instagramUrl.pathname.startsWith('/p/') && Number.isSafeInteger(instagram.slide) && instagram.slide > 0) {
      instagramUrl.searchParams.set('img_index', String(instagram.slide));
    }
    showLink('instagram', instagramUrl.href);
  }
  if (hofladen) {
    showText('shop-price', euro.format(hofladen.price_cents / 100) + ' pro Flasche · vor Ort');
    showLink('hofladen', '/hofladen?wein=' + encoded);
  }
}

showWine();
