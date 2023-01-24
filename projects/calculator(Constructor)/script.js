function CreateCalculator(){
         this.display = document.querySelector('.display');

        this.start = ()=>{this.buttonClick()};

        this.resolveMathProblem = ()=>{
            let result = this.display.value;
            try{
                result = eval(result);
                if(!result){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(result);

            }catch(e){
                alert('Conta inválida');
                return;
            }
        };

        this.clearDisplay=()=>{
            this.display.value = '';
        };

        this.deleteOne= ()=>{
            this.display.value = this.display.value.slice(0, -1);
        };

        this.buttonClick= ()=>{
            document.addEventListener('click', (e)=>{
                // with arrow function, this is locked in calculator, the element caller
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnForDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')){
                    this.resolveMathProblem();
                }
            });
        };
        
        this.btnForDisplay = (valor)=>{
            this.display.value += valor;
        };
};

const calculator = new CreateCalculator();
calculator.start();