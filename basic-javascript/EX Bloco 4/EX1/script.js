function load() {
    let msg = document.getElementById('data')
    let img = document.getElementById('dayhour')
    let title = document.getElementsByTagName['h1']
        let data = new Date
        let hora = data.getHours()
        msg.innerHTML = `Agora são ${hora}  horas`
        
    if (hora >= 0 && hora < 12) { 
        img.src = 'Imagens/png/manha.png'
        title = `Bom Dia!`
        document.body.style.background =  'rgb(49, 181, 221)'
    }
    else if (hora <= 18) {
        img.src = 'Imagens/png/tarde.png'
        title = `Boa Tarde`
        document.body.style.background = 'rgb(160, 134, 63)'
    }
    else {
        img.src = 'Imagens/png/noite.png'
        title = `Boa Tarde`
        document.body.style.background = 'rgba(17, 13, 39, 0.644)'
    }
}
