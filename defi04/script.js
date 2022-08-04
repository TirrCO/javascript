function tabuar() {
    var n = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if (n.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        var nreal = Number(n.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${nreal} x ${c} = ${nreal * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}