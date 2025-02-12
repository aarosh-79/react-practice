"use client";

import { Result } from "postcss";

//object of students
const a1 = {
    name: "rakuro",
    age: '20',
    genre: 'isekai'
}

const a2 = {
    name: "oikatzo",
    age: '30',
    genre: 'slice of life'
}
const s = [a1, a2];
const name = s.filter((Element) => {
    return Element.genre === 'isekai';
});
console.log(s)
//sumoftwonumbers
const sumoftwonumbers = (a = 4, b = 6) => {
    const sum = a + b;
    return sum;
};
console.log(sumoftwonumbers())


//subtraction 
const subtraction = (x = 8, y = 7) => {
    const subtraction = x - y;
    return subtraction;
};
console.log(subtraction())

//even odd numbers
const even = (a) => {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
};
console.log(even(7))

function Javascript() {
    return null;
}
export default Javascript;

