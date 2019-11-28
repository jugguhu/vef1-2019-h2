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
