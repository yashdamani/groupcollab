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
  if(this.isEmpty()){
    return `You can't perform search on a empty stack`;
  }
  else{
    for(let i = 0; i < this.items.length; i++){
      if( element === this.items[i]) {
        return `Sucess, ${element} is Found`;
      }
    }
   return `Failure, ${element} not Found`;
  }
}

let sobj = new Stack();

sobj.push(100);
sobj.push(200);
sobj.push(300);

console.log(sobj.search(100));
// console.log(sobj);
// sobj.pop();
console.log(sobj.search(300));
