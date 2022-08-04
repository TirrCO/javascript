function contar () {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var resp = document.querySelector('div#resp')

    var inicio = Number(ini.value)
    var final = Number(fim.value)
    var passo = Number(pas.value)

    while (inicio <= final) {
        resp.innerHTML = `${inicio} &#x1F449; `
        inicio = inicio + passo
    }
}