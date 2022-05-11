

function addTwoNumbers(a,b){
    return a+b;
}

function swapTwoNumbers(a , b){
    var c = a;
    a = b;
    b = c;
    return [a,b];
} 

module.exports = {swapTwoNumbers, addTwoNumbers}
