const LOCALSTORAGE_KEY = 'finished_lectures';

export function load() {
  const finJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const fin = JSON.parse(finJson) || [];

  return fin;
}

function has(arr, sl) {
  for (const ob of arr) {
    if (ob.slug === sl) {
      return 1;
    }
    return 0;
  }
}

export function desave(slug) {
  const fin = load();

  for (const sl of fin) {
    if (sl.slug === slug) {
      sl.value = 0;
    }
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fin));
}

export function save(slug, value) {
  const fin = load();

  if (!has(fin, slug)) {
    fin.push({
      slug, value,
    });
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fin));
}

export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
