let idade = 60
console.log(`Você têm ${idade}`)
if (idade < 16) console.log(`Não vota`)
else if (idade < 18 || idade >= 60) console.log('Voto Opcional')
else console.log(`Voto obrigatório`)