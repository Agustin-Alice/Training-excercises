    
    const binario = ['0000','0001','0010','0011','0100','0101','0110','0111','1000','1001','1010','1011','1100','1101','1110','1111']
    const hexadecimal = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

function hexa(string){
    let resultado = []
    let array = Array.from(string)
    let contador = 0
     for(let cont = 0;contador<array.length;cont++){
            if(hexadecimal[cont] === array[contador]){
                resultado.push(binario[cont])
                contador++
                cont = 0;
            }  
        }  
resultado.join('')
}



function bina(string){
    let resultado = []
    let contador = 0
    let array = []

    for(let x=0;string != 'listo';x++){

        if(string.length>=4){

            array.push(string.substr(string.length-4, string.length))
            string = string.substr(0,string.length-4)
        }

        else if(string.length == 0){
            string = 'listo'
        }    

        else{string = string.padStart(4,'0');
        array.push(string.substr(string.length-4, string.length))    
        string = 'listo'}
    }
    
    for(let cont = 0;contador<array.length;cont++){
        
        if(binario[cont] === array[contador]){
            
            resultado.push(hexadecimal[cont])
            contador++
            cont = 0;
            
        }  
    }

resultado.join('')
}



module.exports = {
    hexa,
    bina
}