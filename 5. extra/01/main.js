// Animal test user
function AnimalTestUser(username) {
	let otherArgs = [];

	if (arguments.length > 1) {
		for (var i = 1; i < arguments.length; ++i) {
			otherArgs.push(arguments[i]);
		}
	}

	return { 
    username: username,
    otherArgs: otherArgs
  };
}

var testSheep = AnimalTestUser('CottonBall');
console.log(testSheep);

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
console.log(testSheep);

// Constructor

function AnimalCreator(username, species, tagline, noises) {
	return {
		username: username,
		species: species,
		tagline: tagline,
		noises: noises
	}
}

var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg',
			 'chewchewchew']);

var cow = new AnimalCreator('Moo', 'cow', 'I\'m your mother!', ['Moo', 'Baa']);

var dog = new AnimalCreator('Woof', 'dog', 'I\'m trustworthy!', ['Woof', 'Bhau Bhau']);

console.log(sheep);

// Add friend

function addFriend(animal_1, animal_2) {
	if (!animal_1.friends) {
		animal_1.friends = [];
	}
	
	animal_1.friends.push(animal_2.username);

	return animal_1;
}

sheep = addFriend(sheep, cow);

console.log(sheep);

// My Farm

var myFarm = [];

myFarm.push(sheep);
myFarm.push(cow);
myFarm.push(dog);

console.log(myFarm);

myFarm[0] = addFriend(myFarm[0], dog);
myFarm[1] = addFriend(myFarm[1], dog);
myFarm[2] = addFriend(myFarm[2], cow);

console.log(myFarm);

// Matches

for (var i = 0; i < myFarm.length; ++i) {
	myFarm[i].matches = [];
	myFarm[i].matches.push(myFarm[i].friends[0]);
}

console.log(myFarm);