//KATA1 ADD
function add(x, y) {
    return x + y
}
console.log(add(4, 2))


//KATA2 MULTIPLY
function multiply(a, b) {

    let answer = a
    for (var i = 0; i < b - 1; i++) {
        answer = add(a, answer)
    }
    return answer
}
console.log(multiply(4, 3));


//KATA3 POWER
function power(x, n) {
    let answer = x
    for (var i = 0; i < n - 1; i++) {
        answer = multiply(x, answer)
    }
    return answer
}
console.log(power(2, 4));


//KATA4 FACTORIAL

function factorial(num) {
    let answer = num
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i - 1; i--) {
        answer = multiply(answer, i)
    }
    return answer
}
console.log(factorial(5));


//BONUS FIBONACCI
function fibonacci(n) {
    var a = 0, b = 1, f = 1;
    for (var i = 3; i <= n; i++) {
        f = add(a, b)
        a = b;
        b = f;
    }
    return f;
}
console.log(fibonacci(8));



