

console.log("js_building_blocks.js running");

var x =10;

let y=20;

const pi = 3.14;

console.log("finished");

let firstName = "Laura"; //string
let v = 1.2345 //floating point numbers
let b = true; //boolean

z = "one hundred";  //JS is not type safe

let d = new Date(); //Date is an pbject
console.log(d.getFullYear);

let colours = ["red", "green", "blue"];

console.log(colours.length);

//loops
for(let i=0; i<colours.length; i++) {
    console.log(colours[i]);
}

console.log("-----------------");

for(let colour of colours) {
    console.log(colour);
}

//conditionals

let r = Math.random();
if(r < 0.5) {
    console.log("small: " +r);
} else if(r <0.7) {
    console.log("medium: " +r)
}

//ternary operator
let message = "The value is " + (r < 0.5 ? "small" : "large");

//Objects

let o = {
    name: "Laura",
    location: "Cork",
    score: 999
};

console.log(o);

console.log(o.name);
console.log(o["name"]);  //very unique to javascript to be able to access object parameters in this way

//objects are mutable, 
// can just add parameters to existing objects
//no builder pattern
o.country="Ireland";
console.log(o);

//array of objets
let people = [{id:1, name:"Alice", email:"alice@gmail.com", active:true},
    {id:2, name:"Bob", email:"bob@gmail.com", active:false},
    {id:3, name:"Carol", email:"carol@gmail.com", active:false},
    {id:4, name:"Dan", email:"dame@gmail.com", active:true}
];

for(let person of people) {
    if(person.active) {
        console.log(person.name);
    } else {
        console.log(person.name + " is inactive");
    }
}