console.log("Hello, RIP to the chicks")

let literalDay = new Date().toString()
console.log(literalDay)

// let today = literalDay.split(" ")[0]
// console.log(today)

let today = "Sun"
// switch cases
switch (today) {
    case 'Sun':
        console.log("Probably homework because we're evil people who hate fun.")
        break;
    case 'Mon':
        console.log("Motorcycle Tune Up")
        break;
    case 'Tue':
        console.log("Shoveling snow and unburying Justin's jeep")
        break;
    case "Wed":
        console.log("ITS WEDNESDAY MY DUDES HYAHHHHHHH")
        break;
    case "Thu":
        console.log("Wishing for friday :(")
        break;
    case "Fri":
        console.log("Gotta get down on Friday with Lord Rebecca. And taking the quiz.")
        break;
    case "Sat":
        console.log("5 hours of summer once a week, one saturday morning.")
        break;
    default: // what happens if none of the cases are met
        console.log("Not a day, please try again.")
        break;
}


// Creation of JavaSCript Objects
// just a dictionary in python

let person = {
    "name": "Ryan",
    "age": "80",
    "favColor": "pink",
    "clothes": {
        "shirt": "pokemon shirt",
        "pants": "pikachu short shorts",
        "hat": "wizard hat",
        "jacket": "nice big puffer jacket"
    },
    'back-end': 'Python',
    'front-end': 'JavaScript'
}
//           objectName['key']
console.log(person['name'])
// dot notation
//          objectName.key
console.log(person.age)
console.log(person['clothes']['pants'])
console.log(person.clothes.jacket)
// we need bracket notation, because it doesn't interpret the - correctly
// console.log(person.front-end)
console.log(person['front-end'])



let person2 = {
    "name": "Dumbledore",
    "age": 130,
    "hobbies": ["quidditch", "cleaning his broom", "living", "general wizardry", "gaslighting children"],
    "favColor": "purple",
    "sportTeams": [
        {
            "Tutshill": "Tornados"
        },
        {
            "New York": "Knicks"
        },
        {
            "Manchester": "Manchester United"
        },
        {
            "Wimbourne": "Wasps"
        }
    ],
    "tvShows": ["Game of Thrones", "Scrubs", "One Piece", "Dragon Ball Z", "The Wire", "Britains Got Talent", "Breaking Bad"]
}

console.log(person2)
// accessing keys from an object
// python - dict_name.keys()
// Object.keys(objectName)
console.log(Object.keys(person2))

// Looping through an objects keys
//    iterator of thing we're iterating through
// of -- loop by value
// in -- loops by index
for (const key of Object.keys(person2)) {
    console.log(key)
}
// looping keys by index --- but generally you may be better off with the above
for (const i in Object.keys(person2)) {
    console.log(Object.keys(person2)[i])
}

// access values from an object
// python -- dict_name.values()
console.log(Object.values(person2))

for (const value of Object.values(person2)) {
    console.log(value)
}
// accessing key and value pairs from a dictionary
// Object.entries(objectName)
console.log(Object.entries(person2))

// for (const [key, value] of Object.entries(person2))
// groupOfNames = ["Gary", "Ash", "Misty", "Brock", "Officer Jenny"]
// let [gary, ash, misty] = groupOfNames
for (const [key, value] of Object.entries(person2)) {
    console.log(key, value)
}


// for....in
// loops through the keys in our object
// we can use that key to access the values in the object
// similar to Object.entries(person2)
for (const key in person2) {
    console.log(key, person2[key])
}

// looping through an object with values that are arrays
for (const [key, value] of Object.entries(person2)) {
    if (Array.isArray(value)) {
        console.log(`${key}: `)
        value.forEach(thing => console.log(thing))
    } else {
        console.log(`${key}: ${value}`)
    }
}

// Object Prototype -- The old OOP ES5
function Car(make, model, year) {
    // set object prototype attributes
    // self.make = make == this.make = make
    this.make = make;
    this.model = model;
    this.year = year;

    // method inside object prototype
    //def do_something(self)
    // this.doSomething()

    this.printInfo = (wheels = 4) => {
        console.log(`This is a ${this.year} ${this.make} ${this.model} and has ${wheels} wheels.`)
        //                              no this.wheels because its a default parameter
        return "sick car brah"
    }
}

