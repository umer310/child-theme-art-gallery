(()=>{var e={819:()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".custom-nav-menu > .nav-menu-items > li").forEach((e=>{if(e.querySelector("ul")){const t=document.createElement("span");t.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M6 9l6 6 6-6H6z" fill="#333"/>\n                         </svg>',e.querySelector("a").appendChild(t)}})),document.querySelectorAll(".custom-nav-menu .nav-menu-items ul > li").forEach((e=>{if(e.querySelector("ul")){const t=document.createElement("span");t.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M9 6l6 6-6 6V6z" fill="#333"/>\n                         </svg>',e.querySelector("a").appendChild(t)}}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.createElement("div");e.classList.add("hamburger"),e.innerHTML='<svg width="24" height="24" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <rect width="100" height="10" fill="#333"></rect>\n                                <rect y="30" width="100" height="10" fill="#333"></rect>\n                                <rect y="60" width="100" height="10" fill="#333"></rect>\n                            </svg>';const t=document.createElement("div");t.classList.add("close-menu"),t.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                           <path d="M6 18L18 6M6 6l12 12" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n                         </svg>';const n=document.querySelector(".custom-nav-menu");n.insertBefore(e,n.firstChild);const o=document.querySelector(".nav-menu-items");o.insertBefore(t,o.firstChild),e.addEventListener("click",(function(){o.classList.add("open"),o.style.transform="translateX(0)"})),t.addEventListener("click",(function(){o.classList.remove("open"),o.style.transform="translateX(-100%)"}))}))},761:()=>{document.addEventListener("DOMContentLoaded",(()=>{console.log("working single product ");const e=document.querySelector(".wc-block-product-gallery-large-image__image-element"),t=document.querySelector(".wc-block-woocommerce-product-gallery-large-image__image");let n=0,o=0;e.addEventListener("mousemove",(l=>{((l,i)=>{const r=e.getBoundingClientRect(),s=t.getBoundingClientRect(),c=(s.width-r.width)/2,a=(s.height-r.height)/2,d=l-r.left,u=i-r.top,m=r.width/2,h=r.height/2;n=(d-m)/m*c,o=(u-h)/h*a,console.log(n,o),t.style.transform=`scale(1.5) translate(${n}px, ${o}px)`})(l.clientX,l.clientY)})),e.addEventListener("mouseenter",(()=>{t.style.transform="scale(1.5) translate(0, 0)"})),e.addEventListener("mouseleave",(()=>{t.style.transform="scale(1.5) translate(0, 0)"}))}))}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{"use strict";n(819),n(761),console.log("this is public file public.css"),console.log("this is public file public.js")})()})();