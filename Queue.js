function Queue() {
	this.size=0;
	this.items=[];
}

Queue.prototype.push = function (element) {
	this.items.push(element);
	this.size++;
}

Queue.prototype.isEmpty =function () {
	return this.size===0;
}

Queue.prototype.shift = function () {
	if (this.isEmpty()) {
		return "Queue is Empty";
	}
	else{
		this.items.shift();
		this.size++
	}
}

Queue.prototype.search = function (element) {
	if (element===this.isEmpty) {
		return "Queue is Empty";
	}
	else{
		for (var i = 0; i < this.items.length; i++) 
		if	(element===this.items[i]){
			return "Element found in Queue";
		}
		
		console.log("Element not found in Queue");
	}
}



	let Queue1 = new Queue();

	Queue1.push(275);
	Queue1.push(375);
	Queue1.push(475);
	Queue1.push(575);

	
	console.log(Queue1);
	Queue1.shift();
	console.log(Queue1)
	console.log(Queue1.search(275));
	console.log(Queue1.search(375));