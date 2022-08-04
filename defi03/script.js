function contar () {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var resp = document.querySelector('div#resp')

    var inicio = ini.value
    var final = fim.value
    var passo = pas.value

    if (inicio.length == 0 || final.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Faltam dados.')
    } else {
        resp.innerHTML = 'Contando: <br>'
        var i = Number(inicio)
        var f = Number(final)
        var p = Number(passo)
        if (p == 0 || p > f) {
            window.alert('Passo inválido.')
            p = 1
        }
        if (i < f) {
            // contagem progressiva
            for (var c = i; c <= f; c += p) {
                resp.innerHTML += `${c} &#x1F449; `
            }
        } else {
            // contagem regressiva
            for (var c = i; c >= f; c -= p) {
                resp.innerHTML += `${c} &#x1F449; `
            }
        }
        resp.innerHTML += '&#x1F3C1'
    }


}