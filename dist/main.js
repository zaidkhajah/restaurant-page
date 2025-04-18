(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},69:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(601),r=t.n(o),a=t(314),c=t.n(a)()(r());c.push([n.id,":root {\n    --main-bg-color: #FFF8EC;\n    --margins-bg-color: #FFB347;\n    --headings-bg-color: #FFB347;\n\n    --p-font-color: #8B5E3C;\n    --h-font-color: #F4A300;\n\n    --border-color: #8B5E3C;\n\n    --btn-bg-color: #5C913B;\n    --btn-font-color: #FF7F50;\n}\n\n.home-tab {\n    background-color: var(--main-bg-color);\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n    border: solid 3px var(--border-color);\n}\n\nimg {\n    width: 25rem;\n    margin: auto;\n}\n\n.home-tab > div {\n    height: fit-content;\n    padding: 1rem;\n    border: solid 3px var(--border-color);\n    text-align: center;\n    color: var(--h-font-color);\n    border-radius: 1rem;\n}",""]);const i=c},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=r(p,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},269:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(601),r=t.n(o),a=t(314),c=t.n(a)()(r());c.push([n.id,":root {\n    --main-bg-color: #FFF8EC;\n    --margins-bg-color: #FFB347;\n    --headings-bg-color: #FFB347;\n\n    --p-font-color: #8B5E3C;\n    --h-font-color: #F4A300;\n\n    --border-color: #8B5E3C;\n\n    --btn-bg-color: #5C913B;\n    --btn-font-color: #FF7F50;\n}\n\n.menu-tab {\n    background-color: var(--main-bg-color);\n    border: solid 3px var(--border-color);\n    color: var(--p-font-color);\n\n    padding: 1rem;\n    text-align: center;\n}\n\n.menu-tab h2 {\n    color: var(--h-font-color);\n    text-align: center;\n    font-size: 3rem;\n}\n\nli > h3 {\n    color: var(--h-font-color);\n    font-size: 1.25rem;\n}\n\n.menu-tab h2,\nli > h3 {\n    font-family: yeseva;\n}",""]);const i=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},365:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(601),r=t.n(o),a=t(314),c=t.n(a),i=t(417),s=t.n(i),l=new URL(t(931),t.b),d=new URL(t(487),t.b),u=c()(r()),m=s()(l),p=s()(d);u.push([n.id,`@font-face {\n    font-family: karla;\n    src: url(${m});\n}\n\n@font-face {\n    font-family: yeseva;\n    src: url(${p});\n}\n\n:root {\n    --main-bg-color: #FFF8EC;\n    --margins-bg-color: #FFB347;\n    --headings-bg-color: #FFB347;\n\n    --p-font-color: #8B5E3C;\n    --h-font-color: #F4A300;\n\n    --border-color: #8B5E3C;\n\n    --btn-bg-color: #5C913B;\n    --btn-font-color: #FF7F50;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0 1.5rem;\n}\n\nli {\n    border-bottom: solid 1px #8B5E3C;\n}\n\nli:last-child {\n    border: none;\n}\n\nbody {\n    height: 100vh;\n    background-color: var(--margins-bg-color);\n    margin: 0;\n\n    display: grid;\n    grid-template-rows: 100px 1fr;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader button {\n    font-size: 1.5rem;\n    background-color: var(--btn-bg-color);\n    border: solid 1px var(--border-color);\n    border-radius: 1rem;\n    padding: 0.2rem 2rem;\n    font-family: yeseva;\n    color: var(--btn-font-color);\n}\n\nheader button:hover {\n    opacity: 0.7;\n}\n\nheader button:active {\n    opacity: 0.4;\n}\n\n#content {\n    height: 100%;\n\n    display: grid;\n    grid-template-columns: 1fr 42rem 1fr;\n    gap: 1rem;\n\n    background-color: var(--margins-bg-color);\n\n}\n\np {\n    font-family: karla;\n}`,""]);const f=u},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},487:(n,e,t)=>{n.exports=t.p+"77e7411de8c57683e277.ttf"},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},567:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(601),r=t.n(o),a=t(314),c=t.n(a)()(r());c.push([n.id,":root {\n    --main-bg-color: #FFF8EC;\n    --margins-bg-color: #FFB347;\n    --headings-bg-color: #FFB347;\n\n    --p-font-color: #8B5E3C;\n    --h-font-color: #F4A300;\n\n    --border-color: #8B5E3C;\n\n    --btn-bg-color: #5C913B;\n    --btn-font-color: #FF7F50;\n}\n\n.about-tab {\n    background-color: var(--main-bg-color);\n    text-align: center;\n    padding: 2rem;\n    border: solid 3px #8B5E3C;\n\n}\n\n.about-tab > h2 {\n    color: var(--h-font-color);\n    font-family: karla;\n}\n\n.about-tab > p {\n    color: var(--p-font-color);\n    font-family: yeseva;\n}",""]);const i=c},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},931:(n,e,t)=>{n.exports=t.p+"1d835e644ae4118a28fc.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;const o=t.p+"2a603ab8d989b36faa1b.png";var r=t(72),a=t.n(r),c=t(825),i=t.n(c),s=t(659),l=t.n(s),d=t(56),u=t.n(d),m=t(540),p=t.n(m),f=t(113),h=t.n(f),g=t(69),b={};b.styleTagTransform=h(),b.setAttributes=u(),b.insert=l().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),a()(g.A,b),g.A&&g.A.locals&&g.A.locals;const v=function(n=!0){const e=document.createElement("div");return e.classList.add(n?"right-margin":"left-margin"),e},y={starters:[["Mango Avocado Salsa & Chips","Ripe mango chunks, creamy avocado, cilantro, red onion, and lime served with tortilla chips.",8.15],["Spicy Mango Shrimp Skewers","Grilled shrimp glazed with chili-mango sauce.",13],["Golden Mango Soup","Chilled mango-coconut soup with a hint of lemongrass.",9.1]],salads:[["Tropical Mango Salad","Mixed greens, grilled chicken, mango slices, cherry tomatoes, red onion, with mango vinaigrette.",12.35],["Quinoa & Mango Bowl","Tri-color quinoa, roasted chickpeas, diced mango, mint, and pomegranate.",11.4]],mains:[["Mango Butter Chicken","Tender chicken in a creamy mango-spiced curry served with jasmine rice.",17.85],["Crispy Mango Fish Tacos","Tempura fish with mango slaw, chipotle aioli in soft corn tortillas.",13.65],["Grilled Mango Chicken","Chicken breast marinated in mango-lime glaze, served with herbed potatoes and sautéed greens.",15.6],["Mango Thai Curry","Coconut-mango red curry with tofu or chicken, bell peppers, and Thai basil. (Vegan option available)",14.65]],drinks:[["Golden Mango Smoothie","Mango, banana, orange juice, and coconut milk.",5.85],["Mango Mint Lemonade","Fresh lemonade with mango purée and muddled mint.",4.9],["Mango Iced Tea","Brewed tea infused with mango syrup.",3.9]],desserts:[["Mango Sticky Rice","Thai-style sticky rice with coconut cream and fresh mango slices.",7.15],["Mango Cheesecake","Creamy cheesecake with a mango glaze on a biscuit crust.",9.1],["Mango Sorbet","Light, refreshing, and dairy-free.",4.9]]};var F=t(269),C={};function E(n,e){const t=document.createElement("div"),o=document.createElement("h2");o.textContent=n;const r=document.createElement("ul");return e.forEach((n=>r.append(function(n,e,t){const o=document.createElement("li"),r=document.createElement("h3");r.textContent=`${n}`;const a=document.createElement("p");a.textContent=`${e}`;const c=document.createElement("p");return c.textContent=`$${t}`,o.append(r,a,c),o}(...n)))),t.append(o,r),t}C.styleTagTransform=h(),C.setAttributes=u(),C.insert=l().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=p(),a()(F.A,C),F.A&&F.A.locals&&F.A.locals;var w=t(567),x={};x.styleTagTransform=h(),x.setAttributes=u(),x.insert=l().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=p(),a()(w.A,x),w.A&&w.A.locals&&w.A.locals;var A=t(365),k={};k.styleTagTransform=h(),k.setAttributes=u(),k.insert=l().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=p(),a()(A.A,k),A.A&&A.A.locals&&A.A.locals;const[T,M,S]=document.querySelector("nav").children,B=function(){const n=document.createElement("img");n.src=o;const e=document.createElement("div"),t=document.createElement("h2");t.textContent="You’ve Just Landed in Flavor Paradise";const r=document.createElement("p");r.textContent="Kick back, relax, and let the golden taste of mango take you on a culinary journey",e.append(t,r);const a=document.createElement("div");return a.classList.add("home-tab"),a.append(n,e),a}(),L=function(){const n=document.createElement("div");n.classList.add("menu-tab");for(const[e,t]of Object.entries(y))n.appendChild(E(e,t));return n}(),I=function(){const n=document.createElement("div");n.classList.add("about-tab");const e=document.createElement("h2");e.textContent="At The Golden Mango, we believe that great food is a celebration — of flavor, color, and culture.";const t=document.createElement("p");return t.textContent="Inspired by the sun-kissed richness of mangoes, our restaurant brings together bold tropical ingredients, handcrafted recipes, and a love for culinary storytelling. Every dish on our menu is thoughtfully created using fresh, seasonal ingredients, with mango at the heart of many of our signature offerings. From zesty starters to creamy desserts, we blend tradition with creativity to serve you meals that are both comforting and adventurous. Whether you're here for a casual lunch, a romantic dinner, or a refreshing smoothie after a long day — you'll always find a little sunshine on your plate.",n.append(e,t),n}(),j=document.querySelector("#content");function P(n){return()=>{j.children[1].replaceWith(n)}}j.append(v(!1)),j.append(B),j.append(v(!0)),T.addEventListener("click",P(B)),M.addEventListener("click",P(L)),S.addEventListener("click",P(I))})();