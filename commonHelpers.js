import{i as l,S as m}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=document.querySelector(".search-form"),d=document.querySelector(".gallery"),a=document.querySelector(".loader");f.addEventListener("submit",y);a.style.display="none";function y(o){o.preventDefault(),a.style.display="block",p(o.target.elements.searchQuery.value),o.target.elements.searchQuery.value=""}function p(o){fetch(`https://pixabay.com/api/?key=41293253-42a55b268bdac57d89d3cc200&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.total===0){l.warning({title:"Wrong request",message:"Sorry, there are no images matching your search query. Please try again!"});return}d.innerHTML=g(t.hits),new m(".gallery a").refresh(),a.style.display="none"}).catch(t=>l.error({title:"Error",message:`Oh, we have problem: ${t}`}))}function g(o){return o.map(({webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:i,downloads:c,id:u})=>`<a class="gallery__link" href="${s}">
  <div class="gallery-item" id="${u}">
    <img class="gallery-item__img" src="${t}" alt="${n}" loading="lazy">
    <div class="info">
      <p class="info-item"><b>Likes</b>${e}</p>
      <p class="info-item"><b>Views</b>${r}</p>
      <p class="info-item"><b>Comments</b>${i}</p>
      <p class="info-item"><b>Downloads</b>${c}</p>
    </div>
  </div>
</a>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
