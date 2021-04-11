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

const obj = persons[1]

let resultOfObjectEntries = Object.entries(obj)

console.log(resultOfObjectEntries)

let resultFromObjectEntries = Object.fromEntries(resultOfObjectEntries)

console.log(resultFromObjectEntries)