"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||k[m]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"\uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",description:"\uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",keywords:["docker","container","kubernetes","garbage-collection"],tags:["BackEnd","Kubernetes"],authors:"chihun"},i="\uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",o={permalink:"/2023/11/10/backend/kubernetes/garbage-collection",source:"@site/blog/backend/kubernetes/2023-11-10-garbage-collection.md",title:"\uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",description:"\uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",date:"2023-11-10T00:00:00.000Z",formattedDate:"November 10, 2023",tags:[{label:"BackEnd",permalink:"/tags/back-end"},{label:"Kubernetes",permalink:"/tags/kubernetes"}],readingTime:8.92,hasTruncateMarker:!0,authors:[{name:"Chihun Park",url:"https://github.com/chihunmanse",email:"chihunmanse@gmail.com",imageURL:"https://p.ipic.vip/o1ih3g.png",key:"chihun"}],frontMatter:{title:"\uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",description:"\uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",keywords:["docker","container","kubernetes","garbage-collection"],tags:["BackEnd","Kubernetes"],authors:"chihun"},prevItem:{title:"MySQL Master/Slave Replication",permalink:"/2023/11/22/backend/sql/mysql-replication"},nextItem:{title:"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac",permalink:"/2023/11/03/backend/docker/docker-basic"}},c={authorsImageUrls:[void 0]},p=[{value:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158",id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4-\uac00\ube44\uc9c0-\ucf5c\ub809\uc158",level:2},{value:"\uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158",id:"\uc0ac\uc6a9\ub418\uc9c0-\uc54a\ub294-\uc774\ubbf8\uc9c0-\uac00\ube44\uc9c0-\ucf5c\ub809\uc158",level:3}],s={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ucd5c\uadfc \uc820\ud0a8\uc2a4 \uc11c\ubc84\uc758 \ub514\uc2a4\ud06c \uc6a9\ub7c9\uc774 \uadf8\ub3d9\uc548 \uc313\uc778 \ub3c4\ucee4 \uc774\ubbf8\uc9c0 \ubc0f \ube4c\ub4dc \uce90\uc2dc \ub370\uc774\ud130\ub4e4\ub85c \uac00\ub4dd \ucc28\uc11c \uc820\ud0a8\uc2a4\uc5d0\uc11c \ube4c\ub4dc\uac00 \uc81c\ub300\ub85c \ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\ub97c \uacaa\uc5c8\ub2e4."),(0,a.kt)("p",null,"\ud574\ub2f9 \ubb38\uc81c\ub97c \uacaa\uace0 \ub098\uc11c, \ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 \ud150\uc13c\ud2b8 \ud074\ub77c\uc6b0\ub4dc TKE \ud074\ub7ec\uc2a4\ud130\uc758 \uc6cc\ucee4 \ub178\ub4dc\ub4e4\uc758 \ub514\uc2a4\ud06c \uc6a9\ub7c9\ub3c4 \ud655\uc778\ud574\ubcf4\uc558\ub2e4. "),(0,a.kt)("p",null,"\ud604\uc7ac \uc11c\ube44\uc2a4\uc5d0\uc11c\ub294 2\uac1c\uc758 \uc6cc\ucee4\ub178\ub4dc\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\ub370 \uadf8 \uc911 \ud558\ub098\uc758 \ub178\ub4dc \ub514\uc2a4\ud06c \uc6a9\ub7c9\uc774 80% \uac00\ub7c9 \ucc28 \uc788\uc5c8\ub2e4. \uc790\uc138\ud55c \uc0ac\uc6a9\ub7c9\uc744 \ud30c\uc545\ud558\uae30 \uc704\ud574 \ud574\ub2f9 \uc6cc\ucee4\ub178\ub4dc\uc5d0 \uc811\uc18d\ud558\uc5ec ",(0,a.kt)("inlineCode",{parentName:"p"},"df-h")," \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud574\ubcf4\uc558\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p.ipic.vip/d1deym.png",alt:"dfh"})),(0,a.kt)("p",null,"77GB\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uacbd\ub85c\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"/run/containerd/io.containerd.runtime.v2.task/k8s.io/")," \uc778 \uac83\uc744 \ubd24\uc744 \ub54c, \uc820\ud0a8\uc2a4 \uc11c\ubc84\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \uc774\ubbf8\uc9c0 \ubc0f \ucee8\ud14c\uc774\ub108 \ub370\uc774\ud130\uac00 \ub9ce\uc740 \uc6a9\ub7c9\uc744 \ucc28\uc9c0\ud558\uace0 \uc788\ub2e4\ub294 \uac83\uc744 \ucd94\uce21\ud560 \uc218 \uc788\uc5c8\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c \ub9ce\uc740 \uc6a9\ub7c9\uc744 \ucc28\uc9c0\ud558\uace0 \uc788\ub294 \ub514\ub809\ud1a0\ub9ac\uc758 \uacbd\ub85c\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/overlay2/")," \uac00 \uc544\ub2cc ",(0,a.kt)("inlineCode",{parentName:"p"},"/run/containerd/io.containerd.runtime.v2.task/k8s.io/")," \uc778 \uc774\uc720\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/setup/production-environment/container-runtimes"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c\ub294 1.24 \ubc84\uc804\ubd80\ud130 \ucee8\ud14c\uc774\ub108 \ub7f0\ud0c0\uc784\uc73c\ub85c Dockershim\uc774 \uc544\ub2cc containerd\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc774\ub2e4."),"\n(\ucfe0\ubc84\ub124\ud2f0\uc2a4\uac00 Docker \uc9c0\uc6d0\uc744 \uc911\ub2e8\ud558\uace0 containerd\ub97c \uc0ac\uc6a9\ud558\uac8c \ub41c \uc774\uc720\uc640 \ub9e5\ub77d\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/pulse/containerd%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%99%9C-%EC%A4%91%EC%9A%94%ED%95%A0%EA%B9%8C-sean-lee/?originalSubdomain=kr"},"\uc774 \uae00"),"\uc5d0 \uc798 \uc124\uba85\ub418\uc5b4\uc788\ub2e4.)"),(0,a.kt)("p",null,"\uc6cc\ucee4\ub178\ub4dc\uc5d0\uc11c\ub294 containerd\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0, \ub9cc\uc57d \ud574\ub2f9 VM\uc5d0 \uc811\uc18d\ud574\uc11c \uc9c1\uc811 \ucee4\ub9e8\ub4dc\ub97c \uc2e4\ud589\ud558\uc5ec \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0 \ubc0f \ucee8\ud14c\uc774\ub108 \ub370\uc774\ud130\ub97c \uc81c\uac70\ud558\ub824\uba74 docker cli\uac00 \uc544\ub2cc ctr \ud639\uc740 nerdctl cli\ub97c \uc0ac\uc6a9\ud574\uc57c\ub9cc \ud55c\ub2e4."),(0,a.kt)("p",null,"ctr cli\ub97c \ud1b5\ud574 \uc811\uc18d \uc911\uc778 \uc6cc\ucee4\ub178\ub4dc\uc758 \uc774\ubbf8\uc9c0\ub97c \uc870\ud68c\ud558\ub824\uba74 k8s.io \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc758 \uc774\ubbf8\uc9c0\ub97c \uc870\ud68c\ud558\uc5ec\uc57c \ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# ctr namespaces ls \nNAME   LABELS\nk8s.io\n\n# ctr -n k8s.io images ls \uc2e4\ud589\n")),(0,a.kt)("h2",{id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4-\uac00\ube44\uc9c0-\ucf5c\ub809\uc158"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158"),(0,a.kt)("p",null,"\ubb3c\ub860 \uc6cc\ucee4\ub178\ub4dc\uc5d0 \uc811\uc18d\ud558\uc5ec \uc9c1\uc811 \ub370\uc774\ud130\ub97c \uc815\ub9ac\ud560 \uc218\ub3c4 \uc788\uaca0\uc9c0\ub9cc, \uadf8\ub7ec\uba74 \ub514\uc2a4\ud06c \uc6a9\ub7c9\uc774 \ucc30 \ub54c\ub9c8\ub2e4 \ub9e4\ubc88 \uc218\ub3d9\uc73c\ub85c \ud574\ub2f9 \uc791\uc5c5\uc744 \uc9c4\ud589 \ud574\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 \uc790\ub3d9\ud654\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \ucc3e\uc544\ubcf4\ub2e4\uac00 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uacf5\uc2dd \ubb38\uc11c\uc5d0\uc11c ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/garbage-collection/"},"garbage collection"),"\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc744 \ubc1c\uacac\ud558\uc600\ub2e4."),(0,a.kt)("p",null,"\ubb38\uc11c\uc5d0 \ub530\ub974\uba74, \uac00\ube44\uc9c0 \ucf5c\ub809\uc158\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uac00 \ud074\ub7ec\uc2a4\ud130 \ub9ac\uc18c\uc2a4\ub97c \uc815\ub9ac\ud558\ub294 \ub370 \uc0ac\uc6a9\ud558\ub294 \ub2e4\uc591\ud55c \uba54\ucee4\ub2c8\uc998\uc744 \ucd1d\uce6d\ud55c\ub2e4. \uac00\ube44\uc9c0 \ucf5c\ub809\uc158\uc744 \ud1b5\ud574 \uc815\ub9ac\ud560 \uc218 \uc788\ub294 \ub2e4\uc591\ud55c \ub9ac\uc18c\uc2a4 \uc911\uc5d0\ub294 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \ucee8\ud14c\uc774\ub108 \ubc0f \uc774\ubbf8\uc9c0\ub3c4 \ud3ec\ud568\ub418\uc5b4\uc788\ub2e4."),(0,a.kt)("h3",{id:"\uc0ac\uc6a9\ub418\uc9c0-\uc54a\ub294-\uc774\ubbf8\uc9c0-\uac00\ube44\uc9c0-\ucf5c\ub809\uc158"},"\uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158"),(0,a.kt)("p",null,"kubelet\uc740 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0\uc5d0 \ub300\ud574 5\ubd84 \ub9c8\ub2e4, \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \ucee8\ud14c\uc774\ub108\uc5d0 \ub300\ud574 1\ubd84\ub9c8\ub2e4 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158\uc744 \uc218\ud589\ud55c\ub2e4. \ub9cc\uc57d \uc678\ubd80\uc758 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74 kubelet\uc758 \ub3d9\uc791\uc774 \uc911\ub2e8\ub418\uace0 \uc874\uc7ac\ud574\uc57c\ud558\ub294 \ucee8\ud14c\uc774\ub108\uac00 \uc81c\uac70\ub420 \uc218 \uc788\uc73c\ubbc0\ub85c \uad8c\uc7a5\ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc774\ubbf8\uc9c0 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158")),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor/"},"cadvisor"),"\uc758 \ub3c4\uc6c0\uc744 \ubc1b\uc544 kubelet\uc758 \uc77c\ubd80\uc778 image manager\ub97c \ud1b5\ud574 \ubaa8\ub4e0 \uc774\ubbf8\uc9c0\uc758 \ub77c\uc774\ud504 \uc0ac\uc774\ud074\uc744 \uad00\ub9ac\ud55c\ub2e4. kubelet\uc740 \ub2e4\uc74c 2\uac00\uc9c0 \ub514\uc2a4\ud06c \uc0ac\uc6a9\ub7c9 \uc81c\ud55c\uc744 \uace0\ub824\ud558\uc5ec \uac00\ube44\uc9c0 \uc218\uc9d1 \uacb0\uc815\uc744 \ub0b4\ub9b0\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HighThresholdPercent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub514\uc2a4\ud06c \uc0ac\uc6a9\ub7c9\uc774 HighThresholdPercent \uac12\uc744 \ucd08\uacfc\ud558\uba74 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158\uc774 \ud2b8\ub9ac\uac70\ub418\uc5b4 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc0ac\uc6a9\ub41c \uc2dc\uac04\uc744 \uae30\uc900\uc73c\ub85c \uac00\uc7a5 \uc624\ub798\ub41c \uc21c\uc73c\ub85c \uc774\ubbf8\uc9c0\ub97c \uc0ad\uc81c\ud55c\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"LowThresholdPercent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc704\uc5d0\uc11c \uac00\ube44\uc9c0 \ucf5c\ub809\uc158\uc774 \ud2b8\ub9ac\uac70\ub418\uba74, \ub514\uc2a4\ud06c \uc0ac\uc6a9\ub7c9\uc774 LowThresholdPercent \uac12\uc5d0 \ub3c4\ub2ec\ud560 \ub54c\uae4c\uc9c0 \uc774\ubbf8\uc9c0\ub97c \uc0ad\uc81c\ud55c\ub2e4.")))),(0,a.kt)("p",null,"kubelet\uc758 \uc774\ubbf8\uc9c0 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158 \uc124\uc815\uc744 \uc218\uc815\ud558\uae30 \uc704\ud574\uc11c\ub294 kubelet\uc744 \uc2e4\ud589\ud560 \ub54c \uad00\ub828 \uc635\uc158 \ud50c\ub798\uadf8\ub97c \uc9c0\uc815\ud574\uc57c\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/")," \ubb38\uc11c\ub97c \ucc38\uace0\ud558\uba74 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\ub4e4\uc744 \ucc3e\uc744 \uc218 \uc788\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--image-gc-high-threshold int32"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uac12(\ube44\uc728)\uc740 ","[0, 100]"," \ubc94\uc704 \ub0b4\uc5d0 \uc788\uc5b4\uc57c \ud55c\ub2e4. \uae30\ubcf8\uac12 : 85"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--image-gc-low-threshold int32"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uac12(\ube44\uc728)\uc740 ","[0, 100]"," \ubc94\uc704 \ub0b4\uc5d0 \uc788\uc5b4\uc57c \ud55c\ub2e4. \uae30\ubcf8\uac12 : 80")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"image-gc-high-threshold")," \uc758 \uae30\ubcf8\uac12\uc740 85\uc774\uae30 \ub54c\ubb38\uc5d0 \ub514\uc2a4\ud06c \uc0ac\uc6a9\ub7c9\uc774 85%\ub97c \ucd08\uacfc\ud558\uba74 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158\uc774 \uc218\ud589\ub418\uaca0\uc9c0\ub9cc \ub354 \ub0ae\uc740 \uc784\uacc4\uce58\ub97c \uc801\uc6a9\ud558\uae30 \uc704\ud574 \ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 TKE \ud074\ub7ec\uc2a4\ud130\uc758 \uc6cc\ucee4\ub178\ub4dc\uc5d0 \uad00\ub828 \uc124\uc815\uc744 \uc801\uc6a9\ud574\ubcf4\uc558\ub2e4."),(0,a.kt)("p",null,"kubelet\uc758 systemd \uc720\ub2db \ud30c\uc77c\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/kubelet.service")," \uc744 \ud655\uc778\ud574\ubcf4\uc558\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[Unit]\nDescription=kubelet\n\n[Service]\nEnvironmentFile=-/etc/kubernetes/kubelet\nExecStart=/usr/bin/kubelet ${ANONYMOUS_AUTH} ${AUTHENTICATION_TOKEN_WEBHOOK} ${AUTHORIZATION_MODE} ${CLIENT_CA_FILE} ${CLOUD_CONFIG} ${CLOUD_PROVIDER} ${CLUSTER_DNS} ${CLUSTER_DOMAIN} ${CONTAINER_RUNTIME} ${CONTAINER_RUNTIME_ENDPOINT} ${EVICTION_HARD} ${FAIL_SWAP_ON} ${HOSTNAME_OVERRIDE} ${KUBE_RESERVED} ${KUBECONFIG} ${MAX_PODS} ${PROVIDER_ID} ${REGISTER_SCHEDULABLE} ${REGISTER_WITH_TAINTS} ${RUNTIME_REQUEST_TIMEOUT} ${SERIALIZE_IMAGE_PULLS} ${V}\nExecStartPost=-/bin/bash /etc/kubernetes/deny-tcp-port-10250.sh\nRestart=always\nRestartSec=10\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("p",null,"\ub0b4\uc6a9\uc744 \uc0b4\ud3b4\ubcf4\uba74 kubelet\uc758 \uc2e4\ud589 \ud50c\ub798\uadf8\ub4e4\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/kubelet")," \uc5d0\uc11c \ubcc0\uc218\ub85c \ubc1b\uc544\uc624\ub294 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/kubelet")," \uc5d0\uc11c \uc774\ubbf8\uc9c0 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158 \uad00\ub828 \ud50c\ub798\uadf8 \ubcc0\uc218\ub4e4\uc744 \ucd94\uac00\ud574\uc8fc\uc5c8\ub2e4."),(0,a.kt)("p",null,"\ub9cc\uc57d \ub514\uc2a4\ud06c \uc6a9\ub7c9\uc774 70% \ucc28\uba74 60%\uac00 \ub420 \ub54c\uae4c\uc9c0 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0\ub97c \uc81c\uac70\ud558\ub3c4\ub85d \uc124\uc815\ud558\uc600\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'IMAGE_GC_HIGH_THRESHOLD="--image-gc-high-threshold=70"\nIMAGE_GC_LOW_THRESHOLD="--image-gc-low-threshold=60"\n')),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \ub2e4\uc2dc ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/kubelet.service")," \uc5d0\uc11c ExecStart\uc5d0 \ucd94\uac00\ud55c \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud50c\ub798\uadf8\ub97c \uc9c0\uc815\ud574\uc8fc\uc5c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ExecStart=/usr/bin/kubelet ${IMAGE_GC_HIGH_THRESHOLD} ${IMAGE_GC_LOW_THRESHOLD} ${ANONYMOUS_AUTH} ${AUTHENTICATION_TOKEN_WEBHOOK} ${AUTHORIZATION_MODE} ${CLIENT_CA_FILE} ${CLOUD_CONFIG} ${CLOUD_PROVIDER} ${CLUSTER_DNS} ${CLUSTER_DOMAIN} ${CONTAINER_RUNTIME} ${CONTAINER_RUNTIME_ENDPOINT} ${EVICTION_HARD} ${FAIL_SWAP_ON} ${HOSTNAME_OVERRIDE} ${KUBE_RESERVED} ${KUBECONFIG} ${MAX_PODS} ${PROVIDER_ID} ${REGISTER_SCHEDULABLE} ${REGISTER_WITH_TAINTS} ${RUNTIME_REQUEST_TIMEOUT} ${SERIALIZE_IMAGE_PULLS} ${V}\n")),(0,a.kt)("p",null,"systemd \uc720\ub2db \ud30c\uc77c\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc801\uc6a9\ud558\uae30 \uc704\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload")," \ucee4\ub9e8\ub4dc\ub97c \uc2e4\ud589\ud55c \ud6c4\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl restart kubelet")," \ucee4\ub9e8\ub4dc\ub97c \ud1b5\ud574 kubelet\uc744 \uc7ac\uc2dc\uc791\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get node")," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 kubelet\uc744 \uc7ac\uc2dc\uc791\ud55c \uc6cc\ucee4\ub178\ub4dc\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158\uc740 5\ubd84\ub9c8\ub2e4 \uc218\ud589\ub418\ubbc0\ub85c, \uc7ac\uc2dc\uc791 \ud6c4 \uc77c\uc815 \uc2dc\uac04\uc774 \uc9c0\ub09c \ud6c4\uc5d0 \uac00\ube44\uc9c0 \ucf5c\ub809\uc158\uc774 \uc81c\ub300\ub85c \uc218\ud589\ub418\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \uc6cc\ucee4\ub178\ub4dc\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"df -h")," \ub85c \ub514\uc2a4\ud06c \uc0c1\ud0dc\ub97c \ud655\uc778\ud574\ubcf8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p.ipic.vip/rrugrr.png",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2023-10-18 \u110b\u1169\u1112\u116e 6.44.27"})),(0,a.kt)("p",null,"\uc124\uc815\uc744 \uc801\uc6a9\ud558\uae30 \uc804\uc5d0 \ub178\ub4dc\uc758 \ub514\uc2a4\ud06c \uc0ac\uc6a9\ub7c9\uc740 80% \ub118\uac8c \ucc28 \uc788\uc5c8\uc9c0\ub9cc \ud604\uc7ac\ub294 \ub514\uc2a4\ud06c \uc0ac\uc6a9\ub7c9\uc774 40% \uc815\ub3c4\ub85c \uc904\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"/run/containerd/io.containerd.runtime.v2.task/k8s.io/")," \uc758 \uc6a9\ub7c9\uc774 \ub300\ud3ed \uc904\uc5b4\ub4e0 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc880 \ub354 \uc815\ud655\ud558\uac8c \uac00\ube44\uc9c0 \ucf5c\ub809\uc158\uc774 \uc218\ud589 \ub410\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"journalctl -u kubelet -n 100")," \ucee4\ub9e8\ub4dc\ub97c \ud1b5\ud574 kubelet\uc758 \ucd5c\uc2e0 \ub85c\uadf8 100\uac1c\ub97c \uc870\ud68c\ud574\ubcf4\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'I1018 17:16:49.127741 2313004 image_gc_manager.go:312] "Disk usage on image filesystem is over the high threshold, trying to free bytes down to the low threshold" usage=82 highThre>\nI1018 17:16:49.130385 2313004 image_gc_manager.go:389] "Removing image to free bytes" imageID="sha256:047cf9fbdf261c42fec5d0db43e161b15ce7456f4cea37fdad98d8fae840079f" size=1042721>\nI1018 17:16:49.159122 2313004 image_gc_manager.go:389] "Removing image to free bytes" imageID="sha256:22f6921b0b710e16b011ca3bfb00b45037729cf7d0892ccb419586aa7e313c22" size=23963887\nI1018 17:16:49.182128 2313004 image_gc_manager.go:389] "Removing image to free bytes" imageID="sha256:09b1f1bf150850e55c1ba343af8fcd7d229006fe1b421b047b0d31f9db82a06e" size=1001151>\nI1018 17:16:49.236277 2313004 image_gc_manager.go:389] "Removing image to free bytes" imageID="sha256:e1317ccb493705380ee4deeac10682e09a8fd9c107ed0430bd4adcb0a01c9445" size=1052505>\n')),(0,a.kt)("p",null,"\ub85c\uadf8\uc758 \ub0b4\uc6a9\uc744 \ubcf4\uba74 image_gc_manager\uc5d0 \uc758\ud574 \ub514\uc2a4\ud06c \uc0ac\uc6a9\ub7c9(82%)\uc774 high threshold\ub97c \ucd08\uacfc\ud558\uc5ec low threshold\uae4c\uc9c0 \uc6a9\ub7c9\uc744 \ud655\ubcf4\ud55c\ub2e4\ub294 \uba54\uc2dc\uc9c0\uc640 \uc2e4\uc81c \uc0ad\uc81c\ub41c \uc774\ubbf8\uc9c0 \ub85c\uadf8\ub4e4\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."))}k.isMDXComponent=!0}}]);