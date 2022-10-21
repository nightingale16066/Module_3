export const renderCards = (err, data, size, pic) => {
  if (err) {
    console.warn(err, data);
    return;
  }

  let mySize = size;
  if (data.length % 4 && data.length >= 4) {
    mySize = data.length - data.length % 4;
  };
  
  const requiredData = data.slice(0, mySize)

  const template = document.createDocumentFragment();

  const news = requiredData.map((item, index) => {
    const newsItem = document.createElement('li');
    newsItem.classList.add('news-item');

    const publishTime = item.publishedAt.split('T');
    const publishDate = new Date(publishTime[0]).toLocaleDateString().split('.').join('/');
    
    newsItem.innerHTML = `
      <img src="${pic[index].src}" alt="${item.description}" class="news-image" height="200">
      <h3 class="news-title">
        <a href="${item.url}" class="news-link" target="_blank">${item.title}</a>
      </h3>
      <p class="news-description">${item.description ? item.description : ''}</p>
      <div class="news-footer">
        <time class="news-datetime" datetime="${item.publishedAt}">
          <span class="news-date">${publishDate}</span> ${publishTime[1].slice(0, 5)}
        </time>
        <p class="news-author">${item.author ? item.author : ''}</p>
      </div>
    `;
    return newsItem;
  })

  template.append(...news);

  return template;
}

