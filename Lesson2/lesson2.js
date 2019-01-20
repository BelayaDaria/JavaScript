/*Напишем первую игру — «Угадай число». Браузер будет загадывать случайное четырехзначное число, а мы будем отгадывать.
Попытки отгадать число будут идти через диалоговое окно — prompt. Браузер будет сообщать в ответ, больше или меньше загаданного наш ответ.
Алгоритм будет таким:
Браузер генерирует число и приглашает пользователя к игре.
Выводится окно запроса предположения.
Браузер проверяет число и возвращает результат.
Повторяем до тех пор, пока число не будет угадано.
Как только число угадано, браузер сбрасывает число попыток и генерирует новое число.
Пока не будем ничего выводить на страницу. И пока наш алгоритм далек от совершенства. Как только изучим новые возможности языка — сразу улучшим его.
*/
function createNum() {
    var num = Math.floor(Math.random() * (9999-1000 +1)) + 1000;  
       console.log(num);
   return num;
   }
   
   var browserNum = createNum();
   
   function askNum() {
     var numUser = +prompt (' Попробуйте угадать число ');
       return numUser; 
   }
   
   var userCreateNum = askNum();
   
   switch(browserNum){
       case (browserNum > userCreateNum):
       alert('ваше число меньше загаданного');
       case(browserNum !== userCreateNum && browserNum < userCreateNum):
       alert('ваше число больше загаданного'); 
   }
   
   function guessNum() {
   if (browserNum !== userCreateNum && browserNum > userCreateNum) {
       alert( ' ваше число меньше загаданного '); 
       askNum (userCreateNum);
       guessNum(browserNum);
         } else if ( browserNum !== userCreateNum && browserNum < userCreateNum) {
        alert(' ваше число больше загаданного '); 
         askNum (userCreateNum);
       guessNum(browserNum);
   } else if (browserNum === userCreateNum) {
        alert(' отличная игра! вы угадали! ');
       createNum();
     askNum();
      } else 
       askNum ();
   }
   guessNum(); 
   

/*Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
*/

var a = +prompt(' введите целое число ');
var b = +prompt(' введите второе целое число '); 
var minus = a - b;
var multiply = a*b;
var sum = a+b;
if(a > 0 && b > 0)
    alert(' разность между числами будет равна ' + minus) 
else if (a < 0, b < 0)
    alert(' произведение междучислами будет равно ' + multiply);
else 
    alert( ' сумма двух чисел равна ' + sum); 

/*Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/
var a = +prompt(' введите целое число от 1 до 15');
switch(a) {
    case 1:
        console.log ('1');
    case 2:
        console.log ('2'); 
    case 3:
        console.log ('3'); 
    case 4:
        console.log ('4'); 
    case 5:
        console.log ('5'); 
    case 6:
       console.log ('6'); 
    case 7:
       console.log ('7'); 
    case 8:
       console.log ('8'); 
    case 9:
       console.log ('9');
    case 10:
       console.log ('10');
    case 11:
       console.log ('11');
    case 12:
       console.log ('12');
    case 13:
       console.log ('13');
    case 14:
       console.log ('14');
    case 15:
       console.log ('15');
}
/*Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/
function minus (a, b) {
   return a - b;
}
minus1 = minus(6, 12);
alert(minus1);

function multiply (a, b) {
   return a * b;
}
multiply1 = multiply(6, 12);
alert(multiply1);

function sum (a, b) {
   return a + b;
}
sum1 = sum(6, 12);
alert(sum1);

function division (a, b) {
   return a / b;
}
division1 = division(6, 12);
alert(division1);


/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (применить switch).*/


function mathOperation(arg1, arg2, operation) {
  if (operation === '-') { 
    return (arg1 - arg2);
  } else if (operation === '+') {
    return (arg1 + arg2);
  } else if (operation === '*') {
    return (arg1 * arg2);
  } else if (operation === '/') {
    return (arg1 / arg2);
}
}

var arg1 = +prompt( 'введите первое ЦЕЛОЕ число' );
var arg2 = +prompt( 'введите второе ЦЕЛОЕ число' ); 
var operation = prompt ( ' введите знак, обозначающий действие, которое вы хотите произвести над числами: +, -, *, /' );
getRusult = mathOperation(arg1, arg2, operation);
switch(operation) {
    case '-':
        alert(getRusult);
        break;
    case '+':
        alert(getRusult);
        break;
    case '*':
        alert(getRusult);
        break;
    case '/':
        alert(getRusult);
        break;
}

/*С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.*/

function power(val, pow) {
       if (val>1)
    degree = Math.pow(val, pow);
    return degree;
}
 var val = +prompt(' введите число, которое хотите возвести в степень ');
 var pow = +prompt(' введите значение степени, в которую хотите возвести число ');
alert(power(val, pow));