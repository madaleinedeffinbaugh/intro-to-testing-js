h//elloWorld function
function helloWorld() {
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(name) {
    if (typeof name == 'string' && name != "" && isNaN(name)) {
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!";
    }
}
