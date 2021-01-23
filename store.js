"use strict"

//склад
const warehouse = [
    { idItem: 101, item: { name: "item11111", price: 11.1, weight: 1.1, imgPath: "#", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam." }, volume: 3 },
    { idItem: 102, item: { name: "item22222", price: 12.1, weight: 1.2, imgPath: "#", descr: "Et repellendus molestiae hic vitae? Similique sunt suscipit laudantium dolorem!" }, volume: 4 },
    { idItem: 103, item: { name: "item33333", price: 13.1, weight: 1.3, imgPath: "#", descr: "Eaque nostrum facere a numquam officia, doloribus molestias quisquam eos." }, volume: 3 },
    { idItem: 104, item: { name: "item44444", price: 14.1, weight: 1.4, imgPath: "#", descr: "Assumenda earum quasi incidunt quia eligendi placeat officiis magni nostrum?" }, volume: 2 },
    { idItem: 105, item: { name: "item55555", price: 15.1, weight: 1.5, imgPath: "#", descr: "Voluptatibus, atque at a rem eum beatae molestias assumenda soluta." }, volume: 2 },
    { idItem: 106, item: { name: "item66666", price: 16.1, weight: 1.6, imgPath: "#", descr: "Minima dolorem at corporis temporibus modi suscipit soluta blanditiis officiis." }, volume: 2 },
];

//корзина
const basket = {
    HTML: document.createElement('div'),
    items: [],
    cost: 0,
    weight: 0,
    init: function () {
        let summary = document.createElement('div');
        let itemTable = document.createElement('table');
        var tableCaption = itemTable.createCaption();
        this.HTML.appendChild(summary);
        this.HTML.appendChild(itemTable);
        summary.innerHTML = this.getSummary();
        summary.id = 'basket-summary';
        itemTable.id = 'basket-list';
        tableCaption.innerHTML = '<i>список&nbsp;покупок:</i>';
        return this;
    },
    put: function (item) {
        this.items.push(item);
        this.cost += item.price;
        this.weight += item.weight;
        let itemTable = document.getElementById("basket-list");
        let itemRow = document.createElement('tr');
        itemRow.innerHTML = '<td>' + this.items.length + '</td><td>' + item.name + '</td><td>' + item.price + '</td>';
        itemTable.appendChild(itemRow);
        this.updateSummary();
        console.log(item);
    },
    getSummary: function () {
        return 'товаров: ' + this.items.length + '; на сумму: ' + parseFloat(this.cost).toFixed(2) + '; общий вес: ' + parseFloat(this.weight).toFixed(2) + ';';
    },
    updateSummary() {
        let summary = document.getElementById("basket-summary");
        summary.innerHTML = this.getSummary();
        return summary.innerHTML;
    }
};

//ветрина
const showcase = {
    items: warehouse,
    HTML: document.createElement('div'),
    fill: function () {
        console.log(this.HTML);
        for (let i = 0; i < this.items.length; i++) {
            let item = document.createElement('div');
            this.HTML.appendChild(item);
            let itemName = document.createElement('h4');
            let itemIMG = document.createElement('img');
            let itemDescr = document.createElement('p');
            let itemLost = document.createElement('p');
            let itemPrice = document.createElement('p');
            let itemWeight = document.createElement('p');
            let itemButton = document.createElement('input');
            item.appendChild(itemName);
            item.appendChild(itemIMG);
            item.appendChild(itemDescr);
            item.appendChild(itemLost);
            item.appendChild(itemPrice);
            item.appendChild(itemWeight);
            item.appendChild(itemButton);
            item.className = 'item';
            itemName.innerHTML = this.items[i].item.name;
            itemIMG.src = this.items[i].item.imgPath;
            itemIMG.alt = 'no-image';
            itemDescr.innerHTML = this.items[i].item.descr;
            itemLost.innerHTML = 'осталось: ' + this.items[i].volume + 'шт.';
            itemLost.id = 'lostId@' + this.items[i].idItem;
            itemPrice.innerHTML = 'цена: ' + this.items[i].item.price;
            itemWeight.innerHTML = 'вес: ' + this.items[i].item.weight;
            itemButton.id = 'btnId@' + this.items[i].idItem;
            itemButton.type = 'button';
            itemButton.value = 'купить';
            itemButton.name = this.items[i].idItem;
            itemButton.addEventListener('click', toBasket);
        }
        return this;
    },
    take: function (id) {
        let item = this.items.find((q) => q.idItem === +id);
        if (--item.volume <= 0) {
            let itemButton = document.getElementById('btnId@' + id);
            itemButton.disabled = true;
        }
        let itemLost = document.getElementById('lostId@' + id);
        itemLost.innerHTML = 'осталось ' + item.volume + 'шт.';
        //console.log(item.item);
        return item.item;
    }
};

function toBasket(event) {
    basket.put(showcase.take(event.target.name));
}

window.onload = function () {
    // заполним витрину
    document.getElementById("showcase").appendChild(showcase.fill().HTML);
    // инициализируем корзину
    document.getElementById("basket").appendChild(basket.init().HTML);
};
