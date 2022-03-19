class CrazyQueue{
  constructor(){
    this.first = [];
    this.last = [];
  }
  enqueue(value){
    for(let i=0; i<this.first.length;i++){
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }
  dequeue(){
    for(let i=0;i<this.last.length;i++){
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek(){
    if(this.first.length==0){
      return this.last[0];
    } else {return this.first[this.first.length-1]}
  }
}