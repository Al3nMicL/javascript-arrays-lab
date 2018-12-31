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