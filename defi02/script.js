function descobrir() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resp = document.querySelector('div#resp')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'um homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 29) {
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gen = 'uma mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 29) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        resp.style.textAlign = 'center'
        resp.innerHTML = `Detectamos ${gen} com ${idade} ano${(idade>1)?'s':''}.`
        resp.appendChild(img)
    }
}