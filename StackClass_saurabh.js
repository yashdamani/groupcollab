class Stack {
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
	pop(){
		if(this.isEmpty()) 
			return "Stack is empty"
		else {
			this.items.pop();
			this.size--;
		}
	}
	search(element){
		if(this.isEmpty()) 
			return "Can't search in an empty stack";
		else {
			for(let i=0; i<this.size; i++){
				if(element===this.items[i])
					return "Element found";
			}
			return "Element not found";
		}
	}
}

let sobj = new Stack();

sobj.push(100);
sobj.push(200);
sobj.push(300);

console.log(sobj.search(200));
// console.log(sobj);
// sobj.pop();
console.log(sobj.search(2200));