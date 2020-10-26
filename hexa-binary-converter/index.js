const {hexa,bina} = require('./lib/hexa-binary-converter.js')

//prueba function de bina a hexa
console.log(bina('1111'))
console.log(bina('0001'))
console.log(bina('10011001'))
console.log(bina('1000100'))

//prueba function de hexa a binario

console.log(hexa('FAFAFA'))
console.log(hexa('F'))
console.log(hexa('0'))
console.log(hexa('AED'))