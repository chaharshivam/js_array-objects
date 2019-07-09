var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () { 
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

let penguins = [gunter, ramon, fred];

console.log(penguins[0]);

let secondPenguin = penguins[1];

console.log(penguins[penguins.length - 1].name);

let myPenguin = {
  name: 'Duke',
  origin: 'Boner\'s Ark',
  canFly: false,
  sayHello: () => console.log('CHIRP CHIRP!')
}

penguins.push(myPenguin);

console.log(penguins.length);

penguins[0].canFly = false;

penguins[0].sayHello();

for (var i = 0; i < penguins.length; ++i) {
  console.log(penguins[i].name);
}

for (var i = 0; i < penguins.length; ++i) {
  penguins[i].sayHello();
}

for (var i = 0; i < penguins.length; ++i) {
  penguins[i].numberOfFeet = 2;
}

for (var i = 0; i < penguins.length; ++i) {
  if (penguins[i].canFly) {
    console.log(`${penguins[i].name} can fly!`);
  }
}