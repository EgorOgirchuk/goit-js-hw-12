export function render(images) {
  let renderHtml = '';
  images.forEach(image => {
    renderHtml += `
  <li class="gallery-item">
    <div class='gallery-item-wrap'>
      <a href="${image.largeImageURL}" class="gallery-link">  
        <img src="${image.webformatURL}" class="gallery-image"  />
      </a>
      <div class="gallery-item-description">
          <div>
            <h3>Likes</h3>
            <p>${image.likes}</p>
          </div>
          <div>
            <h3>Views</h3>
            <p>${image.views}</p>
          </div>
          <div>
            <h3>Comments</h3>
            <p>${image.comments}</p>
          </div>
          <div>
            <h3>Downloads</h3>
            <p>${image.downloads}</p>
          </div>
        </ul
    
      </div>
    </div>
    </li>
  `;
  });
  return renderHtml;
}
