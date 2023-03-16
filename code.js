//helloWorld function
function helloWorld() {
    return "Hello, World!";
}
function sayHello(name) {
    if (typeof name == 'string' && name != "" && isNaN(name)) {
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!";
    }
}

function isFive(input) {
    if (Number(input) == 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(input) {
    if (typeof input == 'undefined' || input == null) {
        return false;
    } else {
        input = input.toString();
        if (Number(input % 2 == 0)) {
            return true;
        } else {
            return false;
        }
    }
}

function isVowel(input) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    if (typeof input == 'string' && input.length == 1) {
        if(vowels.includes(input.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    } else {
        return false
    }
}

function add(inputOne, inputTwo) {
    if(isNaN(inputOne) || isNaN(inputTwo)) {
        return "NaN";
    } else {
        return Number(inputOne) + Number(inputTwo);
    }
}



