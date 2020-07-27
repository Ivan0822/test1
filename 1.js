// Prvi zadatak
// Количина (број пића)
// Цена једног пића
// Број година муштерије
// 1. Број година дељив са 7 (15% попуста)
// 2. Број година дељив са 11 (25% попуста)

let kolicina = 5
let cenaPoKomadu = 20
let godine = 28
let racun = cenaPoKomadu * kolicina

if (kolicina > 0 && cenaPoKomadu > 0 && godine >= 0){
    if (godine >= 18){
        if (godine % 7 === 0){
            racun = racun * 0.85
            console.log(`Racun je ${racun}rsd.`)
        }
        else if (godine % 11 === 0){
            racun = racun * 0.75
            console.log(`Racun je ${racun}rsd.`)
        }
        else{
            console.log(`Racun je ${racun}rsd.`)
        }
    }
    else{
        console.log('Nemate dovoljno godina.')
    }
}
else {
    console.log('Unesite validne podatke.')
}