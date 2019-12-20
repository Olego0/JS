"use strict";
//Object

const pers = {
    name : "Rozbiinik",
    age: 45,
    male: "male",
    appartament:true,
    phone:"666228",
    greetings(){
        console.log(`Hello my name is ${this.name} an Im ${this.age} years old`)
    }
};

pers.greetings();
pers.friends = ["Adolf", "Iosif"]
pers.wife=true;

delete pers.friends;
console.log(pers);

for (let key in pers){
    console.log("key", key);
    console.log("Values", pers[key]);
}

const keysArr = Object.keys(pers);

console.log(keysArr);
pers.age = 65;

const valuesArr = Object.values(pers);
console.log(valuesArr);

const pareArr = Object.entries(pers);
console.log(pareArr);


const numbers = [1,2,34,5,6,7,56,34,38,5];

const max = Math.max(...numbers);
console.log(max);



 