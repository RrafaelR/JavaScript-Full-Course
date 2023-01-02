const errorHandling = () => {
    const sum = (x,y) => {
        if(
            typeof x !== 'number' ||
            typeof y !== 'number'
        ) {
            throw new Error('x or y isn´t a number');
        }
    
        return x+y;
    };
    
    try {
        console.log(sum(1,2));
        console.log(sum('1',2));
    } catch(error){
        console.log(error);
        console.log('Some wrong thing happend with sum function');
    } 
};

const completeErrorHandling = () => {
    try{
        console.log("Abrir o arquivo");
        console.log("manipulando o arquivo");
        console.log(a);
    }catch (e){
        console.log(e);
    } finally{
        console.log("Sempre fecha o arquivo");
    }
};

const returnHour = (data) => {
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperado uma instancia do tipo Date.");
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};
try {
    const hora = returnHour(11);
    console.log(hora);
} catch (e){
    console.log(e);
} finally {
    console.log('Have a good day!!');
};