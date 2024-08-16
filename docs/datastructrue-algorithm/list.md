---
title: List
tags: [DataStructrue, List]
sidebar_position: 1
---

# List

List는 순서를 갖고 원소들을 저장하는 자료구조이다. List 자료구조는 Array List와 Linked List로 구현할 수 있다.

## Array List

배열은 선언 시에 사이즈를 정하여 해당 사이즈만큼의 연속된 메모리를 할당 받아 데이터를 연속적/순차적으로 저장하는 자료구조이다. static array 및 dynamic array로 구현할 수 있다.

### 특성

- 고정된 저장 공간

  - 배열은 선언 시 크기를 정하여 그 크기만큼의 연속된 메모리를 할당받는다.

- 순차적인 데이터 저장

  - 배열은 데이터를 연속적이고 순차적으로 메모리에 저장한다.

- 랜덤 엑세스

  - 배열은 메모리의 연속된 공간에 데이터를 저장하기 때문에 첫 번째 데이터의 주소값만 알고 있으면, 인덱스를 통해 특정 데이터에 빠르게 접근할 수 있다. 이를 랜덤 엑세스라고 하며, 시간 복잡도는 O(1) 이다.

    예를 들어, 배열의 첫 번째 데이터가 저장된 주소값이 0x4AF55라면, 두 번째 데이터는 0x4AF59(4 byte 후)로 계산되어, 인덱스를 통해 빠르게 접근할 수 있다.

- 캐시 지역성

  - 배열은 메모리에 연속적으로 할당되기 때문에 CPU 캐시에 유리한 캐시 지역성이 좋아서 효율적인 엑세스를 제공한다.

### 단점

- 크기 변경의 어려움
  - 배열의 크기를 동적으로 변경하려면 새로운 배열을 생성하고 기존 데이터를 복사해야한다. 이 과정에서 시간과 공간의 오버헤드가 발생할 수 있다.
- 중간 데이터 삽입/삭제의 어려움
- 메모리 낭비
  - 배열은 고정된 크기를 가지기 때문에 실제로 사용되지 않는 메모리가 낭비될 수 있다.

### 동적 배열 (Dynamic Array)

선언 이후에 사이즈를 변경할 수 없는 정적 배열 (Static Array)와 다르게 동적 배열은(Dynamic Array)는 사이즈를 늘릴 수 있다.

동적 배열은 배열의 크기를 변경할 수 있는 배열로, 동적 배열에 데이터를 계속 추가하다가 기존에 할당된 사이즈를 초과하게 되면 사이즈를 늘린 배열을 새로 선언하고 그곳으로 모든 데이터를 옮긴다. 그리고 기존의 배열은 메모리에서 삭제한다. 이 과정을 resize라고 한다. resize를 한칸씩 하게 되면 비효율적이므로 일반적으로 2배 큰 크기로 resize 한다. 이를 더블링(Doubling) 이라고 한다.

### 시간복잡도

|                 | Static array | Dynamic array  |
| --------------- | ------------ | -------------- |
| access / update | O(1)         | O(1)           |
| insert_back     | O(1)         | amortized O(1) |
| delete_back     | O(1)         | O(1)           |
| insert_at       | O(n)         | O(n)           |
| delete_at       | O(n)         | O(n)           |

## Linked List

Linked List는 Node라는 구조체가 연결된 형태로 데이터를 저장하는 자료구조이다. Linked List는 물리적으로 비연속적이지만 논리적으로는 연속된 구조를 가진다.

Node는 데이터 값과 다음 주소값으로 구성되어있다. 한 쪽 방향으로만 갈 수 있는 Linked List를 Singly Linked List라고 하고 뒤로도 갈 수 있는 Linked List를 Doubly Linked List라고 한다.

Array의 경우 연속성을 유지하기 위해 메모리 상에서 순차적으로 데이터를 저장하는 방식을 사용하였지만, Linked List는 메모리 상에서 연속성을 유지하지 않아도 되기 때문에 메모리 사용이 좀 더 자유롭다.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
```

### 특성

- 물리적 비연속적, 논리적 연속적

  - Linked List는 메모리상에서는 비연속적으로 저장이 되어 있지만, 각각의 node가 다음 노드의 메모리 주소값을 가리킴으로써 논리적으로 연속성을 갖게 된다.

- 동적 크기

  - Linked List는 동적으로 크기를 조절할 수 있다. 새로운 노드를 추가하거나 기존 노드를 삭제하는 것이 간단하다.

- 중간 삽입 및 삭제 효율
  - Array의 경우 중간에 데이터를 삽입/삭제하게 되면 해당 index의 뒤에 있는 모든 원소들은 한 칸씩 shift를 해야만 하기 때문에 O(n)의 시간복잡도를 갖는다. 하지만 Linked List는 물리적으로 옮길 필요없이 next address가 가리키는 주소값만 변경하면 되기 때문에 O(1)의 시간복잡도로 삽입/삭제가 가능하다.

### 단점

- Random Access 어려움
  - 특정 인덱스의 요소에 접근하려면 처음부터 순차적으로 찾아가야 하므로 시간 복잡도가 O(n)이 된다.
- 메모리 오버헤드
  - 각 노드는 데이터와 다음 노드를 가리키는 포인터를 가지므로 배열보다 더 많은 메모리를 사용한다.
- 캐시 지역성 부족
  - 연결 리스트의 노드들은 메모리에 연속적으로 할당되지 않아 캐시 지역성이 나쁠 수 있다.

### Doubly Linked List

Doubly Linked List는 양방향으로 연결된 리스트로, 각 노드가 다음 노드뿐만 아니라 이전 노드의 주소도 가지게 된다. 이를 통해 앞뒤로 이동이 가능해진다.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
```

### 시간복잡도

|               | Linked list                | Array |
| ------------- | -------------------------- | ----- |
| access/update | O(n)                       | O(1)  |
| insert_front  | O(1)                       | O(n)  |
| insert_at     | O(n)                       | O(n)  |
| insert_back   | O(n) \| O(1) (tail 사용시) | O(1)  |
| remove_front  | O(1)                       | O(n)  |
| remove_at     | O(n)                       | O(n)  |
| remove_back   | O(n) \| O(1) (tail 사용시) | O(1)  |
