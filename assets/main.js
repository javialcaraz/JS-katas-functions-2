//KATA1 ADD
function add(x, y) {
    return x + y
}
console.log(add(4, 2))


//KATA2 MULTIPLY
function multiply(a, b) {

    let answer = a
    for (var i = 0; i < b - 1; i++) {
        answer += a
    }
    return answer
}
console.log(multiply(4, 3));


//KATA3 POWER
function power(x, n) {
    let answer = x
    for (var i = 0; i < n - 1; i++) {
        answer *= x
    }
    return answer
}
console.log(power(3, 3));


//KATA4 FACTORIAL
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log(factorial(4));


//BONUS FIBONACCI
function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}
console.log(fibonacci(4));



