function Cat() {
	this.stomash = [];
}
cat.prototype.eat = function(mouse) {
	this.stomash.push(mouse);
};

module.export = Cat;