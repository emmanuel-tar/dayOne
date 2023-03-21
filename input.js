// how to accept user input

// easy way with window prompt
//let username = window.prompt("Enter Username: ");
//console.log('Username: ',username);

 






// difficult html textbox
let username;
document.getElementById('myButton').onclick = function(){

username = document.getElementById('myText').value;
console.log(username);
document.getElementById('myLabel').innerHTML = 'Hello '+username;
}
