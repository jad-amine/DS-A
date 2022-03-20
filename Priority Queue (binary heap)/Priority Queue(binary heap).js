class QElement{
    constructor(element,priority){
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.items = [];
    }
    enqueue(element, priority){
        const newQELement = new QElement(element,priority);
        if(this.items.length == 0){
            this.items.push(newQELement);
        } else {
            for (let i = 0; i <this.items.length; i++){
                if(this.items[i].priority < priority){
                    this.items.splice(i,0,newQELement);
                    return this;
                }
            }
            this.items.push(newQELement);
        }
    }
    dequeue(){
      this.items.shift()
    }
    lookup(element,priority){
        const newQELement = new QElement(element,priority);
        for(let i =0;i<this.items.length; i++){
            if(this.items[i] == newQELement){
                console.log(`we have a your element at index`, i);
                return true;
            }
        }
        console.log('not found');
        return false;
    }
}

const vipLine = new PriorityQ();
vipLine.enqueue('jad',3)
vipLine.dequeue()

console.log(vipLine);
