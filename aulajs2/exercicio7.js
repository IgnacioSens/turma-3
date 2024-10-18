let numeros=[10,3,5,20,28,3,8,10]

function maior(array){
    let maior=0
    for(let i=0;i<array.length;i++)
    {
        if(maior<array[i])
        {
            maior=array[i]
        }
    }
    return maior
}
console.log(maior(numeros))