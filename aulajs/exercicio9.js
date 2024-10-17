let emailTeste1="ignacioa785@gmail.com", emailTeste2="gmail.com.br@ignacioa785", emailTeste3="ignacioa785@gmailcom", emailTeste4="ignacioa785@batata.com", emailTeste5="ignacioa785@gmail.com.br", emailTeste6="ignacioa785gmail.com";

function verificador(x)
{
    let i,j=x.length,z="@",y,y2,y3=["gmail","hotmail","yahoo"],a;
    for(i=0;i<j-1;i++)
    {
        if(z==x[i])
        {
        console.log("@ encontrado");
        y=x.split("@");
        y2=y[1].split(".");
        for(a=0;a<3;a++)
            {
                if(y2[0]==y3[a])
                {
                    console.log("e-mail encontrado no banco de dados")
                    if(y2=y[1].split("."))
                    {
                         if(y2[1]=="com")
                            {
                             return "e-mail válido"
                            }
                    }
                    
                }
                else
                    {
                        console.log("email inválido ou não encontrado");
                        return "e-mail inválido"
                    }
            }
                    console.log(". não encontrado");
                    return "e-mail inválido"
        }
    }
    console.log("@ não encontrado");
    return "e-mail inválido"
}
console.log("Teste 1:",verificador(emailTeste1));
console.log("");
console.log("Teste 2:",verificador(emailTeste2));
console.log("");
console.log("Teste 3:",verificador(emailTeste3));
console.log("");
console.log("Teste 4:",verificador(emailTeste4));
console.log("");
console.log("Teste 5:",verificador(emailTeste5));
console.log("");
console.log("Teste 6:",verificador(emailTeste6));
