"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),k=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},m=function(e){var t=k(e.components);return l.createElement(p.Provider,{value:t},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},N=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),o=k(a),N=n,d=o["".concat(p,".").concat(N)]||o[N]||c[N]||r;return a?l.createElement(d,u(u({ref:t},m),{},{components:a})):l.createElement(d,u({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,u=new Array(r);u[0]=N;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[o]="string"==typeof e?e:n,u[1]=i;for(var k=2;k<r;k++)u[k]=a[k];return l.createElement.apply(null,u)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var l=a(7462),n=(a(7294),a(3905));const r={title:"Queue & Stack",tags:["DataStructure","Queue","Stack"],sidebar_position:2},u="Queue & Stack",i={unversionedId:"datastructure-algorithm/queue&stack",id:"datastructure-algorithm/queue&stack",title:"Queue & Stack",description:"\ud050 (Queue)",source:"@site/docs/datastructure-algorithm/queue&stack.md",sourceDirName:"datastructure-algorithm",slug:"/datastructure-algorithm/queue&stack",permalink:"/datastructure-algorithm/queue&stack",draft:!1,tags:[{label:"DataStructure",permalink:"/tags/data-structure"},{label:"Queue",permalink:"/tags/queue"},{label:"Stack",permalink:"/tags/stack"}],version:"current",sidebarPosition:2,frontMatter:{title:"Queue & Stack",tags:["DataStructure","Queue","Stack"],sidebar_position:2},sidebar:"docs",previous:{title:"List",permalink:"/datastructure-algorithm/list"},next:{title:"DataBase",permalink:"/category/database"}},p={},k=[{value:"\ud050 (Queue)",id:"\ud050-queue",level:2},{value:"\uc8fc\uc694 \uc5f0\uc0b0",id:"\uc8fc\uc694-\uc5f0\uc0b0",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:3},{value:"\uad6c\ud604",id:"\uad6c\ud604",level:3},{value:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4",id:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4",level:3},{value:"\uc2a4\ud0dd (Stack)",id:"\uc2a4\ud0dd-stack",level:2},{value:"\uc8fc\uc694 \uc5f0\uc0b0",id:"\uc8fc\uc694-\uc5f0\uc0b0-1",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5-1",level:3},{value:"\uad6c\ud604",id:"\uad6c\ud604-1",level:3},{value:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4",id:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4-1",level:3}],m={toc:k},o="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(o,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"queue--stack"},"Queue & Stack"),(0,n.kt)("h2",{id:"\ud050-queue"},"\ud050 (Queue)"),(0,n.kt)("p",null,"\ud050\ub294 \uba3c\uc800 \uc800\uc7a5\ud55c \ub370\uc774\ud130\uac00 \uba3c\uc800 \ucd9c\ub825\ub418\ub294 \uc120\uc785\uc120\ucd9c (First In First Out) \ud615\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\uad6c\uc870\uc774\ub2e4. \ud050\ub294 \uc904 \uc11c\uae30\uc640 \ube44\uc2b7\ud55c \uac1c\ub150\uc73c\ub85c, \uc740\ud589\uc5d0\uc11c \uace0\uac1d\uc774 \uc904\uc744 \uc11c\uc11c \uae30\ub2e4\ub9ac\uba74, \uba3c\uc800 \uc628 \uace0\uac1d\uc774 \uc11c\ube44\uc2a4\ub97c \ubc1b\uac8c \ub418\ub294 \ub9e5\ub77d\uacfc \uac19\uc740 \uac1c\ub150\uc774\ub2e4."),(0,n.kt)("h3",{id:"\uc8fc\uc694-\uc5f0\uc0b0"},"\uc8fc\uc694 \uc5f0\uc0b0"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Enqueue (\uc778\ud050, \uc0bd\uc785)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud050\uc5d0 \ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub294 \uc791\uc5c5. \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\uac00 \ud050\uc758 \ub4a4\ucabd\uc5d0 \ucd94\uac00\ub41c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4: O(1)"))),(0,n.kt)("li",{parentName:"ol"},"Dequeue (\ub514\ud050, \uc0ad\uc81c)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud050\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc81c\uac70\ud558\ub294 \uc791\uc5c5. \uac00\uc7a5 \uc55e\uc5d0 \uc788\ub294 \ub370\uc774\ud130\uac00 \uc81c\uac70\ub41c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4: O(1) / Array\ub85c \uad6c\ud604\uc2dc O(N)"))),(0,n.kt)("li",{parentName:"ol"},"Peek (\ud53c\ud06c, \uc870\ud68c)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud050\uc758 \uac00\uc7a5 \uc55e\uc5d0 \uc788\ub294 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud558\ub294 \uc791\uc5c5. \ub370\uc774\ud130\ub97c \uc81c\uac70\ud558\uc9c0\ub294 \uc54a\ub294\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4: O(1)"))),(0,n.kt)("li",{parentName:"ol"},"isEmpty (\ube44\uc5b4\uc788\ub294\uc9c0 \ud655\uc778)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud050\uac00 \ube44\uc5b4\uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \uc791\uc5c5."),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4: O(1)")))),(0,n.kt)("h3",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc758 \uc0bd\uc785, \uc0ad\uc81c\uac00 \ube60\ub974\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc785\ub825 \uc21c\uc11c\uc5d0 \ub530\ub77c \ucc98\ub9ac\ud574\uc57c \ud558\ub294 \uc791\uc5c5\uc5d0 \uc801\ud569\ud558\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub9ce\uc740 \ud050 \uad6c\ud604\uc5d0\uc11c\ub294 \ucd08\uae30\ud654 \uc2dc \uace0\uc815\ub41c \ud06c\uae30\ub97c \uc124\uc815\ud574\uc57c \ud55c\ub2e4. \ud050\uac00 \uac00\ub4dd \ucc28\uba74 \ub354 \uc774\uc0c1 \ub370\uc774\ud130\ub97c \uc0bd\uc785\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0, \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294 \ud050\uc758 \ud06c\uae30\ub97c \ub298\ub9ac\uac70\ub098 \ub370\uc774\ud130\ub97c \uc81c\uac70\ud574\uc57c \ud55c\ub2e4. \ud06c\uae30\ub97c \ub3d9\uc801\uc73c\ub85c \uc870\uc815\ud558\ub294 \ud050(\uc608: Python\uc758 ",(0,n.kt)("inlineCode",{parentName:"li"},"deque"),")\ub3c4 \uc788\uc9c0\ub9cc, \uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0\ub3c4 \ud06c\uae30 \ubcc0\uacbd \uc2dc \uc131\ub2a5 \uc800\ud558\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc21c\ucc28\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc0bd\uc785\ud558\uace0 \uc0ad\uc81c\ud558\ub294 \ub370 \uc801\ud569\ud558\uc9c0\ub9cc, \ud2b9\uc815 \uc704\uce58\uc758 \ub370\uc774\ud130\ub97c \uc9c1\uc811 \uc811\uadfc\ud558\uac70\ub098 \uc218\uc815\ud558\ub294 \uc791\uc5c5\uc740 \ube44\ud6a8\uc728\uc801\uc774\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9 \uc0ac\ub840",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc791\uc5c5 \ub300\uae30\uc5f4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uc791\uc5c5\uc774 \ub4e4\uc5b4\uc624\uba74 \uac00\uc7a5 \uba3c\uc800 \ub4e4\uc5b4\uc628 \uc791\uc5c5\uc774 \uac00\uc7a5 \uba3c\uc800 \uc218\ud589\ub418\uc5b4\uc57c \ud558\ub294 \uc0c1\ud669\uc5d0\uc11c \ud050\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\ub108\ube44 \uc6b0\uc120 \ud0d0\uc0c9(BFS)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uadf8\ub798\ud504\uc5d0\uc11c \ub108\ube44 \uc6b0\uc120 \ud0d0\uc0c9\uc744 \uc218\ud589\ud560 \ub54c \ud050\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub178\ub4dc\ub97c \ud0d0\uc0c9 \uc21c\uc11c\ub300\ub85c \uc800\uc7a5\ud558\uace0 \ud0d0\uc0c9\ud560 \uc218 \uc788\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\uce90\uc2dc(Cache) \uad6c\ud604",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uce90\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 \uac00\uc838\uc62c \ub54c\uc5d0\ub3c4 \ud050\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \uc0ac\uc6a9\ub41c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 \uc624\ub798\ub41c \ub370\uc774\ud130\ub97c \uc81c\uac70\ud560 \uc218 \uc788\ub2e4.")))))),(0,n.kt)("h3",{id:"\uad6c\ud604"},"\uad6c\ud604"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\n# Queue \uc0dd\uc131\nqueue = deque()\n\n# Queue\uc5d0 \ub370\uc774\ud130 \uc0bd\uc785\nqueue.append('A')\nqueue.append('B')\nqueue.append('C')\n\n# Queue\uc5d0\uc11c \ub370\uc774\ud130 \uc81c\uac70 (\uc120\uc785\uc120\ucd9c)\nfirst_element = queue.popleft()\nprint(f'Removed Element: {first_element}')  # \ucd9c\ub825: Removed Element: A\n\n# Queue \uc0c1\ud0dc \ucd9c\ub825\nprint(f'Queue: {list(queue)}')  # \ucd9c\ub825: Queue: ['B', 'C']\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"deque"),"\ub294 Python\uc758 ",(0,n.kt)("inlineCode",{parentName:"li"},"collections")," \ubaa8\ub4c8\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc591\ubc29\ud5a5 \ud050\ub85c, \ud050\uc758 \uad6c\ud604\uc5d0 \uc801\ud569\ud558\ub2e4. ",(0,n.kt)("inlineCode",{parentName:"li"},"append()")," \uba54\uc11c\ub4dc\ub85c \ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\uace0, ",(0,n.kt)("inlineCode",{parentName:"li"},"popleft()")," \uba54\uc11c\ub4dc\ub85c \ub370\uc774\ud130\ub97c \uc81c\uac70\ud560 \uc218 \uc788\ub2e4.")),(0,n.kt)("h3",{id:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc5f0\uc0b0"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc0bd\uc785(Enqueue)"),(0,n.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc0ad\uc81c(Dequeue)"),(0,n.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc811\uadfc(Acess)"),(0,n.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud0d0\uc0c9(Search)"),(0,n.kt)("td",{parentName:"tr",align:null},"O(n)")))),(0,n.kt)("h2",{id:"\uc2a4\ud0dd-stack"},"\uc2a4\ud0dd (Stack)"),(0,n.kt)("p",null,"\uc2a4\ud0dd\uc740 \uc2dc\uac04 \uc21c\uc11c\uc0c1 \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \ucd94\uac00\ud55c \ub370\uc774\ud130\uac00 \uac00\uc7a5 \uba3c\uc800 \ub098\uc624\ub294 \ud6c4\uc785\uc120\ucd9c LIFO(Last In First Out) \ud615\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\uad6c\uc870\uc774\ub2e4."),(0,n.kt)("h3",{id:"\uc8fc\uc694-\uc5f0\uc0b0-1"},"\uc8fc\uc694 \uc5f0\uc0b0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Push (\ud478\uc2dc)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc2a4\ud0dd\uc5d0 \ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub294 \uc5f0\uc0b0. \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\uac00 \uc2a4\ud0dd\uc758 \ub9e8 \uc704\uc5d0 \uc313\uc774\uac8c \ub41c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4: O(1)"))),(0,n.kt)("li",{parentName:"ul"},"Pop (\ud31d)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc2a4\ud0dd\uc5d0\uc11c \uac00\uc7a5 \uc704\uc5d0 \uc788\ub294 \ub370\uc774\ud130\ub97c \uc81c\uac70\ud558\ub294 \uc5f0\uc0b0. \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \ucd94\uac00\ub41c \ub370\uc774\ud130\uac00 \uc81c\uac70\ub41c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4: O(1)"))),(0,n.kt)("li",{parentName:"ul"},"Top (\ud0d1)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc2a4\ud0dd\uc758 \uac00\uc7a5 \uc704\uc5d0 \uc788\ub294 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud558\ub294 \uc5f0\uc0b0\uc774\uc9c0\ub9cc, \uc81c\uac70\ud558\uc9c0\ub294 \uc54a\ub294\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4: O(1)")))),(0,n.kt)("h3",{id:"\ud2b9\uc9d5-1"},"\ud2b9\uc9d5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc758 \uc0bd\uc785, \uc0ad\uc81c\uac00 \ube60\ub974\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud6c4\uc785\uc120\ucd9c \ubc29\uc2dd\uc73c\ub85c \ucd5c\uadfc\uc5d0 \ucd94\uac00\ub41c \ub370\uc774\ud130\uc5d0 \uc27d\uac8c \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uace0\uc815 \ud06c\uae30 \uc2a4\ud0dd\uc5d0\uc11c\ub294 \ud06c\uae30\ub97c \ucd08\uacfc\ud558\ub294 \ub370\uc774\ud130\ub97c \uc0bd\uc785\ud558\ub824\uace0 \ud560 \ub54c \uc2a4\ud0dd \uc624\ubc84\ud50c\ub85c\uc6b0(Overflow)\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4. \ub3d9\uc801 \ud06c\uae30\uc758 \uc2a4\ud0dd\ub3c4 \ud06c\uae30 \uc99d\uac00 \uc2dc \uba54\ubaa8\ub9ac \uc7ac\ud560\ub2f9\uc774 \ud544\uc694\ud558\uc5ec \uc131\ub2a5\uc774 \uc800\ud558\ub420 \uc218 \uc788\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc2a4\ud0dd\uc740 \ud6c4\uc785\uc120\ucd9c(LIFO) \uc6d0\uce59\uc5d0 \ub530\ub77c \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0, \uc2a4\ud0dd\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130 \uc911\uac04\uc5d0 \uc811\uadfc\ud558\uac70\ub098 \uc218\uc815\ud558\ub294 \uac83\uc774 \ubd88\uac00\ub2a5\ud558\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9 \uc0ac\ub840",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud568\uc218 \ud638\ucd9c\uacfc \ubc18\ud658",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud568\uc218\uac00 \ud638\ucd9c\ub420 \ub54c\ub9c8\ub2e4 \ud638\ucd9c \uc2a4\ud0dd\uc5d0 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc800\uc7a5\ud558\uace0, \ud568\uc218\uac00 \ubc18\ud658\ub418\uba74 \ud574\ub2f9 \uc0c1\ud0dc\ub97c \uc2a4\ud0dd\uc5d0\uc11c \uc81c\uac70\ud558\ub294\ub370 \uc2a4\ud0dd\uc774 \uc0ac\uc6a9\ub41c\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\ub4a4\ub85c \uac00\uae30 (Undo) \uae30\ub2a5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud3b8\uc9d1\uae30\ub098 \uadf8\ub798\ud53d \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc758 \uc791\uc5c5\uc744 \uc2a4\ud0dd\uc5d0 \uae30\ub85d\ud558\uc5ec \ub418\ub3cc\ub9ac\uae30(undo)\ub97c \uad6c\ud604\ud560 \ub54c \ud65c\uc6a9\ub41c\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DFS(\uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9) \uc54c\uace0\ub9ac\uc998\uc5d0\uc11c \uc2a4\ud0dd\uc744 \ud65c\uc6a9\ud558\uc5ec \uc7ac\uadc0 \ud638\ucd9c\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\uc5ed\uc21c \ucd9c\ub825",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc5ed\uc21c\uc73c\ub85c \ucd9c\ub825\ud558\uac70\ub098 \ucc98\ub9ac\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 \uc2a4\ud0dd\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")))))),(0,n.kt)("h3",{id:"\uad6c\ud604-1"},"\uad6c\ud604"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Stack \uc0dd\uc131\nstack = []\n\n# Stack\uc5d0 \ub370\uc774\ud130 \uc0bd\uc785\nstack.append('A')\nstack.append('B')\nstack.append('C')\n\n# Stack\uc5d0\uc11c \ub370\uc774\ud130 \uc81c\uac70 (\ud6c4\uc785\uc120\ucd9c)\nlast_element = stack.pop()\nprint(f'Removed Element: {last_element}')  # \ucd9c\ub825: Removed Element: C\n\n# Stack \uc0c1\ud0dc \ucd9c\ub825\nprint(f'Stack: {stack}')  # \ucd9c\ub825: Stack: ['A', 'B']\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc2a4\ud0dd\uc740 \ud30c\uc774\uc36c\uc758 \ub9ac\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac04\ub2e8\ud788 \uad6c\ud604\ud560 \uc218 \uc788\ub2e4. ",(0,n.kt)("inlineCode",{parentName:"li"},"append()")," \uba54\uc11c\ub4dc\ub85c \ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\uace0, ",(0,n.kt)("inlineCode",{parentName:"li"},"pop()")," \uba54\uc11c\ub4dc\ub85c \ub370\uc774\ud130\ub97c \uc81c\uac70\ud55c\ub2e4.")),(0,n.kt)("h3",{id:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4-1"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc5f0\uc0b0"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc0bd\uc785(Push)"),(0,n.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc0ad\uc81c(Pop)"),(0,n.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc811\uadfc(Access)"),(0,n.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\ud0d0\uc0c9(Search)"),(0,n.kt)("td",{parentName:"tr",align:null},"O(n)")))))}c.isMDXComponent=!0}}]);