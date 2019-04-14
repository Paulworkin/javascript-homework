(function () {
    'use strict';


console.log ("Задание 1");
console.log("Написать функцию со следующими аргументами: объект, from (значение от), to (значение до)." +
    " Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to." +
    " Пример вызова функции getGoods(goods, 2000, 3000);" +
    " в данном случае функция должна вернуть все товары, у которых цена в диапазоне от 2000 до 3000. " +
    "Для проверки функции используйте объект goods из файла с урока.");

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function getGoods(obj, from, to) {
    let resObj = {};
    for (let key in obj) {
        console.log("key", key); // ключи: piano, guitar и тд
        console.log(obj[key]); // объекты
        console.log(obj[key]["price"]); // значения свойства price

        if (obj[key]["price"] >= from
            && obj[key]["price"] <= to){
            // добавляем подходящие товары в результирующий объект
            resObj[key] = obj[key];
        }
    }
    console.log(resObj);
    return resObj;
}
getGoods(goods, 2000, 3000);

console.log ("Задание 2");
console.log ("Написать функцию addToCart(obj, title, countToCart) {} , " +
    "где obj - объект, title - название товара, count - количество товара, которое нужно добавить в корзину. " +
    "Функция ищет товар с указанным названием, если количество позволяет, то уменьшает количество товара на countToCart," +
    "если не позволяет, то выводит информацию об этом в консоль и завершает работу." +
    " Для проверки функции используйте объект goods из файла с урока.");
let goods2 = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function addToCart(obj, title, countToCart) {       //объект, название товара, количество товара(его нужно добавить в корзину)
   for (let variable in obj) {
       // console.log("variable", variable);           //свойство piano
       // console.log(obj[variable]["title"]);         //свойство piano в котором объект со свойством title
       // console.log(obj[variable]["count"]);          //свойство piano в котором объект со свойством title

        if (obj[variable]["title"] === title) {
            if (obj[variable]["count"] < countToCart) {
                console.log("На складе не хватает товара");
                return;
            } else {
                obj[variable]["count"] = obj[variable]["count"] - countToCart;
                console.log("Покупаемый товар:", obj[variable]['title']);
                console.log("Товара куплено:", countToCart);
                console.log("Товара осталось:", obj[variable]['count']);
            }
        }
   };
}

addToCart(goods2, "Барабаны", 5);


    console.log("Задание 3");
    console.log("Напишите функцию, которая отсортирует массив объектов books по значению свойства title. Объект в файле с занятия.");
    let goods3 = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

    let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];

    function sortBooks(arr) {
        arr.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
        });

        return arr;
    }

console.log(books);



console.log("Задание 4");
console.log("Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели " +
    "(понедельник - первый и т.д.). Выведите на экран текущий день недели.");

    let week = {
        1:'Monday',
        2:'Tuesday',
        3:'Wednesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday',
        7:'Sunday'
    };


    function today(now) {
        let date = new Date();  //создали пустой массив
        now = date.getDay();    //получаем текущий день недели из пустого массива
        if (now == 0){          //если пустой массив равен 0 (день начнется с воскресенья), то объект будет состоять из 7 дней недели
            now = 7;
        }
        return now;             //вернуть объект
    }
    console.log(today(week));
    

}());











