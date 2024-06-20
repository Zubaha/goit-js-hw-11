import{S as d,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(i){const o="https://pixabay.com/",r="api/",s=new URLSearchParams({key:"44441755-66eac7c9e6ee4bab758e49d15",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${s}`;return fetch(e).then(t=>t.json()).then(t=>t.hits)}function m(i){return i==null?void 0:i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:u})=>`
      <li class="photo-card">
      <a href='${r}' class="big-photo">
  <img class="photo" src="${o}" alt="${s}" loading="lazy" />
  <ul class="info">
    <li class="info-item">
      <b>Likes</b>
      ${e}
    </li>
    <li class="info-item">
      <b>Views</b>
${t}
    </li>
    <li class="info-item">
      <b>Comments</b>
      ${n}
    </li>
    <li class="info-item">
      <b>Downloads</b>
      ${u}
    </li>
  </ul>
  </a>
</li>   
`).join("")}const l=new d(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".input-search"),c=document.querySelector(".backdrop"),p=document.querySelector(".gallery"),g=document.querySelector(".form");g.addEventListener("submit",i=>{i.preventDefault(),c.classList.remove("loader-hidden");const o=f.value;if(o.trim()===""){a.show({message:"Please put what you want to search!",position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"});return}h(o).then(r=>{r.length===0&&a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"});const s=m(r);p.innerHTML=s,l.refresh()}).catch(r=>{a.show({message:"Something went wrong.",position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"}),console.error("Error:",r)}),c.classList.add("loader-hidden"),l.refresh()});
//# sourceMappingURL=commonHelpers.js.map
