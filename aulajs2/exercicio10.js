const aluno1={
    nome:"Ignacio",
    idade:20,
    curso:" Engenharia",
    matricula:" 247653",
}
const aluno2={
    nome:"Joao",
    idade:18,
    curso:" Engenharia",
    matricula:" 242081",
}
const aluno3={
    nome:"Andre",
    idade:17,
    curso:" Engenharia",
    matricula:" 240291",
}
const aluno4={
    nome:"Tayran",
    idade:19,
    curso:" Engenharia",
    matricula:" 248923",
}
const aluno5={
    nome:"Borboleto",
    idade:15,
    curso:" Engenharia",
    matricula:" 247657",
}
const aluno6={
    nome:"Isadora",
    idade:16,
    curso:" Engenharia",
    matricula:" 243479",
}
let turma=[aluno1,aluno2,aluno3,aluno4,aluno5,aluno6]

function alunosMaior(array){
    let resultado=[],indice=0
    for(let i=0;i<array.length;i++)
    {
    if(array[i].idade>=18)
    {
     resultado[indice]=array[i]
     console.log(resultado[indice])   
     indice++
    }
    }
        
    return resultado 
}
console.log(alunosMaior(turma))