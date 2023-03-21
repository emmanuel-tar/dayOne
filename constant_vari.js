//const = variable that can't be changed.

const PI = 3.14159
let radius;
let circumference;


radius = window.prompt('Enter the radius of the cicle');
radius = Number(radius);

circumference = 2 * PI * radius;

console.log('The Circumference of the circle is: ', circumference);