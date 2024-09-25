"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3809],{5680:(e,n,l)=>{l.d(n,{xA:()=>u,yg:()=>y});var t=l(6540);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(l),g=a,y=c["".concat(p,".").concat(g)]||c[g]||d[g]||r;return l?t.createElement(y,o(o({ref:n},u),{},{components:l})):t.createElement(y,o({ref:n},u))}));function y(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=l[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}g.displayName="MDXCreateElement"},820:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=l(8168),a=(l(6540),l(5680));const r={title:"Node.js \uc774\ubca4\ud2b8 \ub8e8\ud504",description:"Node.js\uc758 \uc774\ubca4\ud2b8 \ub8e8\ud504\uc5d0 \ub300\ud574",tags:["BackEnd","Node.js","EventLoop"],sidebar_position:2},o="Node.js \uc774\ubca4\ud2b8 \ub8e8\ud504",i={unversionedId:"backend/node.js/event-loop",id:"backend/node.js/event-loop",title:"Node.js \uc774\ubca4\ud2b8 \ub8e8\ud504",description:"Node.js\uc758 \uc774\ubca4\ud2b8 \ub8e8\ud504\uc5d0 \ub300\ud574",source:"@site/docs/02-backend/03-node.js/02-event-loop.md",sourceDirName:"02-backend/03-node.js",slug:"/backend/node.js/event-loop",permalink:"/backend/node.js/event-loop",draft:!1,tags:[{label:"BackEnd",permalink:"/tags/back-end"},{label:"Node.js",permalink:"/tags/node-js"},{label:"EventLoop",permalink:"/tags/event-loop"}],version:"current",sidebarPosition:2,frontMatter:{title:"Node.js \uc774\ubca4\ud2b8 \ub8e8\ud504",description:"Node.js\uc758 \uc774\ubca4\ud2b8 \ub8e8\ud504\uc5d0 \ub300\ud574",tags:["BackEnd","Node.js","EventLoop"],sidebar_position:2},sidebar:"docs",previous:{title:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc2a4\ucf54\ud504 & \ud074\ub85c\uc800",permalink:"/backend/node.js/scope&closure"},next:{title:"NestJS",permalink:"/backend/nest.js/"}},p={},s=[{value:"\ub3d9\uae30 vs \ube44\ub3d9\uae30 / \ube14\ub85c\ud0b9 vs \ub17c\ube14\ub85c\ud0b9",id:"\ub3d9\uae30-vs-\ube44\ub3d9\uae30--\ube14\ub85c\ud0b9-vs-\ub17c\ube14\ub85c\ud0b9",level:2},{value:"\ube44\ub3d9\uae30 vs \ub3d9\uae30",id:"\ube44\ub3d9\uae30-vs-\ub3d9\uae30",level:3},{value:"\ube14\ub85c\ud0b9 vs \ub17c\ube14\ub85c\ud0b9",id:"\ube14\ub85c\ud0b9-vs-\ub17c\ube14\ub85c\ud0b9",level:3},{value:"\uc774\ubca4\ud2b8 \ub8e8\ud504",id:"\uc774\ubca4\ud2b8-\ub8e8\ud504",level:2},{value:"libuv",id:"libuv",level:3},{value:"libuv\uc758 \uc6cc\ucee4 \uc2a4\ub808\ub4dc \ud480 \uc791\uc5c5",id:"libuv\uc758-\uc6cc\ucee4-\uc2a4\ub808\ub4dc-\ud480-\uc791\uc5c5",level:4},{value:"Phase",id:"phase",level:3},{value:"timers",id:"timers",level:4},{value:"pending callbacks",id:"pending-callbacks",level:4},{value:"idle, prepare",id:"idle-prepare",level:4},{value:"poll",id:"poll",level:4},{value:"check",id:"check",level:4},{value:"close callbacks",id:"close-callbacks",level:4},{value:"nextTickQueue, microTaskQueue",id:"nexttickqueue-microtaskqueue",level:2},{value:"nextTickQueue",id:"nexttickqueue",level:4},{value:"microTaskQueue",id:"microtaskqueue",level:4}],u={toc:s},c="wrapper";function d(e){let{components:n,...l}=e;return(0,a.yg)(c,(0,t.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"nodejs-\uc774\ubca4\ud2b8-\ub8e8\ud504"},"Node.js \uc774\ubca4\ud2b8 \ub8e8\ud504"),(0,a.yg)("h2",{id:"\ub3d9\uae30-vs-\ube44\ub3d9\uae30--\ube14\ub85c\ud0b9-vs-\ub17c\ube14\ub85c\ud0b9"},"\ub3d9\uae30 vs \ube44\ub3d9\uae30 / \ube14\ub85c\ud0b9 vs \ub17c\ube14\ub85c\ud0b9"),(0,a.yg)("h3",{id:"\ube44\ub3d9\uae30-vs-\ub3d9\uae30"},"\ube44\ub3d9\uae30 vs \ub3d9\uae30"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ub3d9\uae30(Synchronous): \uc791\uc5c5\uc774 ",(0,a.yg)("strong",{parentName:"li"},"\uc21c\ucc28\uc801\uc73c\ub85c")," \uc9c4\ud589\ub41c\ub2e4. \uac01 \uc791\uc5c5\uc774 ",(0,a.yg)("strong",{parentName:"li"},"\uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0")," \ud504\ub85c\uadf8\ub7a8\uc758 \uc2e4\ud589\uc774 \uc911\ub2e8\ub418\uba70, \uadf8 \ub2e4\uc74c \uc791\uc5c5\uc73c\ub85c \ub118\uc5b4\uac00\uc9c0 \uc54a\ub294\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ube44\ub3d9\uae30(Asynchronous): \uc791\uc5c5\uc758 \uc644\ub8cc \uc5ec\ubd80\uc640 \uc0c1\uad00\uc5c6\uc774 ",(0,a.yg)("strong",{parentName:"li"},"\uc989\uc2dc \ub2e4\uc74c \uc791\uc5c5\uc744 \uc2dc\uc791"),"\ud55c\ub2e4. \uc791\uc5c5\uc774 \ub05d\ub098\uba74 \ucf5c\ubc31\uc774\ub098 \uc774\ubca4\ud2b8\uac00 \uc791\uc5c5\uc758 \uc644\ub8cc\ub97c \ucc98\ub9ac\ud55c\ub2e4.")),(0,a.yg)("p",null,"\ub3d9\uae30\uc640 \ube44\ub3d9\uae30\ub294 ",(0,a.yg)("strong",{parentName:"p"},"\ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \ud750\ub984\uc5d0\uc11c \uc791\uc5c5 \uc644\ub8cc\ub97c \ud655\uc778\ud558\ub294 \uc8fc\uccb4"),"\uc5d0 \ub530\ub77c \uad6c\ubd84\ud560 \uc218 \uc788\ub2e4."),(0,a.yg)("h3",{id:"\ube14\ub85c\ud0b9-vs-\ub17c\ube14\ub85c\ud0b9"},"\ube14\ub85c\ud0b9 vs \ub17c\ube14\ub85c\ud0b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ube14\ub85c\ud0b9(Blocking): \uc791\uc5c5\uc774 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \ud574\ub2f9 \uc791\uc5c5\uc5d0 \uc2dc\uc2a4\ud15c \uc790\uc6d0\uc744 \ub3c5\uc810\ud558\uace0, \ub2e4\ub978 \uc791\uc5c5\uc774 \uc911\ub2e8\ub41c\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ub17c\ube14\ub85c\ud0b9(Non-blocking): \uc791\uc5c5\uc774 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \uc2dc\uc2a4\ud15c \uc790\uc6d0\uc744 \ub3c5\uc810\ud558\uc9c0 \uc54a\uace0, \ub2e4\ub978 \uc791\uc5c5\uc774 \uacc4\uc18d\ud574\uc11c \uc2e4\ud589\ub41c\ub2e4.")),(0,a.yg)("p",null,"\ube14\ub85c\ud0b9\uacfc \ub17c\ube14\ub85c\ud0b9\uc740 ",(0,a.yg)("strong",{parentName:"p"},"\uc791\uc5c5\uc774 \uc9c4\ud589\ub418\ub294 \ub3d9\uc548 \uc2e4\ud589 \ud750\ub984\uc774 \ub300\uae30 \uc0c1\ud0dc\uc5d0 \uc788\ub294\uc9c0"),"\uc5d0 \ub530\ub77c \uad6c\ubd84\ud560 \uc218 \uc788\ub2e4."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ube14\ub85c\ud0b9 \uc791\uc5c5\uc740 \ud504\ub85c\uc138\uc2a4\ub098 \uc2a4\ub808\ub4dc\uac00 \uc791\uc5c5\uc774 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \uc2e4\ud589\uc744 \uba48\ucd94\uace0 \uae30\ub2e4\ub9b0\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ub17c\ube14\ub85c\ud0b9 \uc791\uc5c5\uc740 \uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uc9c0 \uc54a\ub354\ub77c\ub3c4 \uc989\uc2dc \ubc18\ud658\ub418\uba70, \ub2e4\ub978 \uc791\uc5c5\uc744 \uc774\uc5b4\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4.")),(0,a.yg)("h2",{id:"\uc774\ubca4\ud2b8-\ub8e8\ud504"},"\uc774\ubca4\ud2b8 \ub8e8\ud504"),(0,a.yg)("p",null,"\uc774\ubca4\ud2b8 \ub8e8\ud504\ub294 Node.js\uac00 \uae30\ubcf8\uc801\uc73c\ub85c \ub2e8\uc77c JavaScript \uc2a4\ub808\ub4dc\ub97c \uc0ac\uc6a9\ud568\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \ub17c\ube14\ub85c\ud0b9 I/O \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\ub294 \uae30\ub2a5\uc774\ub2e4."),(0,a.yg)("h3",{id:"libuv"},"libuv"),(0,a.yg)("p",null,"libuv\ub294 C++\ub85c \uc791\uc131\ub41c, Node.js\uac00 \uc0ac\uc6a9\ud558\ub294 \ube44\ub3d9\uae30 I/O \ub77c\uc774\ube0c\ub7ec\ub9ac\uc774\ub2e4. \ub300\ubd80\ubd84\uc758 \ucd5c\uc2e0 \ucee4\ub110\uc740 \uba40\ud2f0\uc2a4\ub808\ub4dc\uc774\ubbc0\ub85c \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc5ec\ub7ec \uc791\uc5c5\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4. libuv\ub294 OS\uc758 \ucee4\ub110\uc744 \ucd94\uc0c1\ud654\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \ucee4\ub110\uc774 \uc9c0\uc6d0\ud558\ub294 \ube44\ub3d9\uae30 API \ub0b4\uc5ed\uc744 \uc54c\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0, \ube44\ub3d9\uae30 \uc791\uc5c5 \uc694\uccad\uc5d0 \ub300\ud574 \ucee4\ub110\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc791\uc5c5\uc774\ub77c\uba74 \ucee4\ub110\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uace0, \ucee4\ub110\uc5d0\uc11c \ub17c\ube14\ub85c\ud0b9 \ubc84\uc804\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 I/O \uc791\uc5c5\uc774\uac70\ub098 CPU \uc9d1\uc57d\uc801\uc778 \ud2b9\uc815 \uc791\uc5c5\ub4e4\uc758 \uacbd\uc6b0 \ubcc4\ub3c4\uc758 \uc6cc\ucee4 \uc2a4\ub808\ub4dc \ud480\uc5d0\uc11c \ucc98\ub9ac\ud55c\ub2e4."),(0,a.yg)("h4",{id:"libuv\uc758-\uc6cc\ucee4-\uc2a4\ub808\ub4dc-\ud480-\uc791\uc5c5"},"libuv\uc758 \uc6cc\ucee4 \uc2a4\ub808\ub4dc \ud480 \uc791\uc5c5"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"I/O \uc9d1\uc57d"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"DNS: ",(0,a.yg)("inlineCode",{parentName:"li"},"dns.lookup()"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"dns.lookupService()")),(0,a.yg)("li",{parentName:"ul"},"\ud30c\uc77c\uc2dc\uc2a4\ud15c: ",(0,a.yg)("inlineCode",{parentName:"li"},"fs.FSWatcher()"),"\uc640 \uba85\uc2dc\uc801\uc73c\ub85c \ub3d9\uae30\uc2dd\uc778 API\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \ud30c\uc77c\uc2dc\uc2a4\ud15c API"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"CPU \uc9d1\uc57d"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Crypto: ",(0,a.yg)("inlineCode",{parentName:"li"},"crypto.pbkdf2()"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"crypto.scrypt()"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"crypto.randomBytes()"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"crypto.randomFill()"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"crypto.generateKeyPair()")),(0,a.yg)("li",{parentName:"ul"},"Zlip: \uba85\uc2dc\uc801\uc73c\ub85c \ub3d9\uae30\uc2dd\uc778 API\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 Zlib API")))),(0,a.yg)("h3",{id:"phase"},"Phase"),(0,a.yg)("p",null,"Node.js\uac00 \uc2dc\uc791\ub418\uba74 \uc774\ubca4\ud2b8 \ub8e8\ud504\ub97c \ucd08\uae30\ud654\ud558\uace0 \uc81c\uacf5\ub41c \uc785\ub825 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucc98\ub9ac\ud55c\ub2e4. \uc774 \ub54c \ube44\ub3d9\uae30 API \ud638\ucd9c, \ud0c0\uc774\uba38 \uc608\uc57d, process.nextTick() \ud638\ucd9c \ub4f1\uc744 \ud560 \uc218 \uc788\ub2e4. \uc2a4\ud06c\ub9bd\ud2b8\uac00 \ucc98\ub9ac\ub41c \ud6c4\uc5d0 Node.js\ub294 \uc774\ubca4\ud2b8 \ub8e8\ud504 \uc548\uc5d0\uc11c \ud574\uc57c\ud560 \uc791\uc5c5\uc774 \uc788\ub294\uc9c0\ub97c \ud655\uc778\ud558\uace0 \ud574\uc57c\ud560 \uc791\uc5c5\uc774 \ub0a8\uc544\uc788\ub2e4\uba74 \uc774\ubca4\ud2b8 \ub8e8\ud504\uc758 \uccab \ud398\uc774\uc988\ub97c \uc2dc\uc791\ud55c\ub2e4."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u250c\u2500>\u2502           timers          \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2502     pending callbacks     \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2502       idle, prepare       \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2502   incoming:   \u2502\n\u2502  \u2502           poll            \u2502<\u2500\u2500\u2500\u2500\u2500\u2524  connections, \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2502   data, etc.  \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u2502           check           \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2514\u2500\u2500\u2524      close callbacks      \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.yg)("p",null,"\uac01 \ubc15\uc2a4\uc5d0 \uc788\ub294 \uc774\ubca4\ud2b8 \ub8e8\ud504\uc758 \ub2e8\uacc4\ub4e4\uc744 \ud398\uc774\uc988(Phase)\ub77c\uace0 \ubd80\ub978\ub2e4. \uac01 \ud398\uc774\uc988\ub294 \uc2e4\ud589\ud560 \ucf5c\ubc31\uc758 FIFO \ud050\ub97c \uac16\uace0 \uc788\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc774\ubca4\ud2b8 \ub8e8\ud504\uac00 \uac01 \ud398\uc774\uc988\uc5d0 \uc9c4\uc785\ud558\uba74 \ud574\ub2f9 \ud398\uc774\uc988\uc758 \ud2b9\uc815\ud55c \uc791\uc5c5\ub4e4\uc744 \uc218\ud589\ud55c \ub2e4\uc74c \ud050\uac00 \ubaa8\ub450 \uc18c\uc9c4\ub418\uac70\ub098 \ucd5c\ub300 \ucf5c\ubc31 \uc218\uc5d0 \ub3c4\ub2ec\ud560 \ub54c\uae4c\uc9c0 \ud050\uc5d0 \uc788\ub294 \ucf5c\ubc31\ub4e4\uc744 \uc2e4\ud589\ud55c\ub2e4. \ud050\uac00 \uc18c\uc9c4\ub418\uac70\ub098 \ucf5c\ubc31 \uc81c\ud55c\uc5d0 \ub3c4\ub2ec\ud558\uba74 \uc774\ubca4\ud2b8 \ub8e8\ud504\ub294 \ub2e4\uc74c \ud398\uc774\uc988\ub85c \uc774\ub3d9\ud55c\ub2e4. \uc774 \ub54c \ub2e4\uc74c \ud398\uc774\uc988\ub85c \uc774\ub3d9\ud558\ub294 \uac83\uc744 \ud2f1(Tick)\uc774\ub77c\uace0 \ubd80\ub978\ub2e4."),(0,a.yg)("h4",{id:"timers"},"timers"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"setTimeout")," \ubc0f ",(0,a.yg)("inlineCode",{parentName:"p"},"setInterval"),"\uacfc \uac19\uc740 \ud0c0\uc774\uba38 \uae30\ubc18 \ud568\uc218\ub4e4\uc758 \ucf5c\ubc31\uc744 \ucc98\ub9ac\ud558\ub294 \ud398\uc774\uc988\uc774\ub2e4. \uc774 \ud398\uc774\uc988\uc5d0\uc11c\ub294 \ud0c0\uc774\uba38\uac00 \ub4f1\ub85d\ub41c \uc2dc\uac04\uc5d0 \ub530\ub77c \uc2e4\ud589\ub418\uc5b4\uc57c \ud560 \ucf5c\ubc31\ub4e4\uc744 \uc800\uc7a5\ud558\uace0 \uad00\ub9ac\ud55c\ub2e4."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ud0c0\uc774\uba38\ub4e4\uc740 \ucd5c\uc18c \ud799(min-heap) \ud615\ud0dc\ub85c \uc800\uc7a5\ub418\uc5b4 \uac00\uc7a5 \uc2e4\ud589 \uc2dc\uac04\uc774 \uc784\ubc15\ud55c \ud0c0\uc774\uba38\uac00 \ud6a8\uc728\uc801\uc73c\ub85c \uc120\ud0dd\ub41c\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ub9cc\uc57d \ud799\uc758 \ub8e8\ud2b8\uc5d0 \uc704\uce58\ud55c \ud0c0\uc774\uba38\uc758 \uc2e4\ud589 \uc2dc\uac04\uc774 \uc544\uc9c1 \ub3c4\ub2ec\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74, \uc774\ubca4\ud2b8 \ub8e8\ud504\ub294 \ub2e4\uc74c \ud398\uc774\uc988\ub85c \ub118\uc5b4\uac04\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\uc2e4\ud589\ud560 \ud0c0\uc774\uba38\uac00 \uc788\uc73c\uba74, \ucf5c\ubc31 \uc81c\ud55c\uc5d0 \ub3c4\ub2ec\ud560 \ub54c\uae4c\uc9c0 \ud574\ub2f9 \ud0c0\uc774\uba38\uc758 \ucf5c\ubc31\ub4e4\uc744 \uc2e4\ud589\ud55c\ub2e4.")),(0,a.yg)("h4",{id:"pending-callbacks"},"pending callbacks"),(0,a.yg)("p",null,"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc758 \ub450 \ubc88\uc9f8 \ud398\uc774\uc988\ub85c, \ud2b9\uc815 I/O \uc791\uc5c5\uc774 \uc644\ub8cc\ub41c \ud6c4 \uc9c0\uc5f0\ub41c \ucf5c\ubc31\uc744 \uc2e4\ud589\ud558\ub294 \ud398\uc774\uc988\uc774\ub2e4. \uc774 \ud398\uc774\uc988\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \ucf5c\ubc31\uc740 \uc8fc\ub85c \uc2dc\uc2a4\ud15c \uc218\uc900\uc5d0\uc11c \uc644\ub8cc\ub41c \uc791\uc5c5\ub4e4\ub85c, Node.js\uac00 \ub0b4\ubd80\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uc791\uc5c5\ub4e4\uc758 \ud6c4\uc18d \ucc98\ub9ac\uac00 \uc774\ub8e8\uc5b4\uc9c4\ub2e4. \ub124\ud2b8\uc6cc\ud06c I/O \uc791\uc5c5\uc5d0\uc11c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c\ub098, \ud30c\uc77c\uc744 \uc77d\ub2e4\uac00 \ubc1c\uc0dd\ud55c \uc5d0\ub7ec \uc774\ubca4\ud2b8\uc640 \uac19\uc740 \ucf5c\ubc31\ub4e4\uc774 \uc774 \ud398\uc774\uc988\uc5d0\uc11c \ucc98\ub9ac\ub41c\ub2e4."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ud30c\uc77c \uc2dc\uc2a4\ud15c\uc774\ub098 \ub124\ud2b8\uc6cc\ud06c \uc18c\ucf13 \ub4f1, \ud2b9\uc815 I/O \uc791\uc5c5\uc774 \uc644\ub8cc\ub41c \ud6c4 \ubc14\ub85c \uc2e4\ud589\ub418\uc9c0 \uc54a\uace0 \uc9c0\uc5f0\ub41c \ucf5c\ubc31\ub4e4\uc744 \ucc98\ub9ac\ud55c\ub2e4.")),(0,a.yg)("h4",{id:"idle-prepare"},"idle, prepare"),(0,a.yg)("p",null,"\uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811\uc801\uc73c\ub85c \uad00\uc5ec\ud558\uc9c0 \uc54a\ub294 Node.js\uc758 \ub0b4\ubd80 \uad00\ub9ac\ub97c \uc704\ud55c \ud398\uc774\uc988\uc774\ub2e4."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"idle: \uc8fc\ub85c libuv \ub0b4\ubd80\uc5d0\uc11c CPU \ub0ad\ube44\ub97c \uc904\uc774\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\uba70, \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\ub294 \uc9c1\uc811\uc801\uc778 \ub178\ucd9c\uc774 \uc5c6\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"prepare: poll \ud398\uc774\uc988\uac00 \uc2dc\uc791\ub418\uae30 \uc804\uc5d0 libuv\uac00 \uc774\ubca4\ud2b8 \ub8e8\ud504\ub97c \uc900\ube44\ud558\ub294 \ub2e8\uacc4\ub85c, \uc8fc\ub85c \ub0b4\ubd80\uc801\uc778 \ucd5c\uc801\ud654 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ub41c\ub2e4.")),(0,a.yg)("h4",{id:"poll"},"poll"),(0,a.yg)("p",null,"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc5d0\uc11c \ube44\ub3d9\uae30 I/O \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\ub294 \ud575\uc2ec \ud398\uc774\uc988\uc774\ub2e4. poll \ud398\uc774\uc988\uc758 \uc8fc\uc694 \uc5ed\ud560\uc740 \ud30c\uc77c \uc2dc\uc2a4\ud15c, \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uacfc \uac19\uc740 \ube44\ub3d9\uae30 I/O \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \uac83\uc774\ub2e4. \uc774\ubca4\ud2b8 \ub8e8\ud504\uc5d0\uc11c \uac00\uc7a5 \uc624\ub79c \uc2dc\uac04\uc744 \ucc28\uc9c0\ud558\ub294 \ud398\uc774\uc988\ub85c, \ub300\ubd80\ubd84\uc758 \ube44\ub3d9\uae30 I/O \ucc98\ub9ac\uac00 \uc774 \ub2e8\uacc4\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9c4\ub2e4. \ub9cc\uc57d \ud0c0\uc774\uba38\uac00 \uc124\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub2e4\uba74, poll \ud398\uc774\uc988\ub294 \uc0c8\ub85c\uc6b4 I/O \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c\uae4c\uc9c0 \ub300\uae30\ud560 \uc218 \uc788\uc73c\uba70, \ud0c0\uc774\uba38\uac00 \uc124\uc815\ub41c \uacbd\uc6b0 \uadf8\uc5d0 \ub530\ub77c \ub300\uae30 \uc2dc\uac04\uc774 \uc870\uc815\ub41c\ub2e4."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"I/O \uc774\ubca4\ud2b8 \ucc98\ub9ac \ub300\uae30: \uc644\ub8cc\ub41c I/O \uc774\ubca4\ud2b8\uac00 \uc5c6\ub2e4\uba74, \uc0c8\ub85c\uc6b4 I/O \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c\uae4c\uc9c0 \ub300\uae30\ud558\uac70\ub098, \ub2e4\uc74c \ud398\uc774\uc988\ub85c \ub118\uc5b4\uac04\ub2e4. \ub9cc\uc57d \uc2e4\ud589\ud560 \ud0c0\uc774\uba38(",(0,a.yg)("inlineCode",{parentName:"p"},"setTimeout"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"setInterval"),")\ub098 ",(0,a.yg)("inlineCode",{parentName:"p"},"setImmediate"),"\ub85c \uc608\uc57d\ub41c \uc791\uc5c5, \uc644\ub8cc\ub41c I/O \uc791\uc5c5\uc774 \uc5c6\ub2e4\uba74, \ub2e4\uc74c I/O \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c\uae4c\uc9c0 \ub300\uae30\ud55c\ub2e4. \uc774 \ub300\uae30 \uc2dc\uac04\uc740 \ud0c0\uc774\uba38\ub098 \uc608\uc57d\ub41c \uc791\uc5c5\uc758 \uc0c1\ud0dc\uc5d0 \ub530\ub77c libuv\uac00 \uad00\ub9ac\ud55c\ub2e4.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"I/O \ucf5c\ubc31 \uc2e4\ud589: \ucee4\ub110\uc5d0\uc11c \uc644\ub8cc\ub41c I/O \uc791\uc5c5\ub4e4\uc758 \ucf5c\ubc31\uc744 \ucc98\ub9ac\ud55c\ub2e4. \ud30c\uc77c \uc77d\uae30/\uc4f0\uae30, \ub124\ud2b8\uc6cc\ud06c \uc694\uccad, \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucffc\ub9ac \ub4f1\uc758 \ucf5c\ubc31\uc774 \uc774 \ud398\uc774\uc988\uc5d0\uc11c \uc2e4\ud589\ub41c\ub2e4. \ucee4\ub110\uc5d0\uc11c \ucc98\ub9ac\ub41c I/O \uc791\uc5c5\uc774 \ub05d\ub09c \ud6c4, \uadf8 \uc791\uc5c5\uc758 \ucf5c\ubc31\uc740 poll \ud050\uc5d0 \uc313\uc774\uace0, \ud574\ub2f9 \ucf5c\ubc31\uc740 \uc774 \ud398\uc774\uc988\uc5d0\uc11c \uc2e4\ud589\ub41c\ub2e4."))),(0,a.yg)("h4",{id:"check"},"check"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"setImmediate"),"\ub85c \uc608\uc57d\ub41c \ucf5c\ubc31\uc744 \ucc98\ub9ac\ud558\ub294 \ub2e8\uacc4\uc774\ub2e4. poll \ud398\uc774\uc988\uac00 \ub05d\ub09c \ud6c4\uc5d0 \uc2e4\ud589\ub418\uba70, \ub300\uae30 \uc911\uc778 ",(0,a.yg)("inlineCode",{parentName:"p"},"setImmediate")," \ucf5c\ubc31\ub4e4\uc744 \ucc98\ub9ac\ud558\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4."),(0,a.yg)("h4",{id:"close-callbacks"},"close callbacks"),(0,a.yg)("p",null,"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc758 \ub9c8\uc9c0\ub9c9 \ud398\uc774\uc988\ub85c, \uc18c\ucf13\uc774\ub098 \ud578\ub4e4\uc774 \ub2eb\ud790 \ub54c \ubc1c\uc0dd\ud558\ub294 \ud2b9\uc815 \uc774\ubca4\ud2b8 \ucc98\ub9ac\uc640 \uad00\ub828\ub41c \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \ud398\uc774\uc988\uc774\ub2e4. \uc18c\ucf13\uc774 \uc81c\ub300\ub85c \ub2eb\ud788\uc9c0 \uc54a\uac70\ub098 \uac11\uc791\uc2a4\ub7fd\uac8c \ub2eb\ud790 \ub54c \ud544\uc694\ud55c \ud074\ub9b0\uc5c5 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \ub370 \uc0ac\uc6a9\ub41c\ub2e4."),(0,a.yg)("h2",{id:"nexttickqueue-microtaskqueue"},"nextTickQueue, microTaskQueue"),(0,a.yg)("p",null,"nextTickQueue\uc640 microTaskQueue\uc5d0 \uc788\ub294 \ucf5c\ubc31\ub4e4\uc740 \uc774\ubca4\ud2b8 \ub8e8\ud504\uc758 \ud398\uc774\uc988\ub4e4\uacfc \ub2e4\ub974\uac8c \ucf5c\ubc31 \uc81c\ud55c\uc774 \uc5c6\uc774 \ud050\uac00 \ube44\uc6cc\uc9c8 \ub54c\uae4c\uc9c0 \ubaa8\ub4e0 \ucf5c\ubc31\ub4e4\uc744 \uc2e4\ud589\ud55c\ub2e4."),(0,a.yg)("p",null,"Node v11.0.0 \ubc84\uc804 \uc774\uc804\uc5d0\ub294 \ud55c \ud398\uc774\uc988\uc5d0\uc11c \ub2e4\uc74c \ud398\uc774\uc988\ub85c \ub118\uc5b4\uac00\uae30 \uc804, \ub9e4 \ud2f1\ub9c8\ub2e4 \ud574\ub2f9 \ud050\ub4e4\uc744 \uac80\uc0ac\ud558\uc5ec \uc2e4\ud589\ud588\ub2e4. Node v11.0.0 \ubc84\uc804\ubd80\ud130\ub294 \ud604\uc7ac \uc2e4\ud589\ud558\uace0 \uc788\ub294 \uc791\uc5c5\uc774 \ub05d\ub098\uba74 \uc989\uc2dc \ud050\ub4e4\uc744 \uac80\uc0ac\ud558\uace0 \uc2e4\ud589\ud558\ub3c4\ub85d \ubcc0\uacbd\ub418\uc5c8\ub2e4."),(0,a.yg)("h4",{id:"nexttickqueue"},"nextTickQueue"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"process.nextTick()")," \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \uc608\uc57d\ub41c \ucf5c\ubc31\uc744 \uc800\uc7a5\ud558\ub294 \ud050\uc774\ub2e4. nextTickQueue\ub294 \ud56d\uc0c1 \uc6b0\uc120\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uba70, microTaskQueue\ubcf4\ub2e4 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\ub2e4."),(0,a.yg)("h4",{id:"microtaskqueue"},"microTaskQueue"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\uc758 \ucf5c\ubc31\ub4e4\uc744 \uc800\uc7a5\ud558\ub294 \ud050\uc774\ub2e4."),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\ucc38\uc870")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"},"https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/en/learn/asynchronous-work/understanding-processnexttick"},"https://nodejs.org/en/learn/asynchronous-work/understanding-processnexttick")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop"},"https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.korecmblog.com/blog/node-js-event-loop"},"https://www.korecmblog.com/blog/node-js-event-loop")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://gednanetwork.com/new-changes-to-the-timers-and-microtasks-in-node-v11-0-0-and-above"},"https://gednanetwork.com/new-changes-to-the-timers-and-microtasks-in-node-v11-0-0-and-above")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.voidcanvas.com/nodejs-event-loop"},"https://www.voidcanvas.com/nodejs-event-loop")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://black7375.tistory.com/90"},"https://black7375.tistory.com/90")))}d.isMDXComponent=!0}}]);