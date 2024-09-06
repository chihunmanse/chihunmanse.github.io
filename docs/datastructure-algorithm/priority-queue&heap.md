---
title: Priority Queue & Heap
tags: [DataStructure, Algorithm, Queue, PriorityQueue, Heap, Dijkstra]
sidebar_position: 7
---

# 우선순위 큐 (Priority Queue) & 힙 (Heap)

## 우선순위 큐 (Priority Queue)

우선순위 큐는 각 요소에 우선순위를 부여하여, 우선순위가 높은 요소를 먼저 처리하는 자료 구조이다. 일반적인 큐가 FIFO(First In, First Out) 원칙을 따르는 반면, 우선순위 큐는 우선순위에 따라 요소의 처리 순서가 결정된다. 우선순위가 동일한 요소는 FIFO 규칙을 따른다.

### 구현

#### 1. List를 통한 구현

- 배열의 끝에 요소를 추가하고, 제거할 때 우선순위가 가장 높은 요소를 찾아 제거하는 방식. Enqueue O(1), Dequeue O(n)

  ```python
  class PriorityQueueArray:
      def __init__(self):
          self.queue = []

      def enqueue(self, item):
          self.queue.append(item)

      def dequeue(self):
          # 우선순위가 가장 높은 요소 찾기 (숫자가 작을 수록 우선순위가 높음)
          index = 0
          for i in range(1, len(self.queue)):
              if self.queue[i] < self.queue[index]:
                  index = i
          return self.queue.pop(index)

  pq = PriorityQueueArray()
  pq.enqueue(3)
  pq.enqueue(1)
  pq.enqueue(2)
  print(pq.dequeue())  # 1
  ```

- 배열에 요소를 추가할 때 우선순위에 따라 정렬하는 방식, Enqueue O(n log n), Dequeue O(1)

  ```python
  class PriorityQueueArraySorted:
      def __init__(self):
          self.queue = []

      def enqueue(self, item):
          self.queue.append(item)
          self.queue.sort()  # 오름차순으로 정렬 (숫자가 작을 수록 우선순위가 높음)

      def dequeue(self):
          return self.queue.pop(0)  # 가장 앞의 요소 제거

  pq = PriorityQueueArraySorted()
  pq.enqueue(3)
  pq.enqueue(1)
  pq.enqueue(2)
  print(pq.dequeue()) # 1
  ```

#### 2. 완전 이진트리를 통한 구현 (Heap)

우선순위 큐는 완전 이진트리 구조인 힙(Heap)을 사용하여 Enqueue와 Dequeue 모두 O(log n)의 시간복잡도로 구현할 수 있다.

```python
import heapq

class PriorityQueueHeap:
    def __init__(self):
        self.heap = []

    def enqueue(self, item):
        heapq.heappush(self.heap, item)  # 요소 추가

    def dequeue(self):
        return heapq.heappop(self.heap)  # 가장 작은 요소 제거


pq = PriorityQueueHeap()
pq.enqueue(3)
pq.enqueue(1)
pq.enqueue(2)
print(pq.dequeue())  # 1
```

Enqueue: 힙 구조에 요소를 추가하고, 힙 성질을 유지하기 위해 정렬하는 데 O(log n)의 시간이 소요된다.

Dequeue: 루트 노드를 제거하고, 나머지 트리를 재정렬하는 데 O(log n)의 시간이 걸린다.

## 힙 (Heap)

### 특징

힙은 완전 이진 트리 형태를 가진 자료 구조로, 각 노드의 부모 노드가 자식 노드보다 크거나(최대 힙) 작아야(최소 힙) 하는 조건을 가진다. 힙은 우선순위 큐 구현에 자주 사용되며, 빠른 삽입과 삭제 연산이 가능하다.

- **최대 힙(Max-Heap)** : 부모 노드의 값이 자식 노드의 값보다 크다.
- **최소 힙(Min-Heap)** : 부모 노드의 값이 자식 노드의 값보다 작다.

### 구현

힙은 완전 이진 트리를 배열로 표현하여 구현할 수 있으며, 삽입과 삭제 시에는 상향식 혹은 하향식 정렬을 통해 힙 구조를 유지한다.

