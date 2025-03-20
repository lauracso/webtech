//js_functions.js

function testFunction() {
    console.log("testFunction() called");
}

function add(a,b) {
    console.log("testFunction()");
    return a+b;
}

testFunction();

let x = 10;
let y= 20;
let answer = add(x,y);

console.log("Answer: " +answer);

answer = add(x);

console.log("Answer: " + answer);

setTimeout(testFunction, 3000);

console.log("Finished.")

//asynchronous call
//setTimout 
setTimeout(testFunction,4000);

setTimeout(function() {
    console.log("asynchronous call made");
}, 3000);


let button = document.getElementById("btnTest");

button.addEventListener('click', function(){
    alert("is this working?");
});

let o = {
    name: "Laura",
    email: "laura@gmail.com",

    display:function() {
        console.log("display() called");
        console.log(this.name);
        console.log(this.email);
    }
}

o.display();

console.log("-------------------------------------------");

//arrow function shorthand way to declare a function
setTimeout(()  => {
    console.log("did this work");
}, 3000);

let arrowFunction = () => {
    console.log("This is an arrow function");
}

arrowFunction();

let button2 = document.getElementById("btnTest2");

button2.addEventListener("click", (event) => {
    console.log(event);
    alert("Button 2 pressed");
});
