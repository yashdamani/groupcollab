class Queue {
	constructor(size, items){
		this.size = 0;
		this.items = [];
	}
	push(element){
		this.items.push(element);
		this.size++;
	}
	isEmpty(){
		return this.size === 0;
	}
	shift(){
		if(this.isEmpty()) 
			return "Queue is empty"
		else {
			this.items.shift();
			this.size--;
		}
	}
	search(element){
		if(this.isEmpty()) 
			return "Can't search in an empty queue";
		else {
			for(let i=0; i<this.size; i++){
				if(element===this.items[i])
					return "Element found";
			}
			return "Element not found";
		}
	}
}

let qobj = new Queue();

qobj.push(100);
qobj.push(200);
qobj.push(300);
console.log(qobj.search(100));
qobj.shift();
console.log(qobj.search(100));
console.log(qobj.search(200));