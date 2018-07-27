function Stack(){
    this.size = 0;
    this.items = [];
}

Stack.prototype.push = function(element){
	this.items.push(element);
	this.size++;
};
//Iam from Sid laptop
Stack.prototype.isEmpty = function(){
	return this.size === 0;
};


	isEmpty() {
		return this.size === 0;
	}

	pop(){
		if(this.isEmpty()) {
			return "Cannot pop from an empty stack";
		}
		else{
			this.items.pop();
			this.size--;
		}
	}

	search(element) {
		if(this.isEmpty()) return "Cannot search in an empty array";
		else {
			for(let i = 0; i < this.items.length; i++) {
				if(element === this.items[i]){
					return "Element found";
				}
			}return "Element not found";
		} 
	}
}

Stack.prototype.search = function(element){
	if(this.isEmpty()){
		return 'stack is empty';
	} else {
		for(let i = 0; i < this.items.length; i++){
		if(element === this.items[i]){
			return 'element found';
	}
			
	}
		return 'element not found';
}
};



obj1.push(100);
obj1.push(200);
obj1.push(300);

console.log(obj1.search(200));
console.log(obj1.search(1000));


console.log(sobj.search(200));
// console.log(sobj);
// sobj.pop();
console.log(sobj.search(2200));
