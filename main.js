// //DOM (document object Model)

// const form =document.getElementById('myForm');
// const form2 = document.querySelector('#myForm');

// const inputs = document.querySelectorAll(".mb-3");

// console.log(inputs);

// inputs.forEach(function (input){

//         console.log(input)
// })

// const ul = document.querySelector(".items");

// // ul.firstElementChild.remove();

// ul.firstElementChild.textContent = "christoper"
// ul.children[1].innerText = "Hello"
// ul.lastElementChild.innerHTML = "<h1>BIG</h1>"

// const btn = document.querySelector("#btn")

// btn.style.background = "red"

//DOM events

const btn = document.querySelector("#btn")
const Form = document.querySelector(".container")
const UserEmail = document.querySelector("#UserEmail")
const UserPassword = document.querySelector("#password")
const Msg = document.querySelector("#msg")


btn.addEventListener("click",function (e){

        e.preventDefault();
        
        if(UserEmail.value.length === 0 || 
                UserPassword.value.length ===0){
                console.log("false")
                Msg.innerHTML = "<h4>please complete details</h4>"
                }
        else{
                console.log("'True'")
                Form.submit()
        }
})


let groceries = ['apples', 'bananas' , 'oranges']

for( let i = 0; i < groceries.length;i++){
        console.log(groceries[i])
}


//Write a JavaScript program to display the current day and time in the following format.
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);


//Write a JavaScript program to get the current date.
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log(today);

//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function animate_string(id) 
{
    var element = document.getElementById("#target");
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}