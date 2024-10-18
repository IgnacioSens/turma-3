let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function somaImpar(x) {
    let z = x.length, a = 0, b = []
    for (let i = 0; i < z; i++) {
        if (x[i] % 2 != 0) {
            b[a] = x[i]
            a++
        }
    }
    return b

}
console.log(somaImpar(numeros))