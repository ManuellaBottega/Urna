function cadastro (prompt, menu, candidatos, numerosReivindicados){
    let nome = prompt('Digite o nome do candidato: ')
    let nomeCompleto
    if (nome.trim() === '') {
        console.log('Erro! Nome invalido.')
        cadastro(prompt, menu, candidatos, numerosReivindicados)
    } else {
        let sobrenome = prompt('Digite o sobrenome do candidato: ')
        if (sobrenome.trim() === '') {
            console.log('Erro! Nome invalido.')
            cadastro(prompt, menu, candidatos, numerosReivindicados)
        } else {
            nomeCompleto = nome + ' ' + sobrenome
        }
    }

    let numeroValido
    let numero = prompt('Digite o numero de votação do candidato: ')
    if (isNaN(numero) || numero.trim() === '') {
        console.log('Erro! Numero invalido.')
        cadastro(prompt, menu, candidatos, numerosReivindicados)
    } else if (numerosReivindicados.includes(numero)) {
        console.log('Erro! Esse numero já foi reivindicado por outro candidato.')
        cadastro(prompt, menu, candidatos, numerosReivindicados)
    } else {
        numerosReivindicados.push(numero)
        numeroValido = numero
    }

    let partido = prompt('Digite partido do candidato: ')
    if (partido.trim() === '') {
        console.log('Erro! partido invalido.')
        cadastro(prompt, menu, candidatos, numerosReivindicados)
    }
    let sigla = prompt('Digite a sigla do partido: ')
    if (sigla.trim() === '') {
        console.log('Erro! Nome invalido.')
        cadastro(prompt, menu, candidatos, numerosReivindicados)
    }

    const candidato = {
        nomeCompleto,
        numeroValido,
        partido,
        sigla,
        ID: Date.now(),
    }

    candidatos.push(candidato)

    console.log ('\nPressione enter para retornar ao menu, ou s para adicionar outro candidato.')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu()
    } else {
        cadastro(prompt, menu, candidatos, numerosReivindicados)
    }

 }

 module.exports = cadastro