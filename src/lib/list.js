import { empty, get_json, el } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.fyrirlestrar');
    this.lectures = 'lectures.json';
    this.nav = document.querySelector('display');
  }

  load() {
    empty(this.container);
    this.getLectures(this.lectures)
      .then(data => this.filterLectures(data))
      .then(data => this.showLectures(data.lectures));
  }

  getLectures(json) {
    return fetch(json)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Non 200 status');
        }
        return res.json();
      });
  }

  showLectures(data) {
    for (let i of data) { //eslint-disable-line
      const lectureURL = `fyrirlestur.html?slug=${i.slug}`;
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
      element.querySelector('a').setAttribute('href', lectureURL);
      document.querySelector('.fyrirlestrar').appendChild(element);
    }
  }

  filterLectures(json) {
    // empty(this.container);
    const buttons = document.querySelectorAll('.button');
    const items = Array.from(buttons).filter(i => i.classList.contains('button--active'))
      .map(i =>i.textContent.toLowerCase());
    if(items.length !== 0) {
      return json.filter(i.lectures => items.contains(i.lectures.category));
    }
    return json;
  }

  toggleButton(e) {
    const button = e.target;
    button.classList.toggle('button--active');
  }

  init(page) {
    const buttons = page.querySelectorAll('.button');
    for (let i of buttons) { //eslint-disable-line
      i.addEventListener('click', (e) => {
        this.toggleButton(e);
        this.load();
      });
    }
  }
}
