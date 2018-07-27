function Stack(){
    this.size = 0;
    this.items = [];
}

Stack.prototype.push = function(element){
	this.items.push(element);
	this.size++;
};

Stack.prototype.isEmpty = function(){
	return this.size === 0;
};

// items = [1,2,3,4,5];

Stack.prototype.pop = function(){
	if(this.isEmpty()){
		return "Stack is Empty";
	}
	else{
		this.items.pop();
		this.size--;

	}
};
 Stack.prototype.search = function(element){
  if(element===this.isEmpty)
	return "Stack is Empty";
  else{
	for(let i=0;i<this.items.length;i++)
		if(element===this.items[i]){
		return "Element found";
}
console.log("Element Not Found");	
}

	
}


let sobj = new Stack();

sobj.push(100);
sobj.push(200);
sobj.push(300);

console.log(sobj.search(200));
// console.log(sobj);
// sobj.pop();
console.log(sobj.search(300));
