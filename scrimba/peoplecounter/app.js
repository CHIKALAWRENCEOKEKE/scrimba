// let humsn = 10;
// let dogs = 6;

// let meDogAge = humsn + dogs;

// console.log(meDogAge);

// function increment() {
//   console.log("ghjkjjjbjbjvhvh");
// }

// function gun() {
//   console.log("shoot anybody");
// }

// gun();

// let ego = 200;
// let money = 1000;
// let wealth = "aku na uba";

// function all() {
//   console.log(ego);
//   console.log(money);
//   console.log(wealth);
// }

// all();

// let mej = 100;
// let gen = 97 - mej;

// function jerry() {
//   console.log(mej);

//   console.log(gen);
// }

// jerry();

let countEL = document.getElementById("countEl");
console.log(countEL.innerHTML);

let count = 0;

function increment() {
  count = count + 1;
  countEL.innerHTML = count;
}
