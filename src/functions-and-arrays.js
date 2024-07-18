// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if(a>b){
        return a;
    }
    return b;
};


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(wordsArr) {
    let longestWord = '';

    if(wordsArr.length > 1){
        wordsArr.forEach(function(word, i){
            if(word.length === longestWord.length){
                return ;
            }
            if(word.length > longestWord.length){
                longestWord = wordsArr[i];
            }
        })
        return longestWord;

    } else if(wordsArr.length === 1){
        return wordsArr[0];

    } else {
        return null;
    }
};



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;

    if(arr.length > 1){
        arr.forEach(function(number){
            sum += number;
        })
        return sum;
    } else if(arr.length === 1){
        return arr[0];
    } else{
        return 0;
    }
};



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let sum = 0;

    if(arr.length > 1){
        arr.forEach(function(number){
            sum += number;
        })
        return sum / arr.length;
    } else if(arr.length === 1){
        return arr[0];
    } else{
        return 0;
    }
};



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if(arr.length > 0){
        return arr.includes(word);
    } else if(arr.length === 0){
        return null;
    }
};
