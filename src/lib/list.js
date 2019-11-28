import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.lectures = 'lectures.json';
  }

  load() {
    // empty(this.container);
    console.log(this.getLectures());
  }

  getLectures() {
    async function get() {
      const result = await fetch(this.lectures);
      const data = await result.json();
      return data;
    }
    return get();
  }
}
