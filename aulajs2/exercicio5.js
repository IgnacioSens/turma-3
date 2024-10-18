let cidades=["Sorocaba","Piedade","Votorantim"],cidadeNova="itapetininga",cidadeNova2="São Paulo",cidadeNova3="Rio de Janeiro",cidadeNova4="Salvador";
function substituir(array,cidadeNova){
    array[2]=array[1]
    array[1]=array[0]
    array[0]=cidadeNova
    return array
}
console.log(substituir(cidades,cidadeNova))
console.log(substituir(cidades,cidadeNova2))
console.log(substituir(cidades,cidadeNova3))
console.log(substituir(cidades,cidadeNova4))