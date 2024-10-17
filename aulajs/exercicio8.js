let nome="Ignacio Antonio Gama Sens";
function contar(x)
{   
    let vogais=['a','e','i','o','u'],i,j,cont=0;
    for(i=0;i<x.length;i++)
    {
        for(j=0;j<5;j++)
        {
            if(vogais[j]==x[i])
            cont++;
        }
    }
    return cont
}
console.log("A quantidade de vogais minusculas é",(contar(nome)));