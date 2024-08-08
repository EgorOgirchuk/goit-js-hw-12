import{a as l,S as g,i as p}from"./assets/vendor-88ce9a64.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const v="45258111-19b0afcb9384c7a2acd16a24f",b=15;l.defaults.baseURL="https://pixabay.com/api";l.defaults.params={};l.defaults.params.key=v;async function L(o,r){let e={q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,page:r};return l.get("/",{params:e})}function w(o){let r="";return o.forEach(e=>{r+=`
  <li class="gallery-item">
    <div class='gallery-item-wrap'>
      <a href="${e.largeImageURL}" class="gallery-link">  
        <img src="${e.webformatURL}" class="gallery-image"  />
      </a>
      <div class="gallery-item-description">
          <div>
            <h3>Likes</h3>
            <p>${e.likes}</p>
          </div>
          <div>
            <h3>Views</h3>
            <p>${e.views}</p>
          </div>
          <div>
            <h3>Comments</h3>
            <p>${e.comments}</p>
          </div>
          <div>
            <h3>Downloads</h3>
            <p>${e.downloads}</p>
          </div>
        </ul
    
      </div>
    </div>
    </li>
  `}),r}const y=document.querySelector(".loader");let q=document.querySelector(".gallery"),f=document.querySelector(".search"),a=document.querySelector("#load-more-button");const S=new g(".gallery a",{captionDelay:250});let d=1,u=null,i=[];const h=async(o,r)=>{try{y.style.display="block";const e=await L(o,r),{data:n}=e,{totalHits:t,hits:s}=n;if(i=[...i,...s],i.length===0){m();return}f.value="",q.innerHTML=w(i),i.length>=t?(a.classList.add("load-more-button"),a.classList.remove("button-center"),R("We're sorry, but you've reached the end of search results.")):a.classList.contains("load-more-button")&&(a.classList.remove("load-more-button"),a.classList.add("button-center")),S.refresh()}catch(e){throw m(e.message),e}finally{y.style.display="none"}};document.querySelector("#search-form").addEventListener("submit",async o=>{o.preventDefault(),u=f.value,i=[];try{await h(u,d)}catch(r){console.error(r)}});a.addEventListener("click",async o=>{d++,await h(u,d);const r=document.querySelector(".gallery-item-wrap").getBoundingClientRect();console.log(r);const e=r.width;window.scrollBy({top:e*2,behavior:"smooth"})});const m=(o="Sorry, there are no images matching your search query. Please try again!")=>{p.error({message:o,position:"topRight"})},R=o=>{p.info({message:o,position:"topRight"})};
//# sourceMappingURL=commonHelpers.js.map
