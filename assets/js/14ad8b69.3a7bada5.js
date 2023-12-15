"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7003],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),k=n,y=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?r.createElement(y,i(i({ref:t},s),{},{components:a})):r.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={title:"MySQL Master/Slave Replication",tags:["BackEnd","DataBase","MySQL","TypeORM"],authors:"chihun"},i=void 0,o={permalink:"/2023/11/22/backend/sql/mysql-replication",source:"@site/blog/backend/sql/2023-11-22-mysql-replication.md",title:"MySQL Master/Slave Replication",description:"Master/Slave Replication\uc774\ub780?",date:"2023-11-22T00:00:00.000Z",formattedDate:"November 22, 2023",tags:[{label:"BackEnd",permalink:"/tags/back-end"},{label:"DataBase",permalink:"/tags/data-base"},{label:"MySQL",permalink:"/tags/my-sql"},{label:"TypeORM",permalink:"/tags/type-orm"}],readingTime:16.115,hasTruncateMarker:!0,authors:[{name:"Chihun Park",url:"https://github.com/chihunmanse",email:"chihunmanse@gmail.com",imageURL:"https://p.ipic.vip/o1ih3g.png",key:"chihun"}],frontMatter:{title:"MySQL Master/Slave Replication",tags:["BackEnd","DataBase","MySQL","TypeORM"],authors:"chihun"},nextItem:{title:"\uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",permalink:"/2023/11/10/backend/kubernetes/garbage-collection"}},p={authorsImageUrls:[void 0]},c=[{value:"Master/Slave Replication\uc774\ub780?",id:"masterslave-replication\uc774\ub780",level:2},{value:"Master/Slave Replication\uc758 \uc7a5\uc810",id:"masterslave-replication\uc758-\uc7a5\uc810",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"masterslave-replication\uc774\ub780"},"Master/Slave Replication\uc774\ub780?"),(0,n.kt)("p",null,"Master/Slave Replication\uc740 MySQL \ubc0f MariaDB \ub4f1\uacfc \uac19\uc740 DBMS\uc5d0\uc11c \uc8fc\ub85c \uc0ac\uc6a9\ub418\ub294 \ubcf5\uc81c \ubc29\uc2dd \uc911 \ud558\ub098\uc774\ub2e4. \uc774 \ubc29\uc2dd\uc740 \uc8fc\ub85c \ub370\uc774\ud130 \uac00\uc6a9\uc131\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uace0, \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \ubd80\ud558 \ubd84\uc0b0\uc744 \uc704\ud574 \uc0ac\uc6a9\ub41c\ub2e4."),(0,n.kt)("p",null,"Master\uc640 Slave\ub77c\ub294 \uc6a9\uc5b4\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84 \uac04\uc758 \uc5ed\ud560\uc744 \ub098\ud0c0\ub0b8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Master"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Master\ub294 \uc77d\uae30 \ubc0f \uc4f0\uae30 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\ub294 \uc8fc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84\uc774\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc4f0\uae30 \uc791\uc5c5(INSERT, UPDATE, DELETE \ub4f1)\uc740 \uc8fc\ub85c Master \uc11c\ubc84\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9c4\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Slave"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Slave\ub294 Master\uc758 \ub370\uc774\ud130\ub97c \ubcf5\uc81c\ud558\uc5ec \uc800\uc7a5\ud558\ub294 \uc11c\ubc84\uc774\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc77d\uae30 \uc791\uc5c5(SELECT \ub4f1)\uc740 \uc8fc\ub85c Slave \uc11c\ubc84\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9c4\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Slave \uc11c\ubc84\ub294 Master \uc11c\ubc84\uc758 \ub370\uc774\ud130\ub97c \uc8fc\uae30\uc801\uc73c\ub85c \ub3d9\uae30\ud654\ud558\uc5ec \ucd5c\uc2e0 \ub370\uc774\ud130\ub85c \uc720\uc9c0\ub41c\ub2e4.")))),(0,n.kt)("h3",{id:"masterslave-replication\uc758-\uc7a5\uc810"},"Master/Slave Replication\uc758 \uc7a5\uc810"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ubd80\ud558 \ubd84\uc0b0"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc77d\uae30 \uc791\uc5c5\uc774 \uc8fc\ub85c Slave\uc5d0\uc11c \ucc98\ub9ac\ub418\ubbc0\ub85c, Master\ub294 \uc4f0\uae30 \uc791\uc5c5\uc5d0 \uc9d1\uc911\ud560 \uc218 \uc788\ub2e4. \uc774\ub85c \uc778\ud574 \uc804\uccb4 \uc2dc\uc2a4\ud15c\uc758 \ubd80\ud558\uac00 \ubd84\uc0b0\ub418\uc5b4 \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uac00\uc6a9\uc131 \ubc0f \uc7a5\uc560 \ub300\uc751"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Master \uc11c\ubc84\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uae34 \uacbd\uc6b0\uc5d0\ub3c4 Slave \uc11c\ubc84\uc5d0\uc11c \uc77d\uae30 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc758 \uc2dc\uc2a4\ud15c\uc758 \uac00\uc6a9\uc131\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uace0 Master \uc11c\ubc84\uc758 \uc7a5\uc560\ub97c \ub300\ube44\ud560 \uc218 \uc788\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ub370\uc774\ud130 \ubc31\uc5c5"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Slave\ub294 Master\uc758 \ub370\uc774\ud130\ub97c \ubcf5\uc81c\ud558\ubbc0\ub85c, Slave\uc5d0\ub294 Master\uc758 \ub370\uc774\ud130 \ubc31\uc5c5\uc774 \ud3ec\ud568\ub418\uc5b4\uc788\ub2e4. \ub530\ub77c\uc11c \ub370\uc774\ud130 \uc190\uc2e4\uc744 \ucd5c\uc18c\ud654\ud558\uace0 \ubcf5\uad6c\uac00 \uc6a9\uc774\ud560 \uc218 \uc788\uac8c \ud574\uc900\ub2e4.")))))}m.isMDXComponent=!0}}]);