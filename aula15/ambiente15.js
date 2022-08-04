let num = [5, 8, 2, 9, 3]
num.push(1)
console.log(`O nosso vetor é o ${num}.`)
console.log(`Há ${num.length} posições nele.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
/*
for (let c = 0; c<num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
*/

for (let c in num) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}