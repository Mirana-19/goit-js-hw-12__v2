/* const image = {
  id: 9163537,
  pageURL:
    'https://pixabay.com/illustrations/ai-generated-cat-cartoon-cute-9163537/',
  type: 'illustration',
  tags: 'ai generated, cat, cartoon',
  previewURL:
    'https://cdn.pixabay.com/photo/2024/10/31/08/49/ai-generated-9163537_150.jpg',
  previewWidth: 150,
  previewHeight: 150,
  webformatURL:
    'https://pixabay.com/get/gbd59b79f59b56fcaa128bc699021777dfd384de378c3660f4bf51e39b9c9ad1b0425fcc6ea806d29ea388adc1d6f10113c8a35974720e8a12d7316f5fbe57aa6_640.jpg',
  webformatWidth: 640,
  webformatHeight: 640,
  largeImageURL:
    'https://pixabay.com/get/g289591dd1189cf81a535ad17845ffe1eb6b8816bf184c9b5c2c2529853d368d4209ed2af18e6e296a603bfdfdbbda86aad457ae0b8b3f174d458641d8e163653_1280.jpg',
  imageWidth: 7690,
  imageHeight: 7690,
  imageSize: 4896058,
  views: 1533,
  downloads: 1073,
  collections: 97,
  likes: 29,
  comments: 3,
  user_id: 13452116,
  user: 'Syaibatulhamdi',
  userImageURL:
    'https://cdn.pixabay.com/user/2023/08/17/09-25-12-704_250x250.jpg',
};
 */





export function renderCard(img) {
  const {
    comments,
    likes,
    downloads,
    views,
    webformatURL,
    tags,
    largeImageURL,
  } = img;

  return `  
        <a href="${largeImageURL}" class="gallery__card card">
          <img src="${webformatURL}" alt="${tags}" class="card__image" />
          <ul class="card__info info">
            <li class="info__item">
              <h3 class="info__title">Likes</h3>
              <p class="info__value">${likes}</p>
            </li>
            <li class="info__item">
              <h3 class="info__title">Views</h3>
              <p class="info__value">${views}</p>
            </li>
            <li class="info__item">
              <h3 class="info__title">Comments</h3>
              <p class="info__value">${comments}</p>
            </li>
            <li class="info__item">
              <h3 class="info__title">Downloads</h3>
              <p class="info__value">${downloads}</p>
            </li>
          </ul>
        </a>
  `;
}

export function renderMarkup(images) {
  return images
    .map(img => {
      return renderCard(img);
    })
    .join('');
}

export function render(element, markup) {
  element.innerHTML = markup;
}
