/*
let x = -3.142
let y = 5
let z = 9
    //x = Math.floor(x)
    //x = Math.ceil(x) rounding to the closet
    //x = Math.pow(x, 3) power exponential
    //x = Math.sqrt(x) square root
x = Math.abs(x)
maximum = Math.max(x, y, z) // maximum number among x,y,z
minimum = Math.min(x, y, z) // minimum number among x,y,z
x = Math.PI //PI function in the Math Library
console.log(x)
console.log('Maximum :' + maximum)
console.log('Minimum :' + minimum)
*/
let a
let b
let c

/*
    a = window.prompt('Enter Value for Side A')
a = Number(a)

b = window.prompt('Enter Value forSide b')
b = Number(b)

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
c = console.log('Side C: ', c)*/
document.getElementById("submitbtn").onclick = function() {

    a = document.getElementById("atxt").value
    a = Number(a)

    document.getElementById("btxt").value
    b = Number(b)

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    document.getElementById("clbl").innerHTML = "Side C: " + c

}