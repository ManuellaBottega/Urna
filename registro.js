let votaram = []

function registro (prompt, menu, numerosReivindicados, votos) {
    const voterID = Date.now()
    if (votaram.includes(voterID)) {
        console.log('Erro. Você já registrou seu voto.');
        console.log ('\nPressione enter para retornar ao menu.')
        let voltarMenu = prompt ('')
        if (voltarMenu == '') {
            menu()
        }
    }

    voto = prompt ('Digite o numero do candidato que deseja votar, ou digite nulo ou branco: ')
    if (voto === 'nulo') {
        console.log('voto registrado com sucesso.')
        votaram.push(voterID)
        votos.push(voto)
    } else if (voto === 'branco') {
        console.log('voto registrado com sucesso.')
        votaram.push(voterID)
        votos.push(voto)
    } else if (numerosReivindicados.includes(voto)) {
        console.log('voto registrado com sucesso.')
        votaram.push(voterID)
        votos.push(voto)
    } else {
        console.log('voto invalido.')
        registro (prompt, menu, numerosReivindicados, votos)
    }

    console.log ('\nPressione enter para retornar ao menu.')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu()
    }
}

module.exports = registro