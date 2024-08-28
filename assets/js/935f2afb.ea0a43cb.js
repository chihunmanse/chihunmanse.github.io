"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Home","href":"/","docId":"home"},{"type":"category","label":"DataStructure & Algorithm","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"List","href":"/datastructure-algorithm/list","docId":"datastructure-algorithm/list"},{"type":"link","label":"Queue & Stack","href":"/datastructure-algorithm/queue&stack","docId":"datastructure-algorithm/queue&stack"},{"type":"link","label":"HashTable","href":"/datastructure-algorithm/hashtable","docId":"datastructure-algorithm/hashtable"}],"href":"/datastructure-algorithm"},{"type":"category","label":"BackEnd","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Database","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Concurrency Control","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1. Schedule","href":"/backend/database/concurrency-control/schedule","docId":"backend/database/concurrency-control/schedule"},{"type":"link","label":"2. Lock","href":"/backend/database/concurrency-control/lock","docId":"backend/database/concurrency-control/lock"},{"type":"link","label":"3. Transaction Isolation Level","href":"/backend/database/concurrency-control/isolation-level","docId":"backend/database/concurrency-control/isolation-level"}],"href":"/category/concurrency-control"},{"type":"link","label":"MySQL Master/Slave Replication","href":"/backend/database/mysql-replication","docId":"backend/database/mysql-replication"}],"href":"/category/database"}],"href":"/backend"},{"type":"category","label":"DevOps","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Cloud","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ucc9c\ub9cc \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c AWS \ud074\ub77c\uc6b0\ub4dc \uc544\ud0a4\ud14d\ucc98 \uc9c4\ud654\ud558\uae30","href":"/devops/cloud/aws-architecture","docId":"devops/cloud/aws-architecture"}],"href":"/category/cloud"},{"type":"category","label":"Docker","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac","href":"/devops/docker/basic","docId":"devops/docker/basic"}],"href":"/category/docker"},{"type":"category","label":"Kubernetes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30","href":"/devops/kubernetes/tencent-tke-migration","docId":"devops/kubernetes/tencent-tke-migration"},{"type":"link","label":"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30","href":"/devops/kubernetes/garbage-collection","docId":"devops/kubernetes/garbage-collection"}],"href":"/category/kubernetes"}],"href":"/devops"},{"type":"category","label":"BlockChain","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Upgradeable Contract","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1. Migration, DelegateCall","href":"/blockchain/upgradeable-contract/1","docId":"blockchain/upgradeable-contract/1"},{"type":"link","label":"2. ERC1967, TransparentProxy, UUPS","href":"/blockchain/upgradeable-contract/2","docId":"blockchain/upgradeable-contract/2"}],"href":"/category/upgradeable-contract"},{"type":"link","label":"Contract Error Handling","href":"/blockchain/contract-errorhandling","docId":"blockchain/contract-errorhandling"}],"href":"/blockchain"},{"type":"category","label":"Project","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Lush Clone Project","href":"/project/lush-clone","docId":"project/lush-clone"},{"type":"link","label":"Kream Clone Project","href":"/project/kream-clone","docId":"project/kream-clone"},{"type":"link","label":"\uc6d0\ud2f0\ub4dc \ud504\ub9ac\uc628\ubcf4\ub529 8percent \uae30\uc5c5\uacfc\uc81c","href":"/project/preonboarding-8percent","docId":"project/preonboarding-8percent"},{"type":"link","label":"NestJS & MongoDB Project","href":"/project/nest","docId":"project/nest"}],"href":"/project"}]},"docs":{"backend/database/concurrency-control/isolation-level":{"id":"backend/database/concurrency-control/isolation-level","title":"3. Transaction Isolation Level","description":"\ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \ub2e4\uc218\uc758 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ub420 \ub54c \ub370\uc774\ud130\uc758 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574 \ub2e4\uc591\ud55c \ud2b8\ub79c\uc7ad\uc158 \uaca9\ub9ac \uc218\uc900\uc744 \uc0ac\uc6a9\ud55c\ub2e4. \uc774\ub7ec\ud55c \uaca9\ub9ac \uc218\uc900\uc740 \ud558\ub098\uc758 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub2e4\ub978 \ub3d9\uc2dc \uc2e4\ud589 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc791\uc5c5\uc73c\ub85c\ubd80\ud130 \uc5b4\ub290 \uc815\ub3c4\uae4c\uc9c0 \ub3c5\ub9bd\ub418\uc5b4 \uc788\ub294\uc9c0\ub97c \uc815\uc758\ud55c\ub2e4. \uaca9\ub9ac \uc218\uc900\uc774 \ub192\uc744\uc218\ub85d \ud2b8\ub79c\uc7ad\uc158 \uac04\uc758 \uac04\uc12d\uc774 \uc904\uc5b4\ub4e4\uc9c0\ub9cc, \uadf8\ub9cc\ud07c \uc131\ub2a5\uc5d0 \uc545\uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\ub2e4.","sidebar":"docs"},"backend/database/concurrency-control/lock":{"id":"backend/database/concurrency-control/lock","title":"2. Lock","description":"\ub77d(Lock)\uc774\ub780 \ub3d9\uc77c\ud55c \uc790\uc6d0\uc5d0 \uc811\uadfc\ud560 \ub54c, \ub370\uc774\ud130\uc758 \uc77c\uad00\uc131\uacfc \ubb34\uacb0\uc131\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574 \uc790\uc6d0\uc5d0 \ub300\ud55c \uc811\uadfc\uc744 \uc81c\uc5b4\ud558\ub294 \uba54\ucee4\ub2c8\uc998\uc774\ub2e4.","sidebar":"docs"},"backend/database/concurrency-control/schedule":{"id":"backend/database/concurrency-control/schedule","title":"1. Schedule","description":"\uc2a4\ucf00\uc904(Schedule)\uc740 \uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc774 \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ub420 \ub54c, \uac01 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc18d\ud55c \uc791\uc5c5\ub4e4\uc758 \uc2e4\ud589 \uc21c\uc11c\uc774\ub2e4. \uac01 \ud2b8\ub79c\uc7ad\uc158 \ub0b4 \uc791\uc5c5\ub4e4\uc758 \uc21c\uc11c\ub294 \ubc14\ub00c\uc9c0 \uc54a\ub294\ub2e4.","sidebar":"docs"},"backend/database/mysql-replication":{"id":"backend/database/mysql-replication","title":"MySQL Master/Slave Replication","description":"Master/Slave Replication\uc774\ub780?","sidebar":"docs"},"blockchain/contract-errorhandling":{"id":"blockchain/contract-errorhandling","title":"Contract Error Handling","description":"error handling for contracts written in solidity.","sidebar":"docs"},"blockchain/upgradeable-contract/1":{"id":"blockchain/upgradeable-contract/1","title":"1. Migration, DelegateCall","description":"writing upgradeable contract with solidity.","sidebar":"docs"},"blockchain/upgradeable-contract/2":{"id":"blockchain/upgradeable-contract/2","title":"2. ERC1967, TransparentProxy, UUPS","description":"writing upgradeable contract with solidity.","sidebar":"docs"},"datastructure-algorithm/hashtable":{"id":"datastructure-algorithm/hashtable","title":"HashTable","description":"\ud574\uc2dc \ud14c\uc774\ube14\uc740 \ud6a8\uc728\uc801\uc778 \ud0d0\uc0c9\uc744 \uc704\ud55c \uc790\ub8cc\uad6c\uc870\ub85c\uc11c key-value \uc30d\uc758 \ub370\uc774\ud130\ub97c \uc785\ub825\ubc1b\ub294\ub2e4. hash function h \uc5d0 key\uac12\uc744 \uc785\ub825\uc73c\ub85c \ub123\uc5b4 \uc5bb\uc740 \ud574\uc2dc\uac12 h(k) \uc5d0 \ud574\ub2f9\ud558\ub294 \uc778\ub371\uc2a4\uc5d0 (key, value) \ub370\uc774\ud130 \uc30d\uc744 \uc800\uc7a5\ud55c\ub2e4. (key, value) \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \uac01\uac01\uc758 \uacf5\uac04\uc744 slot \ub610\ub294 bucket\uc774\ub77c\uace0 \ud55c\ub2e4.","sidebar":"docs"},"datastructure-algorithm/list":{"id":"datastructure-algorithm/list","title":"List","description":"List\ub294 \uc21c\uc11c\ub97c \uac16\uace0 \uc6d0\uc18c\ub4e4\uc744 \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\uad6c\uc870\uc774\ub2e4. List \uc790\ub8cc\uad6c\uc870\ub294 Array List\uc640 Linked List\ub85c \uad6c\ud604\ud560 \uc218 \uc788\ub2e4.","sidebar":"docs"},"datastructure-algorithm/queue&stack":{"id":"datastructure-algorithm/queue&stack","title":"Queue & Stack","description":"\ud050 (Queue)","sidebar":"docs"},"devops/cloud/aws-architecture":{"id":"devops/cloud/aws-architecture","title":"\ucc9c\ub9cc \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c AWS \ud074\ub77c\uc6b0\ub4dc \uc544\ud0a4\ud14d\ucc98 \uc9c4\ud654\ud558\uae30","description":"\ucc9c\ub9cc \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c AWS \ud074\ub77c\uc6b0\ub4dc \uc544\ud0a4\ud14d\ucc98 \uc9c4\ud654\ud558\uae30","sidebar":"docs"},"devops/docker/basic":{"id":"devops/docker/basic","title":"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac","description":"Docker \uae30\ubcf8 \uac1c\ub150 \uc815\ub9ac","sidebar":"docs"},"devops/kubernetes/garbage-collection":{"id":"devops/kubernetes/garbage-collection","title":"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30","description":"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30","sidebar":"docs"},"devops/kubernetes/tencent-tke-migration":{"id":"devops/kubernetes/tencent-tke-migration","title":"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30","description":"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30","sidebar":"docs"},"home":{"id":"home","title":"Home","description":"DataStructure & Algorithm","sidebar":"docs"},"project/kream-clone":{"id":"project/kream-clone","title":"Kream Clone Project","description":"\uae30\uac04: 2021-10-10 ~ 2021-10-29","sidebar":"docs"},"project/lush-clone":{"id":"project/lush-clone","title":"Lush Clone Project","description":"\uae30\uac04: 2021-10-10 ~ 2021-10-29","sidebar":"docs"},"project/nest":{"id":"project/nest","title":"NestJS & MongoDB Project","description":"\uae30\uac04: 2022-01-17 ~ 2022-01-28","sidebar":"docs"},"project/preonboarding-8percent":{"id":"project/preonboarding-8percent","title":"\uc6d0\ud2f0\ub4dc \ud504\ub9ac\uc628\ubcf4\ub529 8percent \uae30\uc5c5\uacfc\uc81c","description":"\uae30\uac04: 2021-11-12 ~ 2021-11-13","sidebar":"docs"}}}')}}]);