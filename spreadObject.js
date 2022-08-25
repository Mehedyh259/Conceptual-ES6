const person = {
    name: "Hero Alom",
    age: 34,
    phone: "039945924",
    address: "bari nai",
    p: [1, 2, 3, 4]
}

const { name, age, address, p: number } = person;

for (let i of number) {
    console.log(i)
}

console.log(name);








