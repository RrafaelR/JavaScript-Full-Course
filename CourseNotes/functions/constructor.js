// Constructor func -> object

function Pessoa (nome, sobrenome){
    //varibles creted in constructor are private;
    const id = 1234;
    const internMethod = () =>{
        console.log('It´s a private method');
    };
    //similar to Pessoa.nome = nome;
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.method = function (){
        console.log(this.nome + ' with a method');
    }
}

const p1 = new Pessoa('Rafael', 'Oliveira');
p1.method();