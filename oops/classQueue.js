function Queue(){
    this.size = 0;
    this.items = [];
}

Queue.prototype.unshift = function (element) {
    this.items.unshift(element);
    this.size++;
};

Queue.prototype.isEmpty = function () {
    if(this.size === 0){
        return 'Stack is empty!';
    }
};

Queue.prototype.shift = function () {
    if(this.isEmpty()) {
        return 'Stack is empty!';
    }else{
        this.items.shift();
        this.size--;
    }
};

Queue.prototype.search = function (element) {
    if(this.isEmpty()){
        return 'Stack is empty!';
    }else{
        for(let i = 0; i < this.items.length; i++){
            if(element === this.items[i]){
                return 'element found!';
            }
        }
        return 'element not found!';
    }
};

let Data = new Queue();

Data.unshift(1);
Data.unshift(2);
Data.unshift(3);
Data.unshift(4);
console.log(Data);
Data.shift();
Data.shift();
console.log(Data);
console.log(Data.search(1));
console.log(Data.search(10));

//======================================================================================================================//


class Queue {
    constructor(size,items){
        this.size = size;
        this.items = items;
    };

    unshift(elements){
        this.items.unshift(elements);
        this.size++;
    };

    isEmpty(){
        if(this.size === 0){
            return 'stack is empty';
        }
    };

    shift(){
        if(this.isEmpty()){
            return 'stack is empty';
        }else{
            this.items.shift();
            this.size--;
        }
    };

    search(elements){
        if(this.isEmpty()){
            return 'stack is empty';
        }else{
            for(let i = 0; i < this.items.length; i++){
                if(elements === this.items[i]){
                    return 'element found!';
                }
            }
            return 'element not found!';
        }
    }
}

let Data = new Queue(0, []);
Data.unshift(11);
Data.unshift(22);
Data.unshift(33);
console.log(Data);
Data.shift();
console.log(Data);
console.log(Data.search(1));
console.log(Data.search(22));