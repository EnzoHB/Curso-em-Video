let agora = new Date()
let horas = agora.getHours()
let minutos = agora.getMinutes()

if (minutos < 10) minutos = '0' + minutos
if (horas < 10) hora = '0' + horas

console.log(`Agora são exatamente ${horas}:${minutos}`)

if (horas < 12 ) console.log(`Bom Dia!`)
else if (horas <=18) console.log('Boa Tarde!')
else console.log('Boa Noite!')