/* QUESTION 1 */

function filterOutFalsy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2
}

console.log(filterOutFalsy(true, "Dog"))

/* QUESTION 2 */

function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1, 2, 3, 4]))

/* QUESTION 3 */

function lastElementInArray(arr) {
    return arr[arr.length - 1];
}

console.log(lastElementInArray([3, 2, 0, 6, 2]));

/* QUESTION 4 */

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([2, 2, 2]));

/* QUESTION 5 */

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum = sum + i;
    }
    return sum

}

console.log(progressiveSum(3));

/* QUESTION 6 */

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = "0" + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(66));

/* QUESTION 7 */

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([-100, -200, -300]));

/* QUESTION 8 */

function reverseString(str) {
    let reversedString = "";
    for (let i = 0; i < str.length; ++i) {
        reversedString = str[i] + reversedString;
    }
    return reversedString;
}

console.log(reverseString("abc"));

/* QUESTION 9 */

function convertToZeros(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; ++i) {
        newArr[i] = 0;
    }
    return newArr;
}

console.log(convertToZeros([5, 100, 0]));

/* Array.fill */

function convertToZeros(arr) {

    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([5, 100, 0]));

/* Array.map */


function convertToZeros(arr) {

    return arr.map(elem => 0);
}

console.log(convertToZeros([5, 100, 0]));

/* QUESTION 10 */

function removeApples(arr) {
    let noApples = []

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== "Apple") {
            noApples.push(arr[i]);
        }
    }
    return noApples;
}

/* ARRAY.FILTER */

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));

function removeApples(arr) {
    return arr.filter(elem => elem !== "Apple")
}

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));

/* QUESTION 11 */

function filterOurFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(filterOurFalsy([NaN, undefined, null, [], 0]));

/* QUESTION 12 */

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "David", "", []]));

/* Advanced QUESTIONS */

/* QUESTION 1 */

function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += "*"
        if (i !== Math.floor(rating) - 1) {
            ratings += " "
        }
    }

    if (!Number.isInteger(rating)) {
        ratings += " .";
    }

    return ratings;

}
console.log(showRating(4.5));

/* QUESTION 2 */

function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b);


}

console.log(sortLowToHigh([1, 5, 0, 10, 4]))

/* QUESTION 3 */

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - alert.price);
}

console.log(sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 500 }
])
);

/* QUESTION 5 */

 async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/incompleteTasks");

    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}

postsByUser(4);

/* QUESTION 6 */

async function firstSixIncomplete() {

    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json();

    const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6);

    console.log(incompleteTasks);
}

firstSixIncomplete(6);