import{S as d,i as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(s){const o="https://pixabay.com/api/",r="45258111-19b0afcb9384c7a2acd16a24f";let i=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(o+"?"+i,{headers:{Accept:"application/json"}}).then(e=>e.json())}function y(s){let o="";return s.forEach(r=>{o+=`
  <li class="gallery-item">
    <div class='gallery-item-wrap'>
      <a href="${r.largeImageURL}" class="gallery-link">  
        <img src="${r.webformatURL}" class="gallery-image"  />
      </a>
      <div class="gallery-item-description">
          <div>
            <h3>Likes</h3>
            <p>${r.likes}</p>
          </div>
          <div>
            <h3>Views</h3>
            <p>${r.views}</p>
          </div>
          <div>
            <h3>Comments</h3>
            <p>${r.comments}</p>
          </div>
          <div>
            <h3>Downloads</h3>
            <p>${r.downloads}</p>
          </div>
        </ul
    
      </div>
    </div>
    </li>
  `}),o}const l=document.querySelector(".loader");let f=document.querySelector(".gallery"),n=document.querySelector(".search");const h=new d(".gallery a",{captionDelay:250});document.querySelector("#search-form").addEventListener("submit",s=>{s.preventDefault(),l.style.display="block";let o=n.value;p(o).then(r=>{const i=r.hits;if(i.length===0){c();return}n.value="",f.innerHTML=y(i),h.refresh()}).catch(r=>c(r.message)).finally(()=>l.style.display="none")});const c=(s="Sorry, there are no images matching your search query. Please try again!")=>{u.error({message:s,position:"topRight"})};
//# sourceMappingURL=commonHelpers.js.map
