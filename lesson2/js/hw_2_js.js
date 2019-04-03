console.log('Задание 1.');
console.log('Дан массив целых чисел. Числа не отсортированы и могут повторяться. ' +
    'Необходимо найти в данном массиве такие два числа M и N, чтобы их сумма была равна 7. ' +
    'Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд' +
    ' Для решения достаточно найти хотя бы одну подходящую пару чисел M и N. Подумайте над оптимальным вариантом поиска.');

let summa = 7;
let arr = [1, 2, 3, 11, 5, 9, 7, 8, 4, 0];

 for (let m= 0; m < arr.length; m++) {
     for (let n=0; n< arr.length; n++)  {
         if (arr[m] + arr[n] === summa) {
            console.log(arr[m], arr[n]);
         }
     }
}

console.log('Задание 2.');
console.log('Вывести через console.log все числа от 1 до 100, с двумя исключениями. ' +
    'Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, а для чисел, делящихся на 5 (но не на 3) – ‘Five’.' +
    ' Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.');

let del1 = 3;
let del2 = 5;
let del3 = 0;

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
    40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,
    78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
for (let t1= 0; t1 < arr2.length; t1++) {
    if (arr2[t1] % del1 === del3 && arr2[t1] % del2 === del3) {
        console.log(arr2[t1] + " ThreeFive");
    }

    else if (arr2[t1] % del1 === del3) {
        console.log(arr2[t1] + " Three");
    }

      else if (arr2[t1] % del2 === del3) {
            console.log(arr2[t1] + " Five");
        }
}

console.log('Задание 3.');
console.log('Даны три числа. Определите, можно ли из отрезков с такими длинами составить треугольник. ' +
    'Определите вид треугольника (прямоугольный, тупоугольный, остроугольный), если он существует.');

let a1 = 12;
let b1 = 20;
let c1 = 15;

if (a1+b1 === c1) {
    console.log('треугольник нельзя составить');
}
    else if (a1+b1 < c1) {
        console.log('треугольник нельзя составить');
    }
    else if (a1+b1 > c1) {
        console.log('треугольник можно составить');
    }

if (c1*c1 === (b1*b1) + (a1*a1)) {
    console.log('Вид треугольника = прямоугольный');
}
    else if (c1*c1 < (b1*b1) + (a1*a1)) {
        console.log('Вид треугольника = тупоугольный');
    }
    else if (c1*c1 > (b1*b1) + (a1*a1)) {
        console.log('Вид треугольника = остроугольный');
    }
    else {console.log("Треугольник не существует")
    }


console.log('Задание 4.4');
console.log('Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128.');

let abc = 2;
for (let i = 0; i < 20; i++) {
    console.log(abc);
    abc = abc*2;
}

//решил с подсказками
console.log('Задание 5');
console.log('Задать количество тарелок и количество моющего средства. ' +
    'Моющее средство расходуется из расчета 0,5 на одну тарелку. ' +
    'В цикле выводить сколько моющего средства осталось после мытья каждой тарелки ' +
    'В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.');

let tarelok = 20;
let sredstvo = 5;
let ostalos_tarelok;
for (i=1; i<=tarelok; i++){
    if (sredstvo > 0) {
        sredstvo = sredstvo - 0.5;
        console.log("Средства осталось:" + sredstvo);
        console.log("Мытье тарелки:" + i);
        ostalos_tarelok = tarelok - i;
    }
}
console.log("Моющее средство закончилось, осталось помыть: "+ostatkitarelok+" тарелок");










































