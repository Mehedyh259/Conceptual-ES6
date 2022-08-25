const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]


// expected output
// {
//     ID01:"abul vai",
//      ID02: 'babul vai',
//      ID03: 'habul vai',
//      ID04: 'jabul vai'
// }

const info = {}

// obj.name= 'Mehedy';
// obj['name'] = "Mehedy"

Persons.map(person => {
    info[person.id] = person.name
})

console.log(info.ID02);








