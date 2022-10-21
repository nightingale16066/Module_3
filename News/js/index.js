import './modules/searchNews.js'

import { renderCards } from './modules/renderCards.js';
import { preload } from './modules/preload.js';
import { fetchRequest } from './modules/fetchRequest.js';

export const newsList = document.querySelector('.news-list');

const init = () => {
  preload.show();
  return Promise.all([
    fetchRequest('/top-headlines?country=de', {
      callback: renderCards,
      headers: {
        'X-Api-Key': '352a3678b77d43eba62008003919edca'
      },
      size: 12
    })
  ])
}

init().then(data => {
  preload.remove();
  newsList.innerHTML = '';
  newsList.append(data[0]);
})