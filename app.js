let text = document.getElementById("title").innerHTML;
document.getElementById("title").innerHTML =
text.toUpperCase();

const welcome = "Hi this is a"
const item = "prime number checker"
console.log(`${welcome} ${item}`)

function changeBackground(color)
{
    document.body.style.background = color;
}
window.addEventListener('load', function() {changeBackground('green') });
    

function check() {
var number = input.value;
var isPrime = true;
let guess;
let running = true;

if (number === 1) { 
   alert("1 is neither prime nor composite number.");

}

else if (number > 1) {
    for (var i = 2; i < number/2; i++)
{

while (number > 100) {
alert('Number needs to be less than 100');

number++;
break;

}


if (number % i == 0)
{
    isPrime = false;
    break;
}
}

if (isPrime==true) {
  alert(number+ " is a prime number");
}
else{
    alert(number+ " is not a prime number");
}
}

else {
    alert('The number is not a prime numer.');
}
input.value = ""
    }