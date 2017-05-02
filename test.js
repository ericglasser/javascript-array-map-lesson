let people = [{
        name: {
            first: 'James',
            last: 'Doe'
        },
        age: 26
    }, {
        name: {
            first: 'Jane',
            last: 'Doe'
        },
        age: 32
    }
];

let ages = people.map((person) => {
    return person.age;
});

let fullNames = people.map((person) => {
    return person.name.first + ' ' + person.name.last;
});

console.log(ages);
console.log(fullNames);
console.log(people);