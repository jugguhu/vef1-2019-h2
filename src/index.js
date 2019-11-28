import List from './lib/list';
import loadLecture from './lib/lecture';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    loadLecture();
  } else {
    const list = new List();
    list.load();
  }
});
