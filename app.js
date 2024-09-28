let text = document.getElementById("title").innerHTML;
document.getElementById("title").innerHTML =
text.toUpperCase();

const welcome = "Hi this is a"
const item = "prime number checker"
console.log(`${welcome} ${item}`)





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

if (number % i == 0)
{
    isPrime = false;
    break;
}
}

if (isPrime==true) {
  alert(number+"\nis a prime number");
}
else{
    alert(number+ "\nis not a prime number");
}
}

else {
    alert('The number is not a prime numer.');
}
input.value = ""
    }