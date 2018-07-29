function Queue(){
    this.size = 0;
    this.items = [];
}

Queue.prototype.push = function(element){
	this.items.push(element);
	this.size++;
};

Queue.prototype.isEmpty = function(){
	return this.size === 0;
};


Queue.prototype.shift = function(){
	if(this.isEmpty()){
		return "Queue is Empty";
	}
	else{
		this.items.shift();
		this.size--;
	}
};

Queue.prototype.search = function(element){
	if(this.isEmpty()) return "Can't search in an empty stack";
	else {
		for(let i=0; i<this.items.length; i++){
			if(element===this.items[i])
				return "Element found";
		}
		return "Element not found";
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