- **삽입** : 새로운 값을 힙에 삽입할 때는 배열의 끝에 값을 추가한 후, 부모 노드와 비교하면서 적절한 위치로 올린다. 이를 Heapify-Up 연산이라고 하며, 시간 복잡도는 트리의 높이에 비례하여 O(log n)이다.
- **삭제** : 루트 노드(최소값)를 삭제한 후, 배열의 마지막 요소를 루트에 배치하고 자식들과 비교하며 내리는 과정(Heapify-Down)을 통해 힙 속성을 유지한다. 시간 복잡도는 O(log n)이다.

```python
class MinHeap:
    def __init__(self):
        self.heap = []

    def parent(self, i):
        return (i - 1) // 2

    def left_child(self, i):
        return 2 * i + 1

    def right_child(self, i):
        return 2 * i + 2

    def heappush(self, key):
        """
        새로운 값을 삽입하는 연산.
        배열의 마지막에 요소를 추가하고, 부모 노드와 비교하며 적절한 위치로 올린다 (Heapify-Up).
        시간 복잡도: O(log n)
        """
        self.heap.append(key)
        self.heapify_up(len(self.heap) - 1)

    def heapify_up(self, index):
        """
        Heapify-Up 과정: 자식 노드가 부모 노드보다 작으면 위치를 교환하며 위로 올라간다.
        """
        while index > 0 and self.heap[self.parent(index)] > self.heap[index]:
            # 부모 노드와 자식 노드를 교환
            self.heap[self.parent(index)], self.heap[index] = self.heap[index], self.heap[self.parent(index)]
            # 인덱스를 부모 노드로 업데이트
            index = self.parent(index)

    def heappop(self):
        """
        루트 노드(최소값)를 삭제하는 연산.
        루트와 마지막 요소를 교환한 후, 루트에서부터 힙 속성을 재정렬 (Heapify-Down).
        시간 복잡도: O(log n)
        """
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()

        # 루트 노드와 마지막 노드를 교환한 후, 마지막 노드를 제거
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.heapify_down(0)
        return root

    def heapify_down(self, index):
        """
        Heapify-Down 과정: 부모 노드가 자식 노드보다 크면 위치를 교환하며 아래로 내려간다.
        """
        smallest = index
        left = self.left_child(index)
        right = self.right_child(index)

        # 왼쪽 자식이 존재하고, 현재 노드보다 작으면 smallest를 왼쪽 자식으로 설정
        if left < len(self.heap) and self.heap[left] < self.heap[smallest]:
            smallest = left

        # 오른쪽 자식이 존재하고, 현재 smallest보다 작으면 smallest를 오른쪽 자식으로 설정
        if right < len(self.heap) and self.heap[right] < self.heap[smallest]:
            smallest = right

        # 만약 smallest가 현재 노드가 아니라면 교환 후, 자식 노드에서 다시 heapify-down
        if smallest != index:
            self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
            self.heapify_down(smallest)

    def get_min(self):
        """
        현재 힙에서 최소값을 반환하는 연산.
        최소 힙에서는 항상 루트 노드가 최소값이므로, 배열의 첫 번째 요소를 반환한다.
        """
        if len(self.heap) == 0:
            return None
        return self.heap[0]

    def size(self):
        """
        힙의 크기를 반환하는 연산.
        """
        return len(self.heap)

min_heap = MinHeap()
min_heap.heappush(10)
min_heap.heappush(5)
min_heap.heappush(15)
min_heap.heappush(2)

print("최소값:", min_heap.get_min())  # 최소값 2
print("삭제된 최소값:", min_heap.heappop())  # 삭제된 값 2
print("새로운 최소값:", min_heap.get_min())  # 새로운 최소값 5
```

**Python에서는 heapq 모듈을 사용하면 쉽게 heap 자료구조를 사용할 수 있다.**

- 최소 힙

  ```python
  import heapq

  class MinHeap:
      def __init__(self):
          self.heap = []

      def insert(self, item):
          heapq.heappush(self.heap, item)

      def delete(self):
          return heapq.heappop(self.heap)

  min_heap = MinHeap()
  min_heap.insert(10)
  min_heap.insert(5)
  min_heap.insert(15)
  print(min_heap.delete())  # 5
  ```

