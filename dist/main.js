(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>m});var r=t(601),o=t.n(r),a=t(314),c=t.n(a),i=t(417),s=t.n(i),l=new URL(t(435),t.b),u=c()(o()),d=s()(l);u.push([n.id,`:root{\n    --main-bg-color: #e9f1fb;\n    --name-container-bg-color:#94a3b8;\n    --name-container-shadow-color: #64748b;\n    --btn-color: #d4d4d4;\n    --btn-hover-color: #b1afaf;\n    --footer-name-color: rgb(78, 36, 36);\n}\n\n*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@font-face{\n    font-family: mainFont;\n    src: url(${d});\n}\n\nbody{\n    font-family: mainFont;\n    background-color: var(--main-bg-color);\n}\n\n.body-part-conatiner{\n    height: 100dvh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: clamp(1rem, 1vh, 2rem);\n}\n\n/* Name Text Box */\n\n.name-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: clamp(0.5rem, 1vh, 1.5rem);\n    background-color: var(--name-container-bg-color);\n    padding: 2vh 2vw;\n    padding-bottom: 3vw;\n    border-radius: 1rem;\n    box-shadow: 0 0 0.4rem var(--name-container-shadow-color);    \n}\n\n.enter-name-text{\n    font-size: clamp(1.5rem, 2.5vw, 3rem);\n    color: black;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    gap: clamp(0.5rem, 1.5vh, 1.5rem);\n}\n\n#name{\n    height: 5.8vh;\n    width: 30vw;\n    padding: 0.5rem;\n    font-size: clamp(1rem, 1.5vw, 2rem);\n    border: none;\n    font-family: mainFont;\n}\n\nform button{\n    height: 5.8vh;\n    width: 30vw;\n    font-size: clamp(1rem, 1.5vw, 2rem);\n    font-family: mainFont;\n    border: none;\n    cursor: pointer;\n    background-color: var(--btn-color);\n    box-shadow: 0 0 0.78rem var(--name-container-shadow-color);\n}\n\nform button:hover{\n    /* background-color: var(--btn-hover-color); */\n    box-shadow: none;\n}\n\n/* User Board Section */\n\n.user-board-arrange-text{\n    font-family: mainFont;\n    font-size: clamp(1.5rem, 2.5vw, 3rem);\n}\n\n/* Footer */\nfooter{\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n    font-size: clamp(0.8rem, 1vw, 1.2rem);\n}\n\nfooter img{\n    height: 2rem;\n    width: 2rem;\n}\n\nfooter a{\n    text-decoration: none;\n    font-size: clamp(0.8rem, 1vw, 1.2rem);\n    color: var(--footer-name-color);\n}`,""]);const m=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var m=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var p=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:d,updater:p,references:1})}c.push(d)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},435:(n,e,t)=>{n.exports=t.p+"47e9c40d0960a85c00b2.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),c=t.n(a),i=t(659),s=t.n(i),l=t(56),u=t.n(l),d=t(540),m=t.n(d),f=t(113),p=t.n(f),v=t(208),h={};h.styleTagTransform=p(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=m(),o()(v.A,h),v.A&&v.A.locals&&v.A.locals,document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector(".name-container"),e=document.querySelector("#name"),t=document.querySelector("#get-name"),r=document.querySelector(".human-board-container"),o=document.querySelector(".user-board-arrange-text");document.querySelector(".ship-orientation"),document.querySelector(".orie-btn"),document.querySelector(".human-board"),document.querySelector(".start-game"),t.addEventListener("submit",(t=>{t.preventDefault();const a=e.value;console.log(a),e.value="",function(n){r.style.display="block",function(n){o.textContent=`Hello ${n} !! please arrange your ships on the board`}(n)}(a),n.style.display="none"}))}))})();