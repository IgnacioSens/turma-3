const produto={
    nome:"Lápis",
    preco:5,
    quantidade:10
}

function calcularTotal(preco,quantidade){
    return preco*quantidade

}
console.log(calcularTotal(produto.preco,produto.quantidade))