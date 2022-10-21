// const URL = '../../headlines.json'
const URL = 'https://newsapi.org/v2'

const loadImg = url => new Promise(resolve => {
  const img = new Image();
  img.height = 200;
  if (!url) {
    img.src = `../../img/default.jpg`
  } else {
    img.src = url;
  }
  img.addEventListener('load', () => {
    resolve(img);
  })
})

export const fetchRequest = async (postfix, {
  method = 'GET',
  callback,
  body,
  headers,
  size
}) => {
  try {
    const options = {
      method,
    }

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(`${URL}${postfix}`, options);

    if (response.ok) {
      const data = await response.json();
      const articles = data.articles.slice(0, size);
      const pictures = await Promise.all(articles.map(item => loadImg(item.urlToImage)));

      if (callback) return callback(null, articles, size, pictures);
      return;
    }

    throw new Error(`Error ${response.status}: ${response.statusText}`);
  } catch (error) {
    return callback(error);
  }
}