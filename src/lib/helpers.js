export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function getJson(func) {
  fetch('lectures.json')
    .then(response => response.json())
    .then((data) => {
      func(data);
    });
}

export function getSlug() {
  const url = window.location.search;
  const searchParam = new URLSearchParams(url);
  if (searchParam.has('slug')) {
    return searchParam.get('slug');
  }
  return 0;
}

export function el(name, ...children) {
  const element = document.createElement(name);
  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}
