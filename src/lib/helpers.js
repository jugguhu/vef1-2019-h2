export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function get_json(func) {
  fetch('lectures.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      func(data);
    });
}

export function get_slug() {
  const url = location.search;
  const searchParam = new URLSearchParams(url);
  if (searchParam.has('slug')) {
    return searchParam.get('slug');
  }
  return 0;
}
