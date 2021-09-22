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
const Msg = document.querySelector(#msg)


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