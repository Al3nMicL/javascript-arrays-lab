var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
// appends a kitten to the end of the kittens array
var destructivelyAppendKitten = (name) => {
	return kittens.push(name);
};

// prepends a kitten to the beginning of the kittens array
var destructivelyPrependKitten = (name) => {
	return kittens.unshift(name);
};

// removes the last kitten from the kittens array
var destructivelyRemoveLastKitten = (name) => {
	return kittens.pop(name);
};

// removes the First kitten from the kittens array
var destructivelyRemoveFirstKitten = (name) => {
	return kittens.shift(name);
};

// appends a kitten to the kittens array and returns a new array
var appendKitten = (name) => {
	return kittens.concat(name);
};

// prepends a kitten to the kittens array and returns a new array
var prependKitten = (name) => {
	var cat = new Array(name);
	var litter = cat.concat(kittens);
	return litter;
};

// removes the last kitten in the kittens array and returns a new array
var removeLastKitten = (name) => {
	return kittens.slice(0, kittens.length -1);
};

// removes the first kitten from the kittens array and returns a new array
var removeFirstKitten = (name) => {
	return kittens.slice(1, kittens.length);
};