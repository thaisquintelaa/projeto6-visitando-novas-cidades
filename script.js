let nomeTurista = prompt("Qual é seu nome turista?")

let cidadesVisitadas = []
let cidadesNumber = 0

let visitaCidade = prompt("Você visitou alguma cidade? ( s/n )")

while (visitaCidade.toLowerCase() === 's') {
    let nomecidade = prompt("Qual é o nome da cidade visitada?")

    cidadesVisitadas.push(nomecidade)
    cidadesNumber++

    visitaCidade = prompt("Você visitou alguma outra cidade? ( s/n )")
}

alert(`Turista: ${nomeTurista}`)
alert(`Quantidade de cidades visitadas: ${cidadesNumber}`)

if (cidadesNumber > 0) {
        alert(`
            Cidades visitadas:
            - ${cidadesVisitadas}
            `
        )
} else {
    alert(`Nenhuma cidade visitada.`)
}