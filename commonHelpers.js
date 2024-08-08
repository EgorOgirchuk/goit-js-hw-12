import{a as i,S as h,i as g}from"./assets/vendor-88ce9a64.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const v="https://pixabay.com/",b="45258111-19b0afcb9384c7a2acd16a24f",L=15;i.defaults.baseURL=v;i.defaults.params={};i.defaults.params.key=b;async function w(o,r){let e={q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:r};return i.get("api",{params:e})}function q(o){let r="";return o.forEach(e=>{r+=`
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
  `}),r}const y=document.querySelector(".loader");let S=document.querySelector(".gallery"),m=document.querySelector(".search"),c=document.querySelector(".load-more-button");const E=new h(".gallery a",{captionDelay:250});let d=1,u=null,s=[];const f=async(o,r)=>{try{const e=await w(o,r),{data:l}=e;if(s=[...s,...l.hits],console.log(s),s.length===0){p();return}m.value="",S.innerHTML=q(s),E.refresh()}catch(e){throw p(e.message),e}finally{y.style.display="none"}};document.querySelector("#search-form").addEventListener("submit",async o=>{o.preventDefault(),y.style.display="block",u=m.value,s=[];try{await f(u,d),c.classList.remove("default-load-more"),c.classList.add("button-center")}catch(r){console.error(r)}});c.addEventListener("click",async o=>{d++,await f(u,d)});const p=(o="Sorry, there are no images matching your search query. Please try again!")=>{g.error({message:o,position:"topRight"})};
//# sourceMappingURL=commonHelpers.js.map
