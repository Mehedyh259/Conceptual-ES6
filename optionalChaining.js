const petOwner = {
    name: 'Hero Alom',
    contact: {
        phone: "09376253",
        email: "xyz@gmail.com"
    },
    cat: {
        name: 'Lofie',
        info: {
            color: 'black',
            weight: '1.2kg'
        }
    }
};

// console.log(petOwner?.dog?.name);
console.log(petOwner.cat.name);
console.log(petOwner.cat.info.color);
console.log(petOwner.cat?.info?.food?.price);

console.log('hello world')



