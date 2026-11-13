(() => {
  // A changed source photo needs a matching, verified cutout before display.
  const sources = new Map(Object.entries({
    "CH801-1-NV": "https://www.laurent-perrier.com/bottles/la-cuvee.png",
    "CH805-1-NV": "https://www.laurent-perrier.com/bottles/cuvee-rose.png",
    "CH806-1-NV": "https://www.laurent-perrier.com/bottles/grand-siecle.png",
    "RF219-1-17": "/weinkeller/flaschen/RF219-1-17-hof-20261112.png",
    "RI111-1-22": "/weinkeller/flaschen/RI111-1-22-hof-20261112.png",
    "RI117-1-18": "/weinkeller/flaschen/RI117-1-18-hof-20261112.png",
    "RI119-1-20": "/weinkeller/flaschen/RI119-1-20-bibi-graetz-2020.png",
    "RI143-1-21": "/weinkeller/flaschen/RI143-1-21-a1dc4472-1ad9-4760-87ac-4eff4a05a1cd.png",
    "RI155-1-20": "/weinkeller/flaschen/RI155-1-20-bibi-graetz-2020.png",
    "RW502-1-16": "/weinkeller/flaschen/RW502-1-16-original-logo-20261112.webp",
    "RW504-1-16": "/weinkeller/flaschen/RW504-1-16-ff4c3dea-6827-4754-b6e2-57c74fff02ab.png",
    "RW506-1-18": "/weinkeller/flaschen/RW506-1-18-rioja-2018.png",
    "RW514-1-23": "/weinkeller/flaschen/RW514-1-23-zinfandel-2023.png",
    "RÖ506-1-18": "/weinkeller/flaschen/RÖ506-1-18-hof-20261112.png",
    "WW501-1-23": "/weinkeller/flaschen/WW501-1-23-c6304c3f-ed5f-4bef-a995-07801bdc3366.png",
    "WÖ421-1-24": ""
}));
  window.restaurantBottleCutout = wine => {
    if (sources.get(wine.id) !== (wine.image || '')) return '';
    return '/hofladen/flaschen/' + encodeURIComponent(wine.id) + '.webp?v=20261113-1';
  };
})();
