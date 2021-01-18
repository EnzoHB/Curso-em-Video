let vel = 78
let pais = 'eua'
let a = `Sua velocidade é ${vel}.`
if (vel > 60 ) {
    a += ' Você está acima do permitido.'
    if (pais.toLowerCase() == 'brasil') a += ' Multado'
    else a += ' Você é estrangeiro e por isso será deportado.' } 
console.log(a)