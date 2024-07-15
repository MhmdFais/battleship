(()=>{"use strict";var n={208:(n,e,r)=>{r.d(e,{A:()=>m});var o=r(601),t=r.n(o),a=r(314),i=r.n(a),c=r(417),s=r.n(c),l=new URL(r(435),r.b),d=i()(t()),u=s()(l);d.push([n.id,`:root{\n    --main-bg-color: #e9f1fb;\n    --name-container-bg-color:#94a3b8;\n    --name-container-shadow-color: #64748b;\n    --btn-color: #d4d4d4;\n    --btn-hover-color: #b1afaf;\n    --footer-name-color: rgb(78, 36, 36);\n    --box-hover-color: #d4d4d4;\n    --ship-bg-color: #a5b4fc;\n    --ship-hit-color: #f43f5e;\n    --ship-sunk-color: #1f2937;\n    --missed-color: #2dd4bf;\n    --surrond-color: #94a3b8;\n}\n\n*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@font-face{\n    font-family: mainFont;\n    src: url(${u});\n}\n\nbody{\n    font-family: mainFont;\n    background-color: var(--main-bg-color);\n}\n\n.body-part-conatiner{\n    height: 100dvh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: clamp(1rem, 1vh, 2rem);\n}\n\n/* Name Text Box */\n\n.name-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: clamp(0.5rem, 1vh, 1.5rem);\n    background-color: var(--name-container-bg-color);\n    padding: 2vh 2vw;\n    padding-bottom: 3vw;\n    border-radius: 1rem;\n    box-shadow: 0 0 0.4rem var(--name-container-shadow-color);    \n}\n\n.enter-name-text{\n    font-size: clamp(1.5rem, 2.5vw, 3rem);\n    color: black;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    gap: clamp(0.5rem, 1.5vh, 1.5rem);\n}\n\n#name{\n    height: 5.8vh;\n    width: 30vw;\n    padding: 0.5rem;\n    font-size: clamp(1rem, 1.5vw, 2rem);\n    border: none;\n    font-family: mainFont;\n}\n\nform button{\n    height: 5.8vh;\n    width: 30vw;\n    font-size: clamp(1rem, 1.5vw, 2rem);\n    font-family: mainFont;\n    border: none;\n    cursor: pointer;\n    background-color: var(--btn-color);\n    box-shadow: 0 0 0.78rem var(--name-container-shadow-color);\n}\n\nform button:hover{\n    /* background-color: var(--btn-hover-color); */\n    box-shadow: none;\n}\n\n/* User Board Section */\n\n.user-board-arrange-text{\n    font-family: mainFont;\n    font-size: clamp(1.5rem, 2.5vw, 3rem);\n}\n\n.ship-orientation{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n    padding-top: 2vh;\n}\n\n.ship-orientation p{\n    font-size: clamp(0.7rem, 1.25vw, 1.5rem);\n    font-family: mainFont;\n}\n\n.ship-orientation button{\n    font-size: clamp(0.7rem, 1.25vw, 1.5rem);\n    font-family: mainFont;\n    border: none;\n    background-color: inherit;\n    cursor: pointer;\n    color: rgb(76, 135, 183);\n}\n\n/* Boards */\n\n.boards-container{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 2rem;\n}\n\n.human-board-container,\n.computer-board-container {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    align-items: center;\n    justify-items: center;\n    gap: 0.1rem;\n    border: 0.1rem solid black;\n    width: 30vw;\n    height: 30vw;\n    overflow: visible;\n    position: relative;\n}\n\n.box{\n    width: 3vw;\n    height: 3vw;\n    border: 0.1rem solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: clamp(0.5rem, 1vw, 1.5rem);\n    font-family: mainFont;\n    transition: background-color 0.3s ease;\n    cursor: crosshair;\n}\n\n.box:hover{\n    background-color: var(--box-hover-color);\n}\n\n/* Ships */\n\n.ship{\n    background-color: var(--ship-bg-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: clamp(0.5rem, 1vw, 1.5rem);\n    font-family: mainFont;\n    /* cursor: crosshair; */\n}\n\n.ship.hit{\n    background-color: var(--ship-hit-color);\n    font-size: clamp(0.5rem, 1vw, 1.5rem);\n}\n\n.ship.sunk{\n    background-color: var(--ship-sunk-color);\n    cursor: default;\n    font-size: clamp(0.5rem, 1vw, 1.5rem);\n    border: 1px solid var(--ship-hit-color);\n}\n\n.missed{\n    background-color: var(--missed-color);\n}\n\n.surround{\n    background-color: var(--surrond-color);\n}\n\n/* Buttons */\n\n.buttons-container button{\n    padding: 1vh 2vw;\n    font-size: clamp(0.75rem, 1.3vw, 1.75rem);\n    font-family: mainFont;\n    border: none;\n    cursor: pointer;\n    background-color: var(--btn-color);\n    box-shadow: 0 0 0.78rem var(--name-container-shadow-color);\n}\n\n.buttons-container button:hover{\n    /* background-color: var(--btn-hover-color); */\n    box-shadow: none;\n\n}\n\n\n/* Footer */\nfooter{\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n    font-size: clamp(0.8rem, 1vw, 1.2rem);\n}\n\nfooter img{\n    height: 2rem;\n    width: 2rem;\n}\n\nfooter a{\n    text-decoration: none;\n    font-size: clamp(0.8rem, 1vw, 1.2rem);\n    color: var(--footer-name-color);\n}`,""]);const m=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function r(n){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===n){r=o;break}return r}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=r(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=t(p,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function t(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=o(n,t),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,r){var o=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var t=void 0!==r.layer;t&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,t&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},435:(n,e,r)=>{n.exports=r.p+"47e9c40d0960a85c00b2.ttf"}},e={};function r(o){var t=e[o];if(void 0!==t)return t.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var o in e)r.o(e,o)&&!r.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var t=o.length-1;t>-1&&(!n||!/^http(s?):/.test(n));)n=o[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0;var o=r(72),t=r.n(o),a=r(825),i=r.n(a),c=r(659),s=r.n(c),l=r(56),d=r.n(l),u=r(540),m=r.n(u),p=r(113),f=r.n(p),h=r(208),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=m(),t()(h.A,v),h.A&&h.A.locals&&h.A.locals,document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector(".name-container"),e=document.querySelector("#name"),r=document.querySelector("#get-name"),o=document.querySelector(".human-board-container"),t=document.querySelector(".user-board-arrange-text"),a=document.querySelector(".buttons-container"),i=document.querySelector(".human-board"),c=document.querySelector(".computer-board");function s(n){document.querySelector(".human-board-container"),i.style.display="grid";for(let e=0;e<10;e++)for(let r=0;r<10;r++){const o=document.createElement("div");o.classList.add("cell"),o.classList.add("box"),o.dataset.row=e,o.dataset.col=r,n.appendChild(o)}n.style.gridTemplateRows="repeat(10, 1fr)",n.style.gridTemplateColumns="repeat(10, 1fr)"}r.addEventListener("submit",(r=>{r.preventDefault();const l=e.value;e.value="",n.style.display="none",function(n){o.style.display="block",a.style.display="block",function(n){t.textContent=`Hello ${n} !! arrange your ships on the board`}(n),s(i),s(c)}(l)}))}))})();