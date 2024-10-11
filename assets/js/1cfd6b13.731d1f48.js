"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1093],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var r=n(6540);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=c,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:c,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3514:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(6540),c=n(53),i=n(4142),o=n(5489),a=n(6654),s=n(1312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(o.A,{href:t,className:(0,c.A)("card padding--lg",l.cardContainer)},n)}function p(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,c.A)("text--truncate",l.cardTitle),title:i},n," ",i),o&&r.createElement("p",{className:(0,c.A)("text--truncate",l.cardDescription),title:o},o))}function u(e){let{item:t}=e;const n=(0,i._o)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.cC)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,i.$S)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const o=(0,i.d1)(t);return r.createElement("section",{className:(0,c.A)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},7767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(8168),c=(n(6540),n(5680)),i=n(3514);const o={title:"NestJS",sidebar_position:4},a=void 0,s={unversionedId:"backend/nest.js/index",id:"backend/nest.js/index",title:"NestJS",description:"",source:"@site/docs/02-backend/04-nest.js/index.md",sourceDirName:"02-backend/04-nest.js",slug:"/backend/nest.js/",permalink:"/backend/nest.js/",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"NestJS",sidebar_position:4},sidebar:"docs",previous:{title:"Node.js \uc774\ubca4\ud2b8 \ub8e8\ud504",permalink:"/backend/node.js/event-loop"},next:{title:"IoC & NestJS DI",permalink:"/backend/nest.js/IoC&DI"}},l={},d=[],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,c.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.yg)(i.A,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);