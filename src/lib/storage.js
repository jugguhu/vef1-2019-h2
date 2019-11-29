const LOCALSTORAGE_KEY = 'finished_lectures';

export function load() {
  const finJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const fin = JSON.parse(finJson) || [];

  return fin;
}

export function has(sl) {
  const arr = load();
  for (let i=0; i<arr.length; i++) {
    if (arr[i].slug === sl) {
      return i;
    }
  }
  return -1;
}

export function save(slug) {
  const fin = load();
  const n = has(slug);
  console.log(fin);

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
