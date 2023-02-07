function ValidateCPF(cpf){
    Object.defineProperty(this, 'cleanCpf', {
        enumerable: true,
        get: function(){
            return cpf.replace(/\D+/g, ''); // remove all things that aren't number
        }
    })
}

ValidateCPF.prototype.createDigit = function(cpfWithoutDigit){
    let cpfArray = Array.from(cpfWithoutDigit);
    let regressiveCount = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val)=>{
        ac += regressiveCount*Number(val);
        regressiveCount--;
        return ac;
    }, 0);
    const digit = 11-(total%11);
    return digit > 9 ? '0' : String(digit);
}

ValidateCPF.prototype.validity = function(){
    if(!this.cleanCpf) return false;
    if(this.cleanCpf.length !== 11) return false;
    if(this.verifySequence(this.cleanCpf)) return false;
    const cpfWithoutDigit = this.cleanCpf.slice(0, -2)
    const firstDigit = this.createDigit(cpfWithoutDigit);
    const secondDigit = this.createDigit(cpfWithoutDigit+firstDigit);
    const newCpf = cpfWithoutDigit+firstDigit+secondDigit;
    return newCpf === this.cleanCpf;
}
ValidateCPF.prototype.verifySequence = function(cpf){
    const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length);
    return sequence===this.cleanCpf;
}

const cpf = new ValidateCPF('705.484.450-52');
console.log(cpf.validity());