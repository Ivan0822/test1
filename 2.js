// Drugi zadatak

let n = 6



for (let i = 1; i <= n - 1; i++){
    let str = ''
    str = ' '.repeat(n - i) + '*'.repeat(i) + '*'.repeat(i - 1)
    console.log(str)
}
let sredina = '*'.repeat(n - 1) + ' ' + '*'.repeat(n - 1)
console.log(sredina)

for (let j = 1; j <= n - 1; j++){
    let str = ''
    str = ' '.repeat(j) + '*'.repeat(n - j) + '*'.repeat(n - j - 1)
    console.log(str)
}