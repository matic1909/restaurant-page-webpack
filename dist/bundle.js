(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(537),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,".active {\n  color: red;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,UAAU;AACZ",sourcesContent:[".active {\n  color: red;\n}\n"],sourceRoot:""}]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),c=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(c).concat([a]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=o.base?s[0]+o.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),s=n.n(i),u=n(216),d=n.n(u),l=n(589),p=n.n(l),f=n(426),m={};function v(e){const t=document.createElement("p");return t.textContent=e,t}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;function h(e){document.querySelectorAll("button").forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.querySelector(".content");e.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1");return t.textContent="Vaffanculo",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav"),t=document.createElement("button");t.textContent="Home",t.addEventListener("click",(e=>{e.target.classList.contains("active")||h(t)}));const n=document.createElement("button");n.textContent="Menu",n.addEventListener("click",(e=>{e.target.classList.contains("active")||h(n)}));const o=document.createElement("button");return o.textContent="Contact",o.addEventListener("click",(e=>{e.target.classList.contains("active")||h(o)})),e.appendChild(t),e.appendChild(n),e.appendChild(o),e}()),e}()),e.appendChild(document.createElement("main")),e.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("p");return t.textContent="Copyright © 2022 matic1909",e.appendChild(t),e}()),function(){const e=document.querySelector("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("homepage");const t=document.createElement("img");return t.src="images/chef.jpg",t.alt="Chef",e.appendChild(v("Pizza your nonna would be proud of")),e.appendChild(v("Authentic Italian Style Pizza since 1963")),e.appendChild(t),e.appendChild(v("Come visit us or order online!")),e}())}()}()})()})();
//# sourceMappingURL=bundle.js.map