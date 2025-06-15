import{a as c,S as d,i as a}from"./assets/vendor-TcMOy-0F.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="https://pixabay.com/api/",f="50868712-4e51c6fc19c53f8b926e21bf1";async function p(n){return(await c.get(u,{params:{key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}let m=new d(".gallery a");function y(n){const o=document.querySelector(".gallery"),s=n.map(r=>`
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
  `).join("");o.insertAdjacentHTML("beforeend",s),m.refresh()}function g(){document.querySelector(".gallery").innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const l=document.querySelector(".form");document.querySelector(".gallery");l.addEventListener("submit",async n=>{n.preventDefault();const o=l.elements["search-text"].value.trim();if(!o){a.warning({title:"Увага",message:"Введіть ключове слово для пошуку",position:"topRight"});return}h(),g();try{const s=await p(o);s.length===0?a.error({title:"Нічого не знайдено",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(s)}catch{a.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз!",position:"topRight"})}finally{b()}});window.addEventListener("load",()=>{document.querySelector(".loader").style.display="none"});
//# sourceMappingURL=index.js.map
