console.log('Hello there!')
console.log('Make triangle')
let width = 11, shape = '#', space = ' '

for (let i = 1; i < width; i++) {
    let line = '', mass = i + (i - 1), spaces = (width - mass) / 2;

    if (spaces <= 0) break

    for (let j = 0; j <= spaces; j++) {
        line += space
    }
    for (let l = 0; l <= mass; l++) {
        (l % 2) ? line += space : line += shape
    }
    for (let k = 0; k <= spaces; k++) {
        line += space
    }
    console.log(line)
}

console.log('Work with array')
let someArray = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function fillArray() {
    for (let i = 0; i < 20; i++) {
        someArray.push(getRandomInt(-100, 100))
    }
}

function replaceFromArray () {
    someArray.forEach((item, i, array) => {
        if (item < 0) array[i] = 0
    })
}

function addToArray() {
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] === 0 && !(i % 2)) someArray.splice(i + 1, 0, -1);
    }
}

fillArray()
console.log(someArray)
replaceFromArray()
console.log(someArray)
addToArray()
console.log(someArray)

console.log('Work with collection')
const model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]