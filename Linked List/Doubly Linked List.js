
class LinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null,
      previous: null
    };
    this.tail = this.head;
    this.length = 1;
  };
  append(value){
    const newNode = {
    previous: null,
    value : value,
    next : null
  }
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  };
  prepend(value){
    const newNode = {
    previous: null,
    value : value,
    next : null
    };
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList(){
    const array = [];
    var currentNode = this.head;
    while(currentNode!== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  insert(index, value){
    if(index>= this.length){
      return this.append(value);
    }
    const newNode = {
    previous: null,
    value : value,
    next : null
    };
    const leader = this.traverse(index-1);  
    newNode.previous = leader;
    const follower = leader.next;
    follower.previous = newNode;
    leader.next = newNode;
    newNode.next = follower;
    this.length++;
    return this;
  }
  traverse(index){
    var counter = 0;
    var currentNode = this.head;
    while(counter < index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index){
    if(index === 0){
      this.head = this.head.next
      this.length--;
      return this;
    }
    const leader = this.traverse(index-1);
    const removed = leader.next;
    leader.next = removed.next;
    this.length--;
    return this;
  }
  
}

let myLL = new LinkedList(10);
myLL.append(20);
myLL.prepend(1);
myLL.insert(2,15);
myLL.printList();
console.log(myLL)