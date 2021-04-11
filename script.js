'use strict'

let persons = [
    {
        name: 'John',
        age: 42,
        isDev: false,
    },
    {
        name: 'Rick',
        age: 22,
        isDev: false,
        skills: [
            'React'
        ]
    },
    {
        name: 'Kolya',
        age: 15,
        isDev: true,
    },
    {
        name: 'Gerg',
        age: 12,
        isDev: false,
    },
    {
        name: 'David',
        age: 24,
        isDev: true,
    },
];

// const obj = persons[1]

// let resultOfObjectEntries = Object.entries(obj)

// console.log(resultOfObjectEntries)

// let resultFromObjectEntries = Object.fromEntries(resultOfObjectEntries)

// console.log(resultFromObjectEntries)

const arrayStrings = ['aa', 'bb', 'xx', 'zz', 'xx', 'bb']

// const getUniqueValues1 = (arr)=>{
//     let array = []
//     for (let i = 0; i < arr.length; i++) {    
//        if(!array.includes(arr[i])){
//         array.push(arr[i])
//        }   
//     }
//     return array
// }
// console.log(getUniqueValues1(arrayStrings));


// const getUniqueValues2 = (arr) => {
//     const obj = {};
//     for (let i = 0; i < arr.length; i++) {
//        obj[arr[i]] = true
//     }   
//     return Object.keys(obj)
// }
// console.log(getUniqueValues2(arrayStrings))

// const getUniqueValues3 = (arr) => {
//     const set = new Set(arr)
//     return Array.from(set)
// }

// console.log(getUniqueValues3(arrayStrings))

//setTimeout
// let a = 0
// const func = (a) => console.log(a)

// const timerId = setInterval(func, 1000, 'tick')
// setTimeout(() => clearInterval(timerId), 3000)


// let showMessageXTimes = (message, times) => {
//     let timerId = setInterval(() => console.log(message), 1000)
//     setTimeout(() => clearInterval(timerId), times * 1000)
// }
// showMessageXTimes('sos', 2)


const obj = {
    name: 'John',
    sayName: function () {
        console.log(`My name is ${this.name}`);
    }
}

// obj.sayName()
// setInterval(() => obj.sayName(), 750)
const sayName = obj.sayName.bind(obj)
sayName()
