const prompt = require ('prompt-sync')()

const cadastro = require ('./cadastro')
const registro = require ('./registro')
const apuracao = require ('./apuracao')

let candidatos = []
let numerosReivindicados = []
let votos = []

function menu () {
    console.log(`
        ----- URNA -----
        1. Cadastrar candidato
        2. Registrar voto
        3. Vizualizar resultados e sair 
    `)

    let escolha = prompt('Digite a opção escolhida: ')
    switch (escolha) {
        case '1':
            cadastro(prompt, menu, candidatos, numerosReivindicados)
            break
        case '2':
            registro(prompt, menu, numerosReivindicados, votos)
            break
        case '3':
            apuracao(menu, candidatos, votos)
            console.log('Obrigado por usar nosso sistema de consultas. Até mais!')
            break
        default:
            console.log('Esta opção é inválida, tente novamente!\n')
            menu()
    }
}

menu()