// **Q1.** Write a function to check if an array contains a particular number.

check = (array, number) => {
  let check = array.map(num => num == number && true);
  let contained = check[array.indexOf(number)];
  return contained ? contained : false;
};
// uncomment to check:
// var ans1 = check([1, 1, 2, 1, 1], 7);
// console.log(ans1);

// **Q2.** Write a function that takes two integers (hours, minutes) and converts them to seconds.

convertToSeconds = (hours, minutes) => {
  hours ? (hours = hours * 3600) : 0;
  minutes ? (minutes = minutes * 60) : 0;
  return hours + minutes;
};
// uncomment to check:
// var ans2 = convertToSeconds(1, 3);
// console.log(ans2);

// **Q3.** Use the following data to solve the problems below.

var aquarium = {
  filledWithWater: true,
  capacityInGallons: 12,
  numberOfRocks: 5,
  fish: [
    {
      type: "goldfish",
      size: "3.5 inches",
      color: "golden"
    },
    {
      type: "puffer",
      size: "4 inches",
      color: "tan"
    },
    {
      type: "clown",
      size: "3 inches",
      color: "orange"
    }
  ]
};

// access the value of the `capacityInGallons` key
const capacityInGallons = aquarium.capacityInGallons;

// add 2 rocks to the `numberOfRocks` in the aquarium
const addTwoRocks = aquarium.numberOfRocks + 2;

// access the `clown fish` and `print` the object.
const clownFish = aquarium.fish[2];
// console.log(clownFish);

// access the `size` of the `puffer` fish.
var pufferFishSize = aquarium.fish.filter(fish => fish.type == "puffer");
pufferFishSize = pufferFishSize[0].size;

// your `goldfish` grew! Access the `size` key of goldfish and reassign it to '4 inches'.
aquarium.fish[0].size = "4 inches";

// you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
aquarium.fish.push({
  type: "starfish",
  size: "5 inches",
  color: "blue"
});

// **Q4.**
var data = require("./data");
data = JSON.parse(data);

// Write a function that `console.logs` each character object in the data.
logData = () => {
  data.people.forEach(person => console.log(person));
};
//logData()

// Write a function that `console.logs` each character's `name`
logNames = () => {
  data.people.forEach(person => console.log(person.name));
};
//logNames();

// Write a function that `console.logs` each character's `name` and `eye color`

logNameEyes = () => {
  data.people.forEach(person =>
    console.log({ name: person.name, eyeColor: person.eye_color })
  );
};
//logNameEyes();

// Write a function that `console.logs` each character's name whose `mass` is greater than 75
logByMass = () => {
  data.people.forEach(person => person.mass > 75 && console.log(person.name));
};
//logByMass();

// BONUS **1.**
randomNum = num => {
  // excluding num
  return Math.random() * num;
};

// BONUS **2.**
isLeap = year => {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) return true;
  return false;
};

// uncomment to check
// console.log(isLeap(1800));
