function carregar() {
    var txt = window.document.getElementById('txt')
    var img = window.document.getElementById('mini')

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    txt.innerHTML = `Agora são ${hora}h e ${min}min.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#FC9B2C'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = 'lightskyblue'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = 'slategray'
    }
}
