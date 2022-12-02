function expressionsFunctionsArrowFunctions () {
    const calAge = birthYear => 2022-birthYear;
    const calAge2 = (birthYear) =>{return 2022-birthYear} // second way to make the same thing
    
    
    console.log(calAge(2002));
    console.log(calAge2(2002));    
};

const usingForIn = () =>{
    const frutas = ['Pera', 'uva', 'melao'];
    const pessoa = {
        nome: 'Carlos',
        sobrenome: 'Eduardo',
        idade: 25
    };
    for (let chave in pessoa) {
        console.log(pessoa[chave]);
    };
    for (let indice in frutas) {
        console.log(frutas[indice]);
    };
};

const usingForOf = () =>{ // somente com valores iteraveis
    const nome = 'Romario Bruno';
    for (let valor of nome){
        console.log(valor);
    };
};

const usingForEach = () => {
    const nome = ['Roberto', 'Carlos', 'Pericles'];
    nome.forEach((valor, indice, array)=>{
        console.log(valor, indice, array)
    });
};

console.log(usingForEach());
