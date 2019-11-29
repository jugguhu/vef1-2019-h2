const LOCALSTORAGE_KEY = 'finished_lectures';

export function loadSaved() {
  const finJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const fin = JSON.parse(finJson) || [];

  return fin;
}

export function has(sl) {
  const arr = loadSaved();
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].slug === sl) {
      return i;
    }
  }
  return -1;
}

export function save(slug) {
  const fin = loadSaved();
  const n = has(slug);

  if (n === -1) {
    fin.push({
      slug,
    });
  } else {
    fin.splice(n, 1);
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fin));
}

export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
