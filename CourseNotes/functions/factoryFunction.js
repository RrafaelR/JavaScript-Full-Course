function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome: nome,
        sobrenome: sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        get imc(){
            return this.peso/(this.altura*this.altura);
        },
        
        altura: altura,
        peso: peso
    }
}

const p1 = criaPessoa('Rafael', 'Chagas', 1.83, 70);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Solange Maria Chagas';
console.log(p1.imc);
console.log(p1.nomeCompleto);