"use strict"

// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// Проверка числа на простое
function checkSimple(n){
    for (let i=2; i<n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// Вывод простых чисел от 0 до 100
function task1(){
    let i = 0; 
    while (++i <= 100) {
        if (checkSimple(i)) {
            console.log(i);
        }
    }
}


// С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

// Организовать такой массив для хранения товаров в корзине;
const trash = [];

// Заполним корзину
function fillBasket(){
    trash.push({'descr':'товар1', 'price':1.1, 'count':2});
    trash.push({'descr':'товар2', 'price':2.2, 'count':1});
    trash.push({'descr':'товар3', 'price':0.2, 'count':4});
}

// Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(){
    let amount=0;
    for (let i=0; i<trash.length; i++) {
        amount += trash[i]['count'] * trash[i]['price'];
    }
    return amount;
}

// Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
function task4(){
    for (let i=0; i<=9; console.log(i++)) {/*пусто!*/}
}

// Нарисовать пирамиду с 20 рядами с помощью console.log
function pyramid(){
    let height=20;
    for (let i=1; i<=height; i++) {
        let line = '';
        // пробельные префиксы
        for (let ii=((height-i)/2); ii>=1; ii--) {
            line += ' ';
        }
        // линия пирамиды
        for (let ii=1; ii<=i; ii++) {
            line += 'x';
        }
        console.log(line);
    }
}
