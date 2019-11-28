import { empty, get_json, el } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.lectures = 'lectures.json';
  }

  load() {
    // empty(this.container);
    this.getLectures()
      .then(data => this.showLectures(data.lectures));
  }

  getLectures() {
    return fetch(this.lectures)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Non 200 status');
        }
        return res.json();
      });
  }

  showLectures(data) {
    for (let i of data) { //eslint-disable-line
      const element = el('div',
        el('a',
          el('img'),
          el('div',
            el('span', i.category),
            el('h1', i.title))));
      element.classList.add('fyrirlestrar__col');
      element.querySelector('div').classList.add('fyrirlestrar__col__content');
      element.querySelector('span').classList.add('fyrirlestrar__col__content__category');
      element.querySelector('h1').classList.add('fyrirlestrar__col__content__title');
      if (i.thumbnail) {
        element.querySelector('img').setAttribute('src', i.thumbnail);
      }
      document.querySelector('.fyrirlestrar').appendChild(element);
    }
  }
}
