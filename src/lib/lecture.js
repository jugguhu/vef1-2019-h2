import { empty, get_json, get_slug } from './helpers';
import { load, save, desave } from './storage';

const slug = get_slug();

function fin() {
  if (slug !== 0) {
    const button = document.querySelector('.footer__finish');
    if (button.classList.contains('.footer__finish--finished')) {
      desave(slug);
      button.classList.remove('.footer__finish--finished');
    } else {
      save(slug, 1);
      button.classList.add('.footer__finish--finished');
    }
  }
}

export default function loadLecture() {
  const finish = document.querySelector('.footer__finish');
  finish.addEventListener('click', fin);
  if (slug !== 0) {
    get_json(makeLecture);
  }
}

function find(lects, sl) {
  for (const lect of lects) {
    if (lect.slug === sl) {
      return lect
    }
  }
}

function makeHeader(data) {
  const header = document.querySelector('.header');
  const category = header.querySelector('.header__category');
  const title = header.querySelector('.header__title');

  if (data.image === "img/code.jpg") {
    header.classList.add('header--code');
  }

  if (data.image === "img/code2.jpg") {
    header.classList.add('header--code2');
  }

  empty(title);
  empty(category);
  title.appendChild(document.createTextNode(data.title));
  category.appendChild(document.createTextNode(data.category));
}

function makeContent(cont) {
  const section = document.querySelector('.fyrirlestur');
  empty(section);
  for (const elem of cont) {
    switch (elem.type) {
      case 'youtube':
        const iframe = document.createElement('iframe');

        iframe.setAttribute('src', elem.data);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '0');

        section.appendChild(iframe);
        break;
      case 'text':
        const text = elem.data.split('\n');
        for (const paragraph of text) {
          const p = document.createElement('p');
          p.appendChild(document.createTextNode(paragraph));

          section.appendChild(p);
        }
        break;
      case 'quote':
        const quote = document.createElement('blockquote');

        quote.appendChild(document.createTextNode(elem.data));

        if (elem.hasOwnProperty('attribute')) {
          const cite = document.createElement('cite');
          cite.appendChild(document.createTextNode(elem.attribute));

          quote.appendChild(cite);
        }

        section.appendChild(quote);
        break;
      case 'image':
        const figure = document.createElement('figure');
        const image = document.createElement('img');

        image.setAttribute('src', elem.data);

        figure.appendChild(image);
        if (elem.hasOwnProperty('caption')) {
          const caption = document.createElement('figcaption');
          caption.appendChild(document.createTextNode(elem.caption));

          figure.appendChild(caption);
        }

        section.appendChild(figure);
        break;
      case 'heading':
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(elem.data));
        break;
      case 'list':
        const ul = document.createElement('ul');
        for (const text of elem.data) {
          const li = document.createElement('li');
          li.appendChild(document.createTextNode(text));

          ul.appendChild(li);
        }
        section.appendChild(ul);
        break;
      case 'code':
        const pre = document.createElement('pre');
        pre.appendChild(document.createTextNode(elem.data));
        section.appendChild(pre);
        break;
    }
  }
}


function makeLecture(data) {
  const lecture = find(data.lectures, slug);
  makeHeader(lecture);
  makeContent(lecture.content);
}