- 최대 힙

  Python에서는 기본적으로 최소 힙을 제공하므로, 최대 힙을 구현하려면 값을 음수로 바꿔 삽입하고 삭제할 때 다시 양수로 반환해야한다.

  ```python
  import heapq

  class MaxHeap:
      def __init__(self):
          self.heap = []

      def insert(self, item):
          heapq.heappush(self.heap, -item)  # 음수로 저장

      def delete(self):
          return -heapq.heappop(self.heap)  # 음수로 꺼내서 다시 양수로 변환

  max_heap = MaxHeap()
  max_heap.insert(10)
  max_heap.insert(5)
  max_heap.insert(15)
  print(max_heap.delete())  # 15
  ```

## 다익스트라 (Dijkstra) 알고리즘

### 정의

다익스트라 알고리즘은 **가중치가 있는 그래프**에서 한 정점에서 다른 모든 정점까지의 최단 경로를 찾는 알고리즘이다. BFS와 유사하지만, 가중치에 기반하여 경로를 선택한다.

1. 시작 정점을 설정하고, 해당 정점에서 다른 정점으로 가는 경로의 가중치를 계산한다.
2. 가장 짧은 경로를 선택한 후, 그 경로를 통해 갈 수 있는 다른 정점들의 가중치를 갱신한다.
3. 이 과정을 모든 정점에 대해 반복하여, 최종적으로 시작 정점에서 모든 정점까지의 최단 경로를 계산한다.

### 구현

다익스트라 알고리즘은 **우선순위 큐**(Priority Queue)를 사용하여 구현할 수 있으며, 보통 **힙**을 이용해 우선순위 큐를 구현한다.

```python
import heapq

def dijkstra(graph, start):
    # 모든 노드에 대한 거리를 무한대로 초기화 (아직 방문하지 않았음을 의미)
    distances = {node: float('inf') for node in graph}
    # 시작 노드까지의 거리는 0으로 설정 (자기 자신까지의 거리는 0)
    distances[start] = 0
    # 우선순위 큐를 사용하여 탐색할 노드와 현재까지의 거리를 저장 (거리, 노드) 형태
    queue = [(0, start)]  # (거리, 정점)

    # 큐가 빌 때까지 반복 (모든 노드를 처리할 때까지)
    while queue:
        # 큐에서 현재 가장 짧은 거리와 해당 노드를 꺼냄 (우선순위 큐의 최솟값)
        current_distance, current_node = heapq.heappop(queue)

        # 이미 기록된 거리보다 현재 꺼낸 거리가 크면 해당 노드는 이미 처리된 것이므로 스킵
        if current_distance > distances[current_node]:
            continue

        # 현재 노드의 인접한 이웃들을 모두 탐색
        for neighbor, weight in graph[current_node].items():
            # 현재 노드를 거쳐 이웃 노드까지 가는 거리 계산
            distance = current_distance + weight

            # 새로 계산한 거리가 기존에 저장된 거리보다 작다면 최단 경로로 갱신
            if distance < distances[neighbor]:
                distances[neighbor] = distance  # 최단 거리 갱신
                # 갱신된 이웃 노드를 우선순위 큐에 추가
                heapq.heappush(queue, (distance, neighbor))

    # 시작 노드로부터 각 노드까지의 최단 거리가 저장된 딕셔너리를 반환
    return distances

# 그래프 정의 (인접 리스트 형태)
graph = {
    'A': {'B': 1, 'C': 4},  # A와 연결된 노드 B, C와 그 가중치
    'B': {'A': 1, 'C': 2, 'D': 5},  # B와 연결된 노드 A, C, D와 그 가중치
    'C': {'A': 4, 'B': 2, 'D': 1},  # C와 연결된 노드 A, B, D와 그 가중치
    'D': {'B': 5, 'C': 1},  # D와 연결된 노드 B, C와 그 가중치
}

# 시작 노드를 'A'로 설정하고 다익스트라 알고리즘 실행
start_node = 'A'
print(dijkstra(graph, start_node))  # {'A': 0, 'B': 1, 'C': 3, 'D': 4}
```
