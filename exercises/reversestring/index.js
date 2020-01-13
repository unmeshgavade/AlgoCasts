// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// function reverse(str){
//     return str.split('').reduce((rev, char) => char + rev, '')
// }

function reverse(str){
    let reverse = '';
    for(let char of str){
        reverse = char + reverse
    }
    return reverse;
}

module.exports = reverse;
