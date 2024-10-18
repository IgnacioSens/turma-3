const aluno={
    nome:"Ignacio",
    idade:" 20",
    curso:" Engenharia",
    matricula:" 247653",

 mostraInformacoes : function(){
    return this.nome+this.idade+this.curso+this.matricula}
}


console.log(aluno.mostraInformacoes());
