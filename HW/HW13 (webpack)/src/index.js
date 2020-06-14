import './styles.css';
import getImg from './apiService';
import { refs } from './refs';
import debounce from 'lodash.debounce';
let page = 1;

function eventHandler({ target }) {
    
    return getImg(target.value, page).then(data => {
        const arr = data.hits;
        const galleryItems = arr.reduce((acc, el) => acc += `<div class="photo-card">
  <img src="${el.webformatURL}" alt="" />
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${el.likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${el.views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${el.comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${el.downloads}
    </p>
  </div>
</div>`, "")
        
        refs.gallery.innerHTML = galleryItems;
        const btn = document.createElement('button');
        refs.body.append(btn);
        btn.textContent = 'Load more';
        btn.classList.add('btn');
        btn.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' ? page += 1 : null);
        console.log(page);
        
    });
}

refs.form.addEventListener('input', debounce(eventHandler, 500));




