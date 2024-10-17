let teste1=2,teste2=-2;

function dobro (x)
{
    if(0>x)
    console.log("Só é aceito números positivos maiores que zero");
    else
    {
        let z;
        z=x*2;
        return z
    }
}
console.log(dobro(teste1));
console.log(dobro(teste2));