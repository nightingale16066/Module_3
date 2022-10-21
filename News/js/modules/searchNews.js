import { renderCards } from './renderCards.js';
import { preload } from './preload.js';
import { fetchRequest } from './fetchRequest.js';
import { newsList } from '../index.js';

const searchForm = document.querySelector('.form-search');
const searchInput  = document.querySelector('.search-input');
const searchTopic = document.querySelector('.title');

const titleWrapperSearch = document.querySelector('.title-wrapper_search');
const newsSearch = document.querySelector('.news_search');

const searchList = document.querySelector('.search-list');
const select = document.querySelector('.js-choice');

let country = 'ru';

select.addEventListener('change', (e) => {
  country = select.value;
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!searchInput.value.trim()) return;

  const init = () => {
    preload.show();
    return Promise.all([
      fetchRequest(`/top-headlines?country=${country}`, {
        callback: renderCards,
        headers: {
          'X-Api-Key': '352a3678b77d43eba62008003919edca'
        },
        size: 4,
      }),
      fetchRequest(`/everything?q=${searchInput.value.trim()}`, {
        callback: renderCards,
        headers: {
          'X-Api-Key': '352a3678b77d43eba62008003919edca'
        },
        size: 8
      }),
    ])
  }

  init().then(data => {
    preload.remove();

    searchTopic.textContent = `По вашему запросу “${searchInput.value}” найдены следующие результаты`;
    titleWrapperSearch.classList.remove('hide');
    newsSearch.classList.remove('hide');
    newsList.innerHTML = '';
    newsList.append(data[0]);
    searchList.innerHTML = '';
    searchList.append(data[1]);
  })
})





