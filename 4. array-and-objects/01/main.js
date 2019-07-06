let myPenguin = {
  name: 'Duke',
  origin: 'Boner\'s Ark',
  canFly: false,
  sayHello: () => console.log('CHIRP CHIRP!')
}

myPenguin.favouriteFoods = ['Jalebi', 'Ghewar', 'Rogan Josh'];

console.log(myPenguin.favouriteFoods[1]);

let firstFavFood = myPenguin.favouriteFoods[0];

myPenguin.favouriteFoods.push('Bhindi');

myPenguin.favouriteFoods[myPenguin.favouriteFoods.length - 1] = 'Pineapple';

let lastFavFood = myPenguin.favouriteFoods[myPenguin.favouriteFoods.length - 1];

for (var i = 0; i < myPenguin.favouriteFoods.length; ++i) {
	console.log(myPenguin.favouriteFoods[i]);
}