!function(e){function t(t){for(var n,i,c=t[0],s=t[1],u=t[2],l=0,m=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(d&&d(t);m.length;)m.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={0:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;a.push([10,1]),o()}([,function(e,t){var o=document.querySelector(".header");document.onscroll=function(){window.scrollY>0&&!o.classList.contains("fixed-header")&&o.classList.add("fixed-header"),window.scrollY<=0&&o.classList.contains("fixed-header")&&o.classList.remove("fixed-header")}},function(e,t){document.querySelector(".main-banner__button_scroll").addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("target").getBoundingClientRect().top-60;window.scrollBy({top:t,behavior:"smooth"})}))},function(e,t,o){"use strict";var n,r;n=document.querySelector(".main-banner__background"),(r=document.querySelector(".main-banner__button")).onmouseover=function(){n.style.transform="scale(1.1)"},r.onmouseout=function(){n.style.transform="scale(1)"}},function(e,t,o){"use strict";var n=document.querySelector(".russia"),r=document.querySelector(".ukraine"),a=document.querySelector(".kazakhstan-asia"),i=document.querySelector("#map-card-01"),c=document.querySelector("#map-card-02"),s=document.querySelector("#map-card-03");n.onmouseover=function(){n.classList.add("map-active"),i.classList.add("map-card-active")},n.onmouseout=function(){n.classList.remove("map-active"),i.classList.remove("map-card-active")},i.onmouseover=function(){n.classList.add("map-active")},i.onmouseout=function(){n.classList.remove("map-active")},r.onmouseover=function(){r.classList.add("map-active"),c.classList.add("map-card-active")},r.onmouseout=function(){r.classList.remove("map-active"),c.classList.remove("map-card-active")},c.onmouseover=function(){r.classList.add("map-active")},c.onmouseout=function(){r.classList.remove("map-active")},a.onmouseover=function(){a.classList.add("map-active"),s.classList.add("map-card-active")},a.onmouseout=function(){a.classList.remove("map-active"),s.classList.remove("map-card-active")},s.onmouseover=function(){a.classList.add("map-active")},s.onmouseout=function(){a.classList.remove("map-active")}},function(e,t,o){"use strict";var n=document.querySelector("#main-arc"),r=document.querySelector("#main-lotus"),a=document.querySelector("#main-trans"),i=document.querySelector("#main-doro"),c=document.querySelector("#main-arc-hover"),s=document.querySelector("#main-lotus-hover"),u=document.querySelector("#main-trans-hover"),d=document.querySelector("#main-doro-hover");n.onmouseover=function(){c.style.opacity="1"},n.onmouseout=function(){c.style.opacity="0"},r.onmouseover=function(){s.style.opacity="1"},r.onmouseout=function(){s.style.opacity="0"},a.onmouseover=function(){u.style.opacity="1"},a.onmouseout=function(){u.style.opacity="0"},i.onmouseover=function(){d.style.opacity="1"},i.onmouseout=function(){d.style.opacity="0"}},function(e,t,o){"use strict";var n,r;n=document.querySelectorAll(".item__desc_hover"),r=document.querySelectorAll(".main-events__content_img"),n.forEach((function(e,t){e.onmouseover=function(){r[t].style.transform="scale(1.1)"},e.onmouseout=function(){r[t].style.transform="scale(1)"}}))},function(e,t,o){var n=o(8),r=o(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);e.exports=r.locals||{}},,function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(1);var n=o(0);new n.a(".main-banner-slider",{pagination:{el:".swiper-pagination",clickable:!0}}),o(2),o(3),o(4),o(5);document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".main-application-swiper")){var e,t=window.matchMedia("(min-width:1024px)"),o=function(){if(!0!==t.matches)return!1===t.matches?r():void 0;void 0!==e&&e.destroy(!0,!0)},r=function(){e=new n.a(".main-application-swiper",{slidesPerView:"auto",a11y:!0,keyboardControl:!0,grabCursor:!0})};t.addListener(o),o()}}());o(6);document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".main-service-swiper")){var e,t=window.matchMedia("(min-width:1024px)"),o=function(){if(!0!==t.matches)return!1===t.matches?r():void 0;void 0!==e&&e.destroy(!0,!0)},r=function(){e=new n.a(".main-service-swiper",{slidesPerView:"auto",a11y:!0,keyboardControl:!0,grabCursor:!0})};t.addListener(o),o()}}()),document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".main-contacts-swiper")){var e,t=window.matchMedia("(min-width:1024px)"),o=function(){if(!0!==t.matches)return!1===t.matches?r():void 0;void 0!==e&&e.destroy(!0,!0)},r=function(){e=new n.a(".main-contacts-swiper",{slidesPerView:"auto",a11y:!0,keyboardControl:!0,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0}})};t.addListener(o),o()}}());o(7)}]);