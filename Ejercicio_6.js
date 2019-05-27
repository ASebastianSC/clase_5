const Dado1 = parseFloat(9)
const Dado2 = parseFloat(10)
const Dado3 = parseFloat(7)

if (Dado1 === Dado2 || Dado2 === Dado3 || Dado3 === Dado1) {
    console.log("Ganaste!")
} else {
    console.log("Haz fracasado")
}