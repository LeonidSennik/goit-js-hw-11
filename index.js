import{a as c,S as d,i as a}from"./assets/vendor-TcMOy-0F.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="https://pixabay.com/api/",f="50868712-4e51c6fc19c53f8b926e21bf1";async function p(o){return(await c.get(u,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}let m=new d(".gallery a");function y(o){const s=document.querySelector(".gallery"),n=o.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r.likes}</p>
        <p><b>Views:</b> ${r.views}</p>
        <p><b>Comments:</b> ${r.comments}</p>
        <p><b>Downloads:</b> ${r.downloads}</p>
      </div>
    </li>
  `).join("");s.insertAdjacentHTML("beforeend",n),m.refresh()}function g(){document.querySelector(".gallery").innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const l=document.querySelector(".form");document.querySelector(".gallery");l.addEventListener("submit",async o=>{o.preventDefault();const s=l.elements["search-text"].value.trim();if(!s){a.warning({title:"Увага",message:"Введіть ключове слово для пошуку",position:"topRight"});return}h(),g();try{const n=await p(s);n.length===0?a.error({title:"Нічого не знайдено",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(n)}catch{a.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз!",position:"topRight"})}finally{b()}});window.addEventListener("load",()=>{const o=document.querySelector(".loader");o&&(o.style.display="none")});
//# sourceMappingURL=index.js.map
