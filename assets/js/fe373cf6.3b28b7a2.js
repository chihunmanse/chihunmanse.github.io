"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,d=s["".concat(i,".").concat(m)]||s[m]||k[m]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2759:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac",description:"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac",keywords:["docker","container","kubernetes"],tags:["BackEnd","Docker"],authors:"chihun"},c="Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac",l={permalink:"/2023/11/03/backend/docker/docker-basic",source:"@site/blog/backend/docker/2023-11-03-docker-basic.md",title:"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac",description:"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac",date:"2023-11-03T00:00:00.000Z",formattedDate:"November 3, 2023",tags:[{label:"BackEnd",permalink:"/tags/back-end"},{label:"Docker",permalink:"/tags/docker"}],readingTime:22.635,hasTruncateMarker:!0,authors:[{name:"Chihun Park",url:"https://github.com/chihunmanse",email:"chihunmanse@gmail.com",imageURL:"https://p.ipic.vip/o1ih3g.png",key:"chihun"}],frontMatter:{title:"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac",description:"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac",keywords:["docker","container","kubernetes"],tags:["BackEnd","Docker"],authors:"chihun"},prevItem:{title:"\uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",permalink:"/2023/11/10/backend/kubernetes/garbage-collection"},nextItem:{title:"Contract Error Handling",permalink:"/2023/09/10/blockchain/contract-errorhandling"}},i={authorsImageUrls:[void 0]},p=[{value:"\uc774\ubbf8\uc9c0 &amp; \ucee8\ud14c\uc774\ub108",id:"\uc774\ubbf8\uc9c0--\ucee8\ud14c\uc774\ub108",level:2},{value:"\ub3c4\ucee4\uc758 \uae30\ubcf8 \uac1c\ub150",id:"\ub3c4\ucee4\uc758-\uae30\ubcf8-\uac1c\ub150",level:3}],u={toc:p},s="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud574\ub2f9 \uae00\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://www.udemy.com/course/docker-kubernetes-2022/"},"Docker & Kubernetes : \uc2e4\uc804 \uac00\uc774\ub4dc")," \uac15\uc758 \ub0b4\uc6a9\uc744 \ud1a0\ub300\ub85c \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc774\ubbf8\uc9c0--\ucee8\ud14c\uc774\ub108"},"\uc774\ubbf8\uc9c0 & \ucee8\ud14c\uc774\ub108"),(0,a.kt)("h3",{id:"\ub3c4\ucee4\uc758-\uae30\ubcf8-\uac1c\ub150"},"\ub3c4\ucee4\uc758 \uae30\ubcf8 \uac1c\ub150"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ub3c4\ucee4\ub294 \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud558\uace0 \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub3c4\uad6c\uc774\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108\ub780 \ud45c\uc900\ud654\ub41c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc720\ub2db\uc73c\ub85c, \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294\ub370 \ud544\uc694\ud55c \uc885\uc18d\uc131\uacfc \ub3c4\uad6c\uacfc \ud3ec\ud568\ub41c \ucf54\ub4dc \ud328\ud0a4\uc9c0\uc774\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc77c\ud55c \ucee8\ud14c\uc774\ub108\ub294 \uc5b4\ub514\uc11c \ub204\uac00 \uc2e4\ud589\ud558\ub4e0, \ub3d9\uc77c\ud55c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc2e4\ud589 \ubc0f \ub3d9\uc791\uc744 \uc0dd\uc131\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, Node.js \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ucd95\ud558\ub294 \uacbd\uc6b0 \ub3c4\ucee4\ub85c \ube4c\ub4dc\ub41c \ucee8\ud14c\uc774\ub108\uc5d0\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc18c\uc2a4 \ucf54\ub4dc \ubfd0\ub9cc \uc544\ub2c8\ub77c Node.js \ub7f0\ud0c0\uc784, \uadf8\ub9ac\uace0 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \ub370 \ud544\uc694\ud55c \uae30\ud0c0 \ub3c4\uad6c\uac00 \ud3ec\ud568\ub420 \uc218 \uc788\ub2e4.\n\ub3d9\uc77c\ud55c Node.js \ucf54\ub4dc\uc640 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\ub294 \ucee8\ud14c\uc774\ub108\ub294 \ud56d\uc0c1 \ub3d9\uc77c\ud55c \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\ub294 Node.js \ub7f0\ud0c0\uc784\uc5d0\uc11c \ub3d9\uc77c\ud55c \ub3d9\uc791\uacfc \uacb0\uacfc\ub97c \uc81c\uacf5\ud55c\ub2e4\ub294 \uc774\uc810\uc774 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub3c4\ucee4\ub294 \uc774\ub7ec\ud55c \ucee8\ud14c\uc774\ub108\uc758 \uc0dd\uc131 \ubc0f \uad00\ub9ac\ub97c \uac04\uc18c\ud654\ud55c\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ub3c4\ucee4(\ucee8\ud14c\uc774\ub108)\uac00 \ud544\uc694\ud55c \uc774\uc720")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud504\ub85c\ub355\uc158 \ud658\uacbd\uacfc \ub611\uac19\uc740 \uac1c\ubc1c \ud658\uacbd\uc5d0\uc11c \uc0c8\ub85c \uac1c\ubc1c\ub418\ub294 \ucf54\ub4dc\ub97c \ube4c\ub4dc\ud558\uace0 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud568\uaed8 \uac1c\ubc1c\ud558\ub294 \ud300\uc758 \uba64\ubc84\ub4e4\uc774 \uac19\uc740 \ud504\ub85c\uc81d\ud2b8\ub97c \uac1c\ubc1c\ud560 \ub54c \ub3d9\uc77c\ud658 \ud658\uacbd\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc791\uc5c5 \uc911\uc778 \ud504\ub85c\uc81d\ud2b8\uac00 \uc5ec\ub7ec \uac1c\uc778 \uacbd\uc6b0 \ud504\ub85c\uc81d\ud2b8 \ubcc4 \uac1c\ubc1c \ud658\uacbd\uc744 \uac04\ud3b8\ud558\uac8c \ubd84\ub9ac\ud560 \uc218 \uc788\ub2e4.")))}k.isMDXComponent=!0}}]);