let numeros=[10,20,30,40,50];
function soma(x)
{
   let z=x.length,a=0
    
   for(let i=0;i<z;i++)
   {
        a=a+x[i]
   }
   return a
}
console.log(soma(numeros))