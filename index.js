//let start coding here:

let arr = [1, 2, 4, 5, 8, 15, 25, 90];
let count = 0;
for (let i = 0; i <= arr.length; i++) {
    if (i % 2 == 1) {
        count++
    }
}
console.log('count of odd number ${count}')

let str = "racecar";

function checkPalindrome(str) {
    let bag = "";
    for (let i = str.length - 1; i >= 0; i--) {
        bag = bag + str[i];
    }
    if (bag == str) {
        return true
    } else {
        return false
    }
}
