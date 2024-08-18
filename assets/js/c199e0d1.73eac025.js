"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[290],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>N});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),k=p(a),m=l,N=k["".concat(d,".").concat(m)]||k[m]||o[m]||r;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=m;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u[k]="string"==typeof t?t:l,i[1]=u;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2004:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={title:"List",tags:["DataStructure","List"],sidebar_position:1},i="List",u={unversionedId:"datastructure-algorithm/list",id:"datastructure-algorithm/list",title:"List",description:"List\ub294 \uc21c\uc11c\ub97c \uac16\uace0 \uc6d0\uc18c\ub4e4\uc744 \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\uad6c\uc870\uc774\ub2e4. List \uc790\ub8cc\uad6c\uc870\ub294 Array List\uc640 Linked List\ub85c \uad6c\ud604\ud560 \uc218 \uc788\ub2e4.",source:"@site/docs/datastructure-algorithm/list.md",sourceDirName:"datastructure-algorithm",slug:"/datastructure-algorithm/list",permalink:"/datastructure-algorithm/list",draft:!1,tags:[{label:"DataStructure",permalink:"/tags/data-structure"},{label:"List",permalink:"/tags/list"}],version:"current",sidebarPosition:1,frontMatter:{title:"List",tags:["DataStructure","List"],sidebar_position:1},sidebar:"docs",previous:{title:"DataStructure-Algorithm",permalink:"/category/datastructure-algorithm"},next:{title:"Queue & Stack",permalink:"/datastructure-algorithm/queue&stack"}},d={},p=[{value:"Array List",id:"array-list",level:2},{value:"\ud2b9\uc131",id:"\ud2b9\uc131",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"\ub3d9\uc801 \ubc30\uc5f4 (Dynamic Array)",id:"\ub3d9\uc801-\ubc30\uc5f4-dynamic-array",level:3},{value:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4",id:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4",level:3},{value:"Linked List",id:"linked-list",level:2},{value:"\ud2b9\uc131",id:"\ud2b9\uc131-1",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810-1",level:3},{value:"Doubly Linked List",id:"doubly-linked-list",level:3},{value:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4",id:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4-1",level:3}],s={toc:p},k="wrapper";function o(t){let{components:e,...a}=t;return(0,l.kt)(k,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"list"},"List"),(0,l.kt)("p",null,"List\ub294 \uc21c\uc11c\ub97c \uac16\uace0 \uc6d0\uc18c\ub4e4\uc744 \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\uad6c\uc870\uc774\ub2e4. List \uc790\ub8cc\uad6c\uc870\ub294 Array List\uc640 Linked List\ub85c \uad6c\ud604\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("h2",{id:"array-list"},"Array List"),(0,l.kt)("p",null,"\ubc30\uc5f4\uc740 \uc120\uc5b8 \uc2dc\uc5d0 \uc0ac\uc774\uc988\ub97c \uc815\ud558\uc5ec \ud574\ub2f9 \uc0ac\uc774\uc988\ub9cc\ud07c\uc758 \uc5f0\uc18d\ub41c \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9 \ubc1b\uc544 \ub370\uc774\ud130\ub97c \uc5f0\uc18d\uc801/\uc21c\ucc28\uc801\uc73c\ub85c \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\uad6c\uc870\uc774\ub2e4. static array \ubc0f dynamic array\ub85c \uad6c\ud604\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("h3",{id:"\ud2b9\uc131"},"\ud2b9\uc131"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uace0\uc815\ub41c \uc800\uc7a5 \uacf5\uac04",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubc30\uc5f4\uc740 \uc120\uc5b8 \uc2dc \ud06c\uae30\ub97c \uc815\ud558\uc5ec \uadf8 \ud06c\uae30\ub9cc\ud07c\uc758 \uc5f0\uc18d\ub41c \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9\ubc1b\ub294\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc21c\ucc28\uc801\uc778 \ub370\uc774\ud130 \uc800\uc7a5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubc30\uc5f4\uc740 \ub370\uc774\ud130\ub97c \uc5f0\uc18d\uc801\uc774\uace0 \uc21c\ucc28\uc801\uc73c\ub85c \uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5\ud55c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub79c\ub364 \uc5d1\uc138\uc2a4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubc30\uc5f4\uc740 \uba54\ubaa8\ub9ac\uc758 \uc5f0\uc18d\ub41c \uacf5\uac04\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uae30 \ub54c\ubb38\uc5d0 \uccab \ubc88\uc9f8 \ub370\uc774\ud130\uc758 \uc8fc\uc18c\uac12\ub9cc \uc54c\uace0 \uc788\uc73c\uba74, \uc778\ub371\uc2a4\ub97c \ud1b5\ud574 \ud2b9\uc815 \ub370\uc774\ud130\uc5d0 \ube60\ub974\uac8c \uc811\uadfc\ud560 \uc218 \uc788\ub2e4. \uc774\ub97c \ub79c\ub364 \uc5d1\uc138\uc2a4\ub77c\uace0 \ud558\uba70, \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\ub294 O(1) \uc774\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4, \ubc30\uc5f4\uc758 \uccab \ubc88\uc9f8 \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub41c \uc8fc\uc18c\uac12\uc774 0x4AF55\ub77c\uba74, \ub450 \ubc88\uc9f8 \ub370\uc774\ud130\ub294 0x4AF59(4 byte \ud6c4)\ub85c \uacc4\uc0b0\ub418\uc5b4, \uc778\ub371\uc2a4\ub97c \ud1b5\ud574 \ube60\ub974\uac8c \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uce90\uc2dc \uc9c0\uc5ed\uc131",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubc30\uc5f4\uc740 \uba54\ubaa8\ub9ac\uc5d0 \uc5f0\uc18d\uc801\uc73c\ub85c \ud560\ub2f9\ub418\uae30 \ub54c\ubb38\uc5d0 CPU \uce90\uc2dc\uc5d0 \uc720\ub9ac\ud55c \uce90\uc2dc \uc9c0\uc5ed\uc131\uc774 \uc88b\uc544\uc11c \ud6a8\uc728\uc801\uc778 \uc5d1\uc138\uc2a4\ub97c \uc81c\uacf5\ud55c\ub2e4.")))),(0,l.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud06c\uae30 \ubcc0\uacbd\uc758 \uc5b4\ub824\uc6c0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubc30\uc5f4\uc758 \ud06c\uae30\ub97c \ub3d9\uc801\uc73c\ub85c \ubcc0\uacbd\ud558\ub824\uba74 \uc0c8\ub85c\uc6b4 \ubc30\uc5f4\uc744 \uc0dd\uc131\ud558\uace0 \uae30\uc874 \ub370\uc774\ud130\ub97c \ubcf5\uc0ac\ud574\uc57c\ud55c\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c \uc2dc\uac04\uacfc \uacf5\uac04\uc758 \uc624\ubc84\ud5e4\ub4dc\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc911\uac04 \ub370\uc774\ud130 \uc0bd\uc785/\uc0ad\uc81c\uc758 \uc5b4\ub824\uc6c0"),(0,l.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \ub0ad\ube44",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubc30\uc5f4\uc740 \uace0\uc815\ub41c \ud06c\uae30\ub97c \uac00\uc9c0\uae30 \ub54c\ubb38\uc5d0 \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \uba54\ubaa8\ub9ac\uac00 \ub0ad\ube44\ub420 \uc218 \uc788\ub2e4.")))),(0,l.kt)("h3",{id:"\ub3d9\uc801-\ubc30\uc5f4-dynamic-array"},"\ub3d9\uc801 \ubc30\uc5f4 (Dynamic Array)"),(0,l.kt)("p",null,"\uc120\uc5b8 \uc774\ud6c4\uc5d0 \uc0ac\uc774\uc988\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\ub294 \uc815\uc801 \ubc30\uc5f4 (Static Array)\uc640 \ub2e4\ub974\uac8c \ub3d9\uc801 \ubc30\uc5f4\uc740(Dynamic Array)\ub294 \uc0ac\uc774\uc988\ub97c \ub298\ub9b4 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ub3d9\uc801 \ubc30\uc5f4\uc740 \ubc30\uc5f4\uc758 \ud06c\uae30\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \ubc30\uc5f4\ub85c, \ub3d9\uc801 \ubc30\uc5f4\uc5d0 \ub370\uc774\ud130\ub97c \uacc4\uc18d \ucd94\uac00\ud558\ub2e4\uac00 \uae30\uc874\uc5d0 \ud560\ub2f9\ub41c \uc0ac\uc774\uc988\ub97c \ucd08\uacfc\ud558\uac8c \ub418\uba74 \uc0ac\uc774\uc988\ub97c \ub298\ub9b0 \ubc30\uc5f4\uc744 \uc0c8\ub85c \uc120\uc5b8\ud558\uace0 \uadf8\uacf3\uc73c\ub85c \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc62e\uae34\ub2e4. \uadf8\ub9ac\uace0 \uae30\uc874\uc758 \ubc30\uc5f4\uc740 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc0ad\uc81c\ud55c\ub2e4. \uc774 \uacfc\uc815\uc744 resize\ub77c\uace0 \ud55c\ub2e4. resize\ub97c \ud55c\uce78\uc529 \ud558\uac8c \ub418\uba74 \ube44\ud6a8\uc728\uc801\uc774\ubbc0\ub85c \uc77c\ubc18\uc801\uc73c\ub85c 2\ubc30 \ud070 \ud06c\uae30\ub85c resize \ud55c\ub2e4. \uc774\ub97c \ub354\ube14\ub9c1(Doubling) \uc774\ub77c\uace0 \ud55c\ub2e4."),(0,l.kt)("h3",{id:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Static array"),(0,l.kt)("th",{parentName:"tr",align:null},"Dynamic array"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access / update"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"insert_back"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"amortized O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delete_back"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"insert_at"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delete_at"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)")))),(0,l.kt)("h2",{id:"linked-list"},"Linked List"),(0,l.kt)("p",null,"Linked List\ub294 Node\ub77c\ub294 \uad6c\uc870\uccb4\uac00 \uc5f0\uacb0\ub41c \ud615\ud0dc\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\uad6c\uc870\uc774\ub2e4. Linked List\ub294 \ubb3c\ub9ac\uc801\uc73c\ub85c \ube44\uc5f0\uc18d\uc801\uc774\uc9c0\ub9cc \ub17c\ub9ac\uc801\uc73c\ub85c\ub294 \uc5f0\uc18d\ub41c \uad6c\uc870\ub97c \uac00\uc9c4\ub2e4."),(0,l.kt)("p",null,"Node\ub294 \ub370\uc774\ud130 \uac12\uacfc \ub2e4\uc74c \uc8fc\uc18c\uac12\uc73c\ub85c \uad6c\uc131\ub418\uc5b4\uc788\ub2e4. \ud55c \ucabd \ubc29\ud5a5\uc73c\ub85c\ub9cc \uac08 \uc218 \uc788\ub294 Linked List\ub97c Singly Linked List\ub77c\uace0 \ud558\uace0 \ub4a4\ub85c\ub3c4 \uac08 \uc218 \uc788\ub294 Linked List\ub97c Doubly Linked List\ub77c\uace0 \ud55c\ub2e4."),(0,l.kt)("p",null,"Array\uc758 \uacbd\uc6b0 \uc5f0\uc18d\uc131\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574 \uba54\ubaa8\ub9ac \uc0c1\uc5d0\uc11c \uc21c\ucc28\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uc9c0\ub9cc, Linked List\ub294 \uba54\ubaa8\ub9ac \uc0c1\uc5d0\uc11c \uc5f0\uc18d\uc131\uc744 \uc720\uc9c0\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\uae30 \ub54c\ubb38\uc5d0 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\uc774 \uc880 \ub354 \uc790\uc720\ub86d\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n        self.tail = None\n\n    def append(self, value):\n        new_node = Node(value)\n        if self.head is None:\n            self.head = new_node\n            self.tail = new_node\n        else:\n            self.tail.next = new_node\n            self.tail = new_node\n")),(0,l.kt)("h3",{id:"\ud2b9\uc131-1"},"\ud2b9\uc131"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubb3c\ub9ac\uc801 \ube44\uc5f0\uc18d\uc801, \ub17c\ub9ac\uc801 \uc5f0\uc18d\uc801",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linked List\ub294 \uba54\ubaa8\ub9ac\uc0c1\uc5d0\uc11c\ub294 \ube44\uc5f0\uc18d\uc801\uc73c\ub85c \uc800\uc7a5\uc774 \ub418\uc5b4 \uc788\uc9c0\ub9cc, \uac01\uac01\uc758 node\uac00 \ub2e4\uc74c \ub178\ub4dc\uc758 \uba54\ubaa8\ub9ac \uc8fc\uc18c\uac12\uc744 \uac00\ub9ac\ud0b4\uc73c\ub85c\uc368 \ub17c\ub9ac\uc801\uc73c\ub85c \uc5f0\uc18d\uc131\uc744 \uac16\uac8c \ub41c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub3d9\uc801 \ud06c\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linked List\ub294 \ub3d9\uc801\uc73c\ub85c \ud06c\uae30\ub97c \uc870\uc808\ud560 \uc218 \uc788\ub2e4. \uc0c8\ub85c\uc6b4 \ub178\ub4dc\ub97c \ucd94\uac00\ud558\uac70\ub098 \uae30\uc874 \ub178\ub4dc\ub97c \uc0ad\uc81c\ud558\ub294 \uac83\uc774 \uac04\ub2e8\ud558\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc911\uac04 \uc0bd\uc785 \ubc0f \uc0ad\uc81c \ud6a8\uc728",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Array\uc758 \uacbd\uc6b0 \uc911\uac04\uc5d0 \ub370\uc774\ud130\ub97c \uc0bd\uc785/\uc0ad\uc81c\ud558\uac8c \ub418\uba74 \ud574\ub2f9 index\uc758 \ub4a4\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uc6d0\uc18c\ub4e4\uc740 \ud55c \uce78\uc529 shift\ub97c \ud574\uc57c\ub9cc \ud558\uae30 \ub54c\ubb38\uc5d0 O(n)\uc758 \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub97c \uac16\ub294\ub2e4. \ud558\uc9c0\ub9cc Linked List\ub294 \ubb3c\ub9ac\uc801\uc73c\ub85c \uc62e\uae38 \ud544\uc694\uc5c6\uc774 next address\uac00 \uac00\ub9ac\ud0a4\ub294 \uc8fc\uc18c\uac12\ub9cc \ubcc0\uacbd\ud558\uba74 \ub418\uae30 \ub54c\ubb38\uc5d0 O(1)\uc758 \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub85c \uc0bd\uc785/\uc0ad\uc81c\uac00 \uac00\ub2a5\ud558\ub2e4.")))),(0,l.kt)("h3",{id:"\ub2e8\uc810-1"},"\ub2e8\uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Random Access \uc5b4\ub824\uc6c0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \uc778\ub371\uc2a4\uc758 \uc694\uc18c\uc5d0 \uc811\uadfc\ud558\ub824\uba74 \ucc98\uc74c\ubd80\ud130 \uc21c\ucc28\uc801\uc73c\ub85c \ucc3e\uc544\uac00\uc57c \ud558\ubbc0\ub85c \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\uac00 O(n)\uc774 \ub41c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \uc624\ubc84\ud5e4\ub4dc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uac01 \ub178\ub4dc\ub294 \ub370\uc774\ud130\uc640 \ub2e4\uc74c \ub178\ub4dc\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\ub97c \uac00\uc9c0\ubbc0\ub85c \ubc30\uc5f4\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \uba54\ubaa8\ub9ac\ub97c \uc0ac\uc6a9\ud55c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uce90\uc2dc \uc9c0\uc5ed\uc131 \ubd80\uc871",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5f0\uacb0 \ub9ac\uc2a4\ud2b8\uc758 \ub178\ub4dc\ub4e4\uc740 \uba54\ubaa8\ub9ac\uc5d0 \uc5f0\uc18d\uc801\uc73c\ub85c \ud560\ub2f9\ub418\uc9c0 \uc54a\uc544 \uce90\uc2dc \uc9c0\uc5ed\uc131\uc774 \ub098\uc060 \uc218 \uc788\ub2e4.")))),(0,l.kt)("h3",{id:"doubly-linked-list"},"Doubly Linked List"),(0,l.kt)("p",null,"Doubly Linked List\ub294 \uc591\ubc29\ud5a5\uc73c\ub85c \uc5f0\uacb0\ub41c \ub9ac\uc2a4\ud2b8\ub85c, \uac01 \ub178\ub4dc\uac00 \ub2e4\uc74c \ub178\ub4dc\ubfd0\ub9cc \uc544\ub2c8\ub77c \uc774\uc804 \ub178\ub4dc\uc758 \uc8fc\uc18c\ub3c4 \uac00\uc9c0\uac8c \ub41c\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc55e\ub4a4\ub85c \uc774\ub3d9\uc774 \uac00\ub2a5\ud574\uc9c4\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n        self.prev = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n        self.tail = None\n\n    def append(self, value):\n        new_node = Node(value)\n        if self.head is None:\n            self.head = new_node\n            self.tail = new_node\n        else:\n            self.tail.next = new_node\n            new_node.prev = self.tail\n            self.tail = new_node\n")),(0,l.kt)("h3",{id:"\uc2dc\uac04\ubcf5\uc7a1\ub3c4-1"},"\uc2dc\uac04\ubcf5\uc7a1\ub3c4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Linked list"),(0,l.kt)("th",{parentName:"tr",align:null},"Array"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access/update"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"insert_front"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"insert_at"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"insert_back"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n) ","|"," O(1) (tail \uc0ac\uc6a9\uc2dc)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove_front"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove_at"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove_back"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n) ","|"," O(1) (tail \uc0ac\uc6a9\uc2dc)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")))))}o.isMDXComponent=!0}}]);