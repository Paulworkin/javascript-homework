(function () {
    'use strict';

console.log ('Задание 1');
console.log('Написать функцию сравнения двух массивов. Функция принимает на вход два массива, ' +
    'сравнивает их и возвращает true, если массивы равны и false, если не равны');

    function comparison1 (arr1, arr2) {
        if (arr1.length !== arr2.length) {
            console.log('Длина массивов не равна --' + false);
            return false;
        }

        if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
            console.log('Это не массив');
            return false;
        }

        return true;
    }
    let arr3 = [29, 18, 3];
    let arr4 = [5,8,10];

   console.log(comparison1(arr3,arr4));


}());





























