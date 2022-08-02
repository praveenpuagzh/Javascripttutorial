//non-parameterized functions
function greet() {
    console.log("Hello world")
}
greet()

function add() {
    console.log(2 + 3)
}
add()

//named fucntion
let subraction = function () {
    console.log(6 - 4)
}
subraction()

//paramerterized function

function greetuser(name) {
    console.log("Hello" + " " + name)
}
greetuser("praveen")

let mul = function (num1, num2) {

    console.log(num1 * num2)
}
mul(2, 2)


//arrow function
let div = (num1, num2) => {

    console.log(num1 / num2)
}
div(10, 2)

