const LOCALSTORAGE_KEY = 'finished_lectures';

export function loadSaved() {
  const finJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const fin = JSON.parse(finJson) || [];

  return fin;
}

export function finished(sl) {
  const fin = loadSaved();
  for (const ob of fin) {
    if (ob.slug === sl) {
      if (ob.value === 1) {
        return 1;
      }
    }
  }
  return 0;
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
  const fin = loadSaved();

  for (const sl of fin) {
    if (sl.slug === slug) {
      sl.value = 0;
    }
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fin));
}

export function save(slug) {
  const fin = loadSaved();
  const value = 1;

  if (!has(fin, slug)) {
    fin.push({
      slug, value,
    });
  } else {
    for (const sl of fin) {
      if (sl.slug === slug) {
        sl.value = value;
      }
    }
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fin));
}

export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
