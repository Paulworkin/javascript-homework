console.log('Задание №1');
let parallelepiped, height, length1, width1, mm, example;
parallelepiped ='S parallelepiped = ';
height = 10;
length1 = 5;
width1 = 3;
example = 2;
mm = " сm2";
console.log(parallelepiped += example * ((height * length1) + (length1 * width1) + (height * width1)) + mm);
console.log(height > width1);
result = (width1 >= height) ? "Ширина больше Высоты" :   "Высота больше";
console.log(result);

console.log('Задание №2');
let sotka, width2, length2, m2, plot;
plot = "S uchastka = ";
sotka = 10 * 100;
width2 = 15;
length2 = 25;
m2 = ' m2';
result = plot += sotka % (width2*length2) + m2;
console.log(result);

console.log('Задание №3');
let ellipse, a, b, сm2;
ellipse = "S oval ring = ";
a = 15 * 100;
b = 600;
сm2 = ' cm2';
result = ellipse += a - b + сm2;
console.log(result);

console.log('Задание №4');
let x, y, w;
x = 6;
y = 5;
w = 0;
(x > y) ? w = x : w;
(x > y) ? x = y : x;
(x == y) ? y = w : x;
console.log('x=' + x, 'y=' + y);

console.log('Задание №5');
let сhislo1 = 8.5, сhislo2 = 11.45;
x = Math.abs(сhislo1-10);
y = Math.abs(сhislo2-10);
x > y ? console.log('Ближе к 10:', сhislo1) : console.log('Ближе к 10:', сhislo2);

