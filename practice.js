let Name1 = 'Pedro'
Name1 = 'chris'
console.log(Name1)

//data types
const Name = 'pedro'
const Age = 15
const isComplete = true
const Val = null
const unk = undefined

console.log(typeof Name)

// string manipulation

let String = `My name is ${Name} and my age is ${Age}`
console.log(String)

console.log(Name.length)

for(let i = 0; i <= 10; i++)
{
    if (i % 2 == 0)
        {
            console.log(`Even number ${i}`)
        }
    else {
            console.log(`Odd number ${i}`)
        }
}


//arrays

const Fruits = ['mango','banana','grapes']

//add values to array
Fruits.push('orange')
//add values at the beginning
Fruits.unshift('pineapple')
//delete last value on the array
Fruits.pop()
//mapping the count of value on array
console.log(Fruits.indexOf('pineapple'))
Fruits.splice(0, 3) 
console.log(Fruits)

console.log(Fruits)

const Students = ['chris', 'mark','renz' ,'christ', 'arjhay']

console.log(Students.pop())
console.log(Students)

//object literals
const people = {
    firstName: 'Chris',
    lastName: 'Antonio',
    Age: 25,
    favorites: ['apple','blue','basketball','computer'],
    familyMember: {
                father: 'Pedro',
                mother: 'Nenang penduko',
                sister: 'Nena'

    }
}

console.log(people.firstName)
console.log(people.favorites[3])
//object to object
console.log(people.familyMember.father)

//array object
const Contacts = [
    {
        id: 1,
        fullName: 'Pedro Penduko',
        isSaved: 'phone'
    },
    {
        id: 2,
        fullName: 'chris Penduko',
        isSaved: 'phone'
    },
    {
        id: 3,
        fullName: 'mark Penduko',
        isSaved: 'SD'
    }

]

console.log(Contacts)

//for loop
for(let i = 1; i <= 10; i++ ){
    for(let x = 1; x < i; x++){
            console.log(i);
    }
}
//while loop
let y = 0
while(y < 10){

    console.log(y)
    y++
}

//loop array object

for(let c = 0; c < Contacts.length; c++){
            console.log(Contacts[c])
}
//optimize for loop for object 
for(let contact of Contacts ){
    console.log(contact.fullName)

}
//foreach 
Contacts.forEach(function(contact){
    console.log(contact.fullName)
})

const ContactsFullnane = Contacts.map(function(contact){
    return contact.fullName;
})

console.log(ContactsFullnane)


//filter
const ContactPhone = Contacts.filter(function(contact){
    return contact.isSaved == "phone"
}).map(function(contact){
    return contact.fullName
})

console.log(ContactPhone)
//JSON 
const ContactsJson = JSON.stringify(Contacts)

console.log(ContactsJson)

//function

function GetSum(x,y){
    return x + y
}

console.log(GetSum(11,100))

function OddEven(MaxNum){
    for(let x = 1; x <=MaxNum;x++){
        if(x % 2 == 0){
            console.log( `Even number ${x}`)
        }
        else{
            console.log(`Odd number ${x}`)
        }
    }
}

OddEven(10)

//arrow function

const getTotal = (min,max)=> min + max


console.log(getTotal(100,400))

//OOP
//class

// class Tao {
//     constructor(firstNameclass,lastnameclass){
//         this.firstNameclass = firstNameclass;
//         this.lastnameclass = lastnameclass;

//     }

//     getfullname(){
//         return `${this.firstNameclass} ${this.lastnameclass}`
//     }
// }

// //instantiate

// const tao1 = new Tao("christoper", "antonio")

// console.log(tao1.getfullname())
//constructor function
function Tao(firstNameclass,lastnameclass) {
    this.firstNameclass = firstNameclass
    this.lastnameclass = lastnameclass
    

    this.getfullname = () =>{
        return `${this.firstNameclass} ${this.lastnameclass}`
    }
}
const tao1 = new Tao("christoper", "antonio")
console.log(tao1)
console.log(tao1.getfullname())