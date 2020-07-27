// Treci zadatak
/* 3. Задатак
Написати програм који исписује збир бројева дељивих са 3, и производ бројева који нису дељиви
са 3,а јесу са 7 (Између K и N, укључујући њих)
Напомена: K може да буде веће од N */

let K = 35
let N = 35
let zbir = 0
let proizvod = 1

if (K > N){
    let tmp = K
    K = N
    N = tmp
}

while (K <= N){
    if (K % 3 === 0){
        zbir += K
    }
    else if (K % 3 !== 0 && K % 7 === 0){
        proizvod *= K
    }
    K++
}
console.log(`Zbir je ${zbir}`)
console.log(`Proizvod je ${proizvod}`)


