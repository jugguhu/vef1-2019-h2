import { empty, get_json } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.lectures = 'lectures.json';
  }

  load() {
    // empty(this.container);
    this.getLectures();
  }

  getLectures() {
    fetch(this.lectures)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Non 200 status');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.lectures);
      });

  }
}
