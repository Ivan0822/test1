// Cetvrti zadatak
/* 4. Задатак
Написати програм који исписује таблицу множења за 1 цифру
Бонус: За додатних 10% поена исписати таблицу множења за све цифре (1-9) */

let cifra = 5
let str1 = ''
let str2 = ''
let proizvod 
for (let i = 1; i <= 9; i++){
    proizvod = i * cifra
    console.log(`${cifra} * ${i} je: ${proizvod}`)
}


// Cela tablica mnozenja
console.log('    1  2   3   4   5   6   7   8   9')
for (let i = 1; i <= 9; i++){
    let str = `${i}|`
    for (let j = 1; j <= 9; j++){
        str +=`  ${i * j}`
    }
    console.log(str)
}

