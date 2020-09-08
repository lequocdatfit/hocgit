function Dog() {
	this.name = 'nam';
	this.stomash = [];
}

Dog.prototype.eat = function(cat) {
	this.stomash.push(cat);
};