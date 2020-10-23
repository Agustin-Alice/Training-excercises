function multi(integer){
    let resultado = integer
    if(integer%3 == 0){
        resultado = 'Fazz'
    }
    if(integer%5 == 0){
        resultado = resultado + 'Bizz'
    }
    if(integer%7 == 0){
        resultado = resultado + 'Barr'
    }
    if(integer === 0){
        resultado = integer
    }
    console.log(resultado)

}

module.exports ={
    multi
}