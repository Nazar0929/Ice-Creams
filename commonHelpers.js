(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-header-open]"),closeModalBtn:document.querySelector("[data-modal-header-close]"),modal:document.querySelector("[data-header-modal]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();(()=>{const n={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtns.forEach(r=>r.addEventListener("click",o)),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".backdrop__buttons"),o=document.querySelectorAll(".backdrop__input"),r=document.querySelectorAll(".backdrop__result")[0],c=document.querySelectorAll(".backdrop__result")[1];n.addEventListener("click",()=>{let e=0,t=0;const l=4.25;o.forEach(a=>{const d=parseInt(a.value)||0;e+=d,t+=d*l}),r.value=e,c.value=`$${t.toFixed(2)}`})});
//# sourceMappingURL=commonHelpers.js.map