let myCar = new Car("Chevy", "Lumina", "1997")
console.log(myCar)
console.log(myCar.make)
console.log(myCar['model'])
console.log(myCar.printInfo())

// JavaScript Class

class Human {

    // __init__(self, param1, param2...)
    constructor(name, age, hobby) {
        this.age = age
        this.name = name
        this.hobby = hobby
        console.log(this.printInfo())
    }

    printInfo = () => {
        return `Name: ${this.name} \nAge: ${this.age} \n Hobbies: ${this.hobby}`
    }
}
let link = new Human('Link', 24, ["build stuff", "break pots", "save hyrule", "yell hyaaaahhh"])

// console.log(link.printInfo())
console.log(link.age)
console.log(link.hobby)


// JavaScript Inheritance
// extends keyword
//class Baby(Human) <-- class to be inherited
class Baby extends Human {
    constructor(name, age, hobby, walking) {
        //use super to inherit attributes from the parent class
        super(name, age, hobby)
        // attribute unique to the child class
        this.walking = walking
    }

    //new method for bb
    isBabyWalking= () =>{
        if (this.walking == true) {
            return `Oh lawd, ${this.name} is a comin`
        } else {
            return `${this.name} isn't walking yet....thaaaaank goodness.`
        }
    }
}
//instantiating a Baby object
let theBaby = new Baby("Cute Baby", "2 years old", "holding parking spots and pooping", true)
// accessing the printInfo method from the parent class
console.log(theBaby.printInfo())
//calling method unique to baby class
console.log(theBaby.isBabyWalking())

//python
// class Baby
// the_baby = Baby()


// --JavaScript Closure-- //
/**
 * 
 * A closure is a self-invoking function that only runs once.
 * it can then set a variable(which in our case will be a counter) and 
 * returns a function expression
 * 
 * For the example below, we will add to a number after the 
 * initial call to the closure has been made 
 * 
 * JavaScript Closures are another type of variable that can be created
 */

let countUp = (function (){
    let counter = 0 //function scoped to variable
    console.log("hit")
    return function(){
        console.log(counter)
        return counter++
    }
})() // <-- this calls the function -- self-invokes


// -- JavaScript Callbacks -- //

/**
 * 
 * A callback is a function that is to be executed after another function
 * has finished its execution -- hence the name callback
 * 
 * In JavaScript, functions are objects. Because of this, functions can take
 * other functions as arguments(parameters and can return functions by
 * other functions
 * 
 * Functions that do this are called "higher-order functions". Any function
 * that is passed as an argument is called a "Callback Function"
 * 
 * POR QUE?
 * 
 * Porque of the JavaScript Event Loop. In a nutshell, Javascript is
 * an event driven language which means instead of waiting for a response
 * Javascript will keep executing while listening for the other events
 * 
 */


// demonstrate the javascript event loop
function first(){
    console.log(1)
}

function second() {
    console.log(2)
}

// first()
// second()

// adding a delay to the first function
function firstDelay(){
    //simulate a delay of 2 seconds
    setTimeout(()=>{
        console.log(1)
    }, 2000)
}

// firstDelay()
// second()

//callback function
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework!`)
    callback()
}

// doHomework('JavaScript', ()=>{
//     console.log("Done with homework")
// })

/*
Though callbacks give us more functionality...they also introduce their own 
problem......Callback Hell

Something that looks like this:
function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
})

*/
// JavaScript Promise
const isEvenNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0){
            resolve(num)
        }else {
            reject(num)
        }
    })
}

// if number is even, print number
// if its odd, double the number
isEvenNumber(9)
    // happy path resolves
    .then((result) => {
        console.log(`Even number. Great job! ${result}`)
    })
    .catch((notEven) => {
        console.log(`boooo odd number ${notEven}`)
    })

// asynchronous functions
// using async await
function slowAddition(n1, n2){
    return new Promise((resolve) =>{
        setTimeout(() =>{ resolve(n1 + n2)}, 3000)
    })
}

function increaseSalary(base, increase) {
    const newSalary = slowAddition(base, increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

// increaseSalary(40000, 10000)

// creating an asynchronous function to wait the output of slowAddition
// async --> precede a function and makes it asynchornous
// await --> wait for another to finish before resolving

async function asyncSalary(base, increase) {
    const newSalary = await slowAddition(base, increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

asyncSalary(50000, 10000)












