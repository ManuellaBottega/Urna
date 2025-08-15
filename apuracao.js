function apuracao (menu, candidatos, votos) {
    let votosCandidatos = []
    let votosNulo = 0
    let votosBranco = 0

    for (let i = 0; i < candidatos.length; i ++) {
        for (let j = 0; j < votos.length; j ++) {
            if (candidatos[i] === votos[j]) {
                voto ++
            }
        }
        const votosCandidato = {
            candidato: candidatos[i].nome,
            voto,
        }
        votosCandidatos.push(votosCandidato)
    }
    votosCandidatos.forEach(votosCandidato => {
        console.log (`${votosCandidato.candidato}: ${votosCandidato.voto}`)
    });
}

module.exports = apuracao