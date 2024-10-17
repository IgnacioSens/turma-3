let teste1="arara",teste2="birdou",teste3="ovo",teste4="ave",teste5="renner";
function verificador(x)
{
    let y=(x.length)-1, z=x.split(""),temp,cont=0;
    let b=y;
    for(let a=0;a<y;a++,y--)
    {
        temp=z[a];
        z[a]=z[y];
        z[y]=temp;
    }
    z=z.join('');
    if(b%2==0)
    {
        for(a=0;a<b;a++,b--)
            {
                if(z[a]==z[b])
                    cont++;
            }
        if(cont==b)
            return "um palidromo"
    }
    else
    {
        b=b-1;
    for(a=0;a<b;a++,b--)
        {
            if(z[a]==z[b])
                cont++;
        }
    }
    if(cont==b/2) 
        {
        return "um palidromo",z
        }
    else
    return "Não é um palindromo"
}
console.log(verificador(teste1))
console.log(verificador(teste2))
console.log(verificador(teste3))
console.log(verificador(teste4))
console.log(verificador(teste5))
