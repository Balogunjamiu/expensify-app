















// const person = {
//     name: 'Balogun',
//     age: 27,
//     location : {
//         city : "lagos",
//         temp: 90
//     }
// }

// const {name: firstname = 'anonymous'  , age} = person;
// console.log(`${firstname} is ${age}.`)

// const {city, temp:temperature} = person.location
// if (city && temperature){
//     console.log(`it is ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author : 'Ryan Holiday',
//     publisher: {
//         name: "penguin"
//     }
// }

// const {name:publisherName = 'self-published'} = book.publisher
// console.log(publisherName)


const address = ['6, mohammed balogun', 'ikeja', 'lagos', '11101']

const [, city = 'New york', state] = address;
console.log(`you are in ${city} ${state}`)

const item = ['coffee(hot)', "$2.00", "$2.50", '$2.75' ]

const [coffee, , price] = item
console.log(`A medium ${coffee} costs ${price}`)


