"use strict"

/*
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

// метод добавления товара в корзину
function addItem(descr, price, count) {
    this.items.push({ 'descr': descr, 'price': price, 'count': count });
}

// метод подсчета стоимости корзины
function countBasketPrice() {
    let amount = 0;
    for (let i = 0; i < this.items.length; i++) {
        amount += this.items[i]['count'] * this.items[i]['price'];
    }
    return amount;
}

// объект - наша корзина
const basket = {
    items: [],
    addItem: addItem,
    countBasketPrice: countBasketPrice,
};

// Заполним корзину
basket.addItem('товар1', 1.1, 2);
basket.addItem('товар2', 2.2, 1);
basket.addItem('товар3', 0.2, 4);

// Cтоимость корзины
basket.countBasketPrice();
