// DOM objetos que permitem manipular os elementos da pagina HTML
// uma funcao pode executar outra passada por parametro

const func1 = () => {
    console.log("function 1");
}

const func2 = (func) =>{
    func();
}

func2(func1);

// function arguments, doesn't works for arrow func, only for declaretions using the word function
function func3(){
    console.log(arguments);
    console.log(arguments[2]);
}
func3(1,2,4,5,6,67,78,8);

//set default values for parameters
function func4(a, b = 5){
    console.log(a+b);
}
func4(2);
func4(2, 4);

// rest operator with functions (OBS: rest operator should be the last parameter)
const func5 = (par1, par2, ...parWithRest) => {
    console.log(par1, par2, parWithRest);
    //parWithRest receive all additional like arguments
}
func5(1,2,3,4,5,6,7,8);