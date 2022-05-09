console.log("¡Hola Soy Dora!");

const body = document.querySelector("body");
body.style.backgroundColor = "steelblue";

const name = "Dora";
const age = 15;

console.log(`${name} is ${age} years old.`);

const person = {
    name: "Dora",
    age: 15,
}

console.log("person", person);

const people = [person, 1, 23];

console.log("people", people)

console.log("people", people[1])

console.log(`${person.name} is ${person.age} years old.`);

function add15(d) {
    return d + 15
}

console.log("add15", add15(age));

function sayName() {
    console.log(`${name} is ${age} years old.`);

}

const b = sayName(person);

let a = null;

console.log("b", b, a, b === a);

// If the name is undefined, then the default is Dora.
function Person(_name = "Dora") {
    let name = _name,
    age = 15,
    person = {};

    function sayName() {
        console.log(`${name} is ${age} years old.`);
        return person;
    }

    // Below is an example of an anonymous function.
    person.add15 = function add15() {
        age += 15
    };

    person.sayName = sayName;

    // Setter.
    person.setAge = (_age) => {
        age = _age
        return person;
    };

    // Getter.
    person.getAge = () => {
        return age;
    };

    // Setter + Getter combo.
    person.fancyAge = (_age) => {
        if (_age === undefined) {
            return age;
        } else {
            age = _age;
        }
    };

    // More concise code for the function above.
    person.evenFancierAge = (_age) => {
        return (_age === undefined)? age : ((age = _age), person);
    };

    return person;
}

const p1 = Person();
const p2 = Person("Boots");

p1.sayName();
p1.add15();
p1.sayName();

p2.sayName();
p2.add15();
p2.sayName();

p1.setAge(25);
p1.sayName();

// NOTE: CHAINING FUNCTIONS!
// p1.add15().sayName() will throw an error
// unless the person val is returned (line 51, 63).
p1.setAge(5).sayName()

console.log("age", p1.getAge());

p1.fancyAge(12);

console.log("fancy", p1.fancyAge());

// Button example.
const onClick = () => {
    console.log("Button clicked.");
    return true;
}

const btn = document.querySelector("#btn");

console.log("before");

btn.addEventListener("click", onClick);

console.log("after");





//debugger;
