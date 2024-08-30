---
title: Graph
tags: [DataStructure, Algorithm, Graph, BFS, DFS]
sidebar_position: 5
---

# 그래프 (Graph)

그래프(G)는 정점(vertex)들의 집합 V와 이들을 연결하는 간선(Edge)들의 집합 E로 구성된 자료구조이다. 정점은 그래프 내의 개별적인 객체를 나타내며, 간선은 정점 간의 관계를 나타낸다.

- **G = (V, E)**: G는 그래프, V는 정점의 집합, E는 간선의 집합

그래프는 네트워크, 소셜 미디어 연결, 경로 탐색, 컴파일러의 최적화 문제 등 다양한 분야에서 활용된다. 예를 들어, 도로 네트워크를 그래프로 표현하여 최단 경로 문제를 해결하거나, 소셜 네트워크에서 친구 추천 시스템을 구축하는 데 사용될 수 있다.

## 종류

### 방향 그래프 vs 무향 그래프

#### 방향 그래프 (Directed Graph)

각 간선이 방향을 가지며, 한 정점에서 다른 정점으로의 이동이 단방향으로만 가능한 그래프이다. A에서 B로 가는 간선이 있다면, B에서 A로 가는 간선은 별도로 존재해야 한다.

```
A → B
↓   ↑
C → D
```

#### 무향 그래프 (Undirected Graph)

간선에 방향이 없으며, 한 정점에서 다른 정점으로의 이동이 양방향으로 가능한 그래프이다. A에서 B로 가는 간선이 존재하면, B에서 A로도 이동할 수 있다.

```
A - B
|   |
C - D
```

### 다중 그래프 vs 단순 그래프

#### 다중 그래프 (Multi Graph)

동일한 정점 쌍 사이에 여러 개의 간선이 존재할 수 있는 그래프이다. 즉, A에서 B로 가는 여러 개의 경로가 있을 수 있다.

```
A ⇒ B
↑ ↘
B ⇒ C
```

#### 단순 그래프 (Simple Graph)

정점 쌍 사이에 하나의 간선만 존재하는 그래프로, 루프(자기 자신으로의 간선)나 중복 간선이 없는 그래프이다.

```
  A --- B
  |     |
  C --- D

```

### 가중치 그래프

각 간선에 가중치(비용, 거리 등)가 부여된 그래프이다.

```
A -2→ B
|     |
5     1
↓     ↓
C -3→ D
```

## 표현 방식

### 인접 리스트 (Adjacency List)

인접 리스트는 각 정점에, 해당 정점에 연결된 다른 정점들의 리스트를 저장하는 방식이다. 메모리 사용이 효율적이며, 간선의 수가 적은 그래프에서 유리하다.

```python
class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, u, v):
        if u not in self.graph:
            self.graph[u] = []
        self.graph[u].append(v)

# 그래프 생성
g = Graph()
g.add_edge('A', 'B')
g.add_edge('A', 'C')
g.add_edge('B', 'D')
g.add_edge('C', 'D')

print(g.graph) # {'A': ['B', 'C'], 'B': ['D'], 'C': ['D']}
```

### 인접 행렬 (Adjacency Matrix)

인접 행렬은 2차원 배열을 사용하여 그래프를 구현하는 방식이다. 각 행과 열은 정점을 나타내며, 배열의 값은 간선의 존재 여부를 나타낸다. 간선의 수가 많은 밀집 그래프에서 유리하다.

```python
class Graph:
    def __init__(self, size):
        self.adj_matrix = [[0] * size for _ in range(size)]
        self.size = size

    def add_edge(self, u, v):
        self.adj_matrix[u][v] = 1

# 그래프 생성
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(2, 3)

for row in g.adj_matrix:
    print(row)

'''
[0, 1, 1, 0]
[0, 0, 0, 1]
[0, 0, 0, 1]
[0, 0, 0, 0]
'''
```

### 암시적 그래프 (Implicit Graph)

암시적 그래프는 정점과 간선이 명시적으로 저장되지 않으며, 특정 규칙이나 함수에 의해 동적으로 계산된다.

예를 들어, 2D 격자로 표현된 미로를 탐색하는 문제에서 미로의 각 칸을 정점으로 두고 인접한 칸으로 이동할 수 있다면 그 칸들 사이에 간선이 있다고 간주하고서 정점과 간선을 명시적으로 저장하지 않고 현재 위치에서 이동한 칸을 동적으로 계산하여 탐색할 수 있다.

## 순회 방식

### BFS (Breadth-First Search)

BFS는 시작 정점과 가까운 정점들을 먼저 방문하는 순회 방식이다. 최단 경로를 찾는 문제에서 자주 사용된다.

```
    A
   / \
  B   C
 / \   \
D   E   F
```

위와 같은 그래프가 있을 때, A를 시작으로 순회하면 순회 순서는 `A -> B -> C -> D -> E -> F` 이다.

**구현**

```python
from collections import deque

def bfs(graph, start_v):
    visited = [start_v]  # 방문한 정점들을 저장할 리스트
    queue = deque([start_v])  # 탐색할 정점들을 저장하는 큐

    while queue:
        cur_v = queue.popleft()  # 큐에서 정점을 꺼냄
        for v in graph[cur_v]:  # 현재 정점에 연결된 모든 정점에 대해
            if v not in visited:  # 아직 방문하지 않은 정점이라면
                visited.append(v)  # 방문 정점 리스트에 추가
                queue.append(v)  # 큐에 추가해서 나중에 탐색하도록 함

    return visited

# 그래프 정의
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}

bfs_result = bfs(graph, 'A')
print(bfs_result) # ['A', 'B', 'C', 'D', 'E', 'F']
```

### DFS (Depth-First Search)

DFS는 시작 정점에서 가능한 깊이까지 먼저 방문한 후, 더 이상 방문할 정점이 없으면 이전 정점으로 되돌아가서 나머지 정점들을 방문하는 순회 방식이다.

```
    A
   / \
  B   C
 / \   \
D   E   F
```

위와 같은 그래프가 있을 때, A를 시작으로 순회하면 순회 순서는 `A -> B -> D -> E -> C -> F` 이다.

**구현**

```python
visited = []

def dfs(graph, cur_v):
    visited.append(cur_v)  # 현재 정점을 방문 처리

    for v in graph[cur_v]:  # 현재 정점과 연결된 모든 정점에 대해
        if v not in visited:  # 방문하지 않은 정점이 있다면
            dfs(graph, v)  # 그 정점을 시작으로 재귀적으로 DFS 수행

    return visited

# 그래프 정의
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}

dfs_result = dfs(graph, 'A')
print(dfs_result) # ['A', 'B', 'D', 'E', 'C', 'F']
```
