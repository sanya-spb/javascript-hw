"use strict"

function task2(){
    let a = 2;
    let x = 1 + (a *= 2);

    alert('x=' + x);
}

function getRnd(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function setRnd(id, min, max){
    document.getElementById(id).value = getRnd(min,max);
}

function task3(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;

    if (a>=0 && b>=0) {
        alert('a>=0;b>=0; ответ: a-b = ' + (a - b));
    } else if (a<0 && b<0){
        alert('a<0;b<0; ответ: a*b = ' + (a * b));
    } else {
        alert('a b - разных знаков; ответ: a+b = ' + (a + b));
    }
}

function task4(){
    let a = getRnd(0,15);
    console.log('a=' + a);

    for (let i = a; i <= 15; i++) {
        switch (i) {
            case 0: console.log(i); break;
            case 1: console.log(i); break;
            case 2: console.log(i); break;
            case 3: console.log(i); break;
            case 4: console.log(i); break;
            case 5: console.log(i); break;
            case 6: console.log(i); break;
            case 7: console.log(i); break;
            case 8: console.log(i); break;
            case 9: console.log(i); break;
            case 10: console.log(i); break;
            case 11: console.log(i); break;
            case 12: console.log(i); break;
            case 13: console.log(i); break;
            case 14: console.log(i); break;
            case 15: console.log(i); break;
        }
    }
}

function task5plus(a,b){
    return a + b;
}

function task5minus(a,b){
    return a - b;
}

function task5multi(a,b){
    return a * b;
}

function task5divide(a,b){
    return a / b;
}

function task5test(){
    let a = getRnd(0,10);
    let b = getRnd(0,10);

    console.log('a='+a+'; b='+b);
    console.log('task5plus(a,b)='+task5plus(a,b));
    console.log('task5minus(a,b)='+task5minus(a,b));
    console.log('task5multi(a,b)='+task5multi(a,b));
    console.log('task5divide(a,b)='+task5divide(a,b));
}

function task6(arg1,arg2,op){
    switch (op) {
        case "+": console.log(task5plus(arg1,arg2)); break;
        case "-": console.log(task5minus(arg1,arg2)); break;
        case "*": console.log(task5multi(arg1,arg2)); break;
        case "/": console.log(task5divide(arg1,arg2)); break;
        default: console.log("no operation!");
    }
}

function getRndChar(chars){
    let rnd = Math.round(Math.random() * chars.length -1);
    return chars[rnd];
}

function task6test(){
    let arg1 = getRnd(0,10);
    let arg2 = getRnd(0,10);
    let op = getRndChar('+-*/');
    console.log('arg1='+arg1+'; arg2='+arg2+'; op='+op);
    console.log('task6(arg1,arg2,op)='+task6(arg1,arg2,op));
}
