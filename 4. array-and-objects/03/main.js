let myPenguin = {
  name: 'Duke',
  origin: 'Boner\'s Ark',
  canFly: false,
  sayHello: () => console.log('CHIRP CHIRP!')
}

myPenguin.outfit = {
	hat: 'Baseball cap',
	shirt: 'Hawaiian shirt',
	pants: 'Cargo shorts',
	shoes: 'Flip flops'
}

let penguinHatType = myPenguin.outfit.hat;

myPenguin.outfit.accessory = 'Pocket watch';

myPenguin.outfit.hat = 'Top hat';

delete myPenguin.outfit.pants;

for (key in myPenguin.outfit) {
	console.log(myPenguin.outfit[key]);
}