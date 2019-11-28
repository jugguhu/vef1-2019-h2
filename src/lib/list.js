import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.lectures = 'lectures.json';
  }

  load() {
    // empty(this.container);
    this.getLectures()
      .then((data) => console.log(data));
  }

  getLectures() {
    return async function get() {
      const result = await fetch(this.lectures);
      const data = await result.json();
      return data;
    };
  }
}
