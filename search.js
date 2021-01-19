'use strict';
const arr = [3, 4, 6, 7, 9, 11, 15, 17, 19];
const binarySearch = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.round(arr.length / 2);

    while (true) {
        if (value === arr[middle]) {
            return middle;
        } else if (value > arr[middle]) {
            start = middle;
            middle = Math.ceil((end + start) / 2);
        } else {
            end = middle;
            middle = Math.floor((end - start) / 2);
        }

    }
}

const user1 = {
    id: 1,
    name: 'John',
    surName: 'Bond',
    age: 18,
};

const user2 = {
    id: 2,
    name: 'Jane',
    surName: 'test',
    age: 30,
};

const johnMsg = ['str1', 'str2', 'str3'];
const janeMsg = ['str135352', 'str343', 'str34'];

function getMessagesFromMap(user1, user2) {
    const mapWithAllMessages = new Map();
    mapWithAllMessages.set(user1, johnMsg);
    mapWithAllMessages.set(user2, janeMsg);
    return mapWithAllMessages.get(user1), mapWithAllMessages.get(user2);

};



// console.log(mapWithAllMessages.get(user1));
// console.log(mapWithAllMessages.get(user2));