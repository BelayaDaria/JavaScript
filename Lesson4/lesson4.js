var number = +prompt (' Введите число от 0 до 999 ');
if(number <= 999) {
function splitToDigits(number) {
    var digits = {} ;
        digits.hundreds = Math.floor(number/100);
        digits.tens = (Math.floor(number/10))%10;
        digits.units = number%10;
        return digits;
}
var digits = splitToDigits(number);
console.log(digits);
}
else{
    alert(' Вы ввели число больше 999 ');
    var digits = {};
    console.log(digits);
}
