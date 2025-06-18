function ExibirMsg (msg) {
    console.log(msg)
}

ExibirMsg("Oi amiguinhos! bom dia!")
ExibirMsg("Estou com sono")

function ExibirMsg2 (msg) {
    let mensagem = msg
    return mensagem
}
function soma (n1,n2) {
    return n1+ n2
}
console.log(ExibirMsg2("Eu sou calvo!"))

console.log(soma(2, 6))

//Arrow Function ou Função Anônima
const Potencia = (n,p) => {
    return Math.pow(n , p)

}

console.log(Potencia(4,2))

//media >= 6,00 = Aprovado
//media < 6,00 || >= 4,00 = Recuperação
//media < 4,00 = Reprovado

const Media = (nota1,nota2) => {
    let NotaFinal = (nota1+nota2)/2
    if(NotaFinal < 4.00){
        return "Reprovado"
    }
    
    if(NotaFinal >= 6.00){
        return "Aprovado"
    }

    return "Recuperação"
}

console.log(Media(NotaFinal))
console.log(Media(6,4))