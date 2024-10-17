let nomeCompleto="Ignacio Antonio Gama Sens";
console.log("4.Programa recebeu Ignacio Antonio Gama Sens, para transformar em e-mail");
let nomeCompletom=nomeCompleto.toLocaleLowerCase();
const array=nomeCompletom.split(" ");

function email(x)
{
    let array;
    array=x.length;
    return x[0]+"."+x[array-1]+"@facens.com.br"
}

console.log(email(array));