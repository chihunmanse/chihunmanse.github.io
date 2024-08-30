---
title: Tree
tags: [DataStructure, Tree, BFS, DFS]
sidebar_position: 4
---

# Tree

트리는 노드(Node)와 간선(Edge)으로 구성된 계층적 자료구조이다. 트리 구조는 부모-자식 관계를 가지며, 일반적으로 루트(Root)라고 불리는 최상위 노드를 갖고 있다.

- 노드 (Node) : 트리에서 데이터를 저장하는 기본적인 단위, 그래프의 정점(Vertex)
- 간선 (Edge) : 노드와 노드를 연결하는 연결선
- 루트 노드 (Root) : 부모 노드가 없는, 트리의 최상위 노드
- 리프 노드 (Leef) : 자식 노드가 없는, 트리의 가장 끝에 위치한 노드들
- 차수 (degree) : 각 노드가 갖는 자식의 수. 모든 노드의 차수가 n개 이하인 트리를 n진 트리라고 한다.
- 조상 (ancestor) : 위쪽으로 간선을 따라가면 만나는 모든 노드
- 자손 (descendant) : 아래쪽으로 간선을 따라가면 만나는 모든 노드
- 높이 (height) : 루트 노드에서 가장 멀리 있는 리프 노드 까지의 거리. 즉, 리프 노트중에 최대 레벨 값
- 서브트리 (subtree) : 트리에서 하나의 노드와 그 자식 노드들이 이루는 하위 트리
- 레벨 (Level) : 루트 노드에서 떨어진 거리

### 이진 트리 (Binary Tree)

이진 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리이다.

#### 완전 이진 트리 (Complete Binary Tree)

왼쪽에서부터 채워져 있는 이진 트리로, 마지막 레벨을 제외하고는 모든 레벨이 완전히 채워져있는 트리이다.

```
      1
     / \
    2   3
   / \ /
  4  5 6

```

#### 이진 탐색 트리 (Binary Search Tree)

각 노드의 왼쪽 노드는 부모 노드보다 작은 값을 가지고 오른쪽 노드는 더 큰 값을 가진다.

```
      8
     / \
    3   10
   / \    \
  1   6    14
     / \   /
    4   7 13
```

## 순회 방식

트리 순회는 트리 구조에 있는 모든 노드를 일정한 순서에 따라 방문하는 과정을 말한다.

### 레벨순회 (Level-order Traversal)

레벨순회는 트리의 각 레벨을 차례대로 방문하는 방식이다. 루트 노드부터 시작하여, 같은 레벨의 노드들을 방문한 후 그 다음 레벨로 이동한다. 주로 큐(Queue) 자료구조를 사용한다.

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

레벨순회 결과 : `A → B → C → D → E → F`

#### 구현

```python
from collections import deque

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def level_order_traversal(root):
    visted = []

    if root is None:
        return

    queue = deque([root])
    while queue:
        node = queue.popleft()  # 큐에서 노드 꺼내기
        visted.append(node.value) # 노드 방문
        if node.left:
            queue.append(node.left)  # 왼쪽 자식 추가
        if node.right:
            queue.append(node.right)  # 오른쪽 자식 추가

    return visted

# 트리 생성 및 레벨순회 실행 예시
root = Node('A')
root.left = Node('B')
root.right = Node('C')
root.left.left = Node('D')
root.left.right = Node('E')
root.right.right = Node('F')

print(level_order_traversal(root)) # ['A', 'B', 'C', 'D', 'E', 'F']
```

### 전위순회 (Preorder Traversal)

전위순회는 루트 노드를 가장 먼저 방문하는 순회 방식이다.

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

전위순회 결과 : `A → B → D → E → C → F`

#### 구현

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

visted = []

def preorder_traversal(node):
    if node is None:
        return

    visted.append(node.value)  # 루트 노드 방문
    preorder_traversal(node.left)  # 왼쪽 자식 방문
    preorder_traversal(node.right)  # 오른쪽 자식 방문

    return visted

# 트리 생성 및 전위순회 실행 예시
root = Node('A')
root.left = Node('B')
root.right = Node('C')
root.left.left = Node('D')
root.left.right = Node('E')
root.right.right = Node('F')

print(preorder_traversal(root))  # ['A', 'B', 'D', 'E', 'C', 'F']
```

### 중위순회 (Inorder Traversal)

중위순회는 왼쪽 자식을 먼저 방문하고, 그 다음 루트 노드를 방문한 뒤, 오른쪽 자식을 방문하는 순회 방식이다.

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

중위순회 결과 : `D → B → E → A → C → F`

#### 구현

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

visted = []

def inorder_traversal(node):
    if node is None:
        return

    inorder_traversal(node.left)  # 왼쪽 자식 방문
    visted.append(node.value)  # 루트 노드 방문
    inorder_traversal(node.right)  # 오른쪽 자식 방문

    return visted

# 트리 생성 및 중위순회 실행 예시
root = Node('A')
root.left = Node('B')
root.right = Node('C')
root.left.left = Node('D')
root.left.right = Node('E')
root.right.right = Node('F')

print(inorder_traversal(root))  # ['D', 'B', 'E', 'A', 'C', 'F']
```

### 후위순회 (Postorder Traversal)

후위순회는 루트 노드를 마지막에 방문하는 순회 방식이다.

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

후위순회 결과 : `D → E → B → F → C → A`

#### 구현

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

visted = []

def postorder_traversal(node):
    if node is None:
        return

    postorder_traversal(node.left)  # 왼쪽 자식 방문
    postorder_traversal(node.right)  # 오른쪽 자식 방문
    visted.append(node.value)  # 루트 노드 방문

    return visted

# 트리 생성 및 후위순회 실행 예시
root = Node('A')
root.left = Node('B')
root.right = Node('C')
root.left.left = Node('D')
root.left.right = Node('E')
root.right.right = Node('F')

print(postorder_traversal(root))  # ['D', 'E', 'B', 'F', 'C', 'A']
```
