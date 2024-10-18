let teste1="arara",teste2="birdou",teste3="ovo",teste4="ave",teste5="RennEr",teste6="ReInIer";

function verificador(m)
{
    let x=m.toLowerCase();
    let y=(x.length)-1, z=x.split(""),temp,cont=0;
    let b=y;
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

        
    for(a=0;a<b;a++,b--)
        {
            if(z[a]==z[b])
                cont++;
        }
        
    }
    b++;
    if(cont==b) 
        {
              
        return "um palidromo"
        }
    else
    return "Não é um palindromo"
}
console.log("1.",verificador(teste1))
console.log("2.",verificador(teste2))
console.log("3.",verificador(teste3))
console.log("4.",verificador(teste4))
console.log("5.",verificador(teste5))
console.log("6.",verificador(teste6))
