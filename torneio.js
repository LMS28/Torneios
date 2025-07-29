const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function Menu() {

    console.log(`------ Torneios -------
    
    1 - Adicionar torneios
    2 - Listar torneios
    3 - Registrar partidas
    4 - Listar partidas
    5 - Filtrar torneios por jogo
    6 - Remover torneios
    7 - Sair
------------------------------------------`)
}

rl.question("Escolha uma das opções: ", (input1) => {

    switch (input1) {
        case '1':
            adicionarTorneio();
            
            break;
        case '2':
            listarTorneio();

            break;

        case '3':
            registrarPartidas();

            break;

        case '4':
            listarPartidas();

            break;

        case '5':
            filtrarTorneio();

            break;

        case '6':
            removerTorneios();

            break;

        case '7':
            console.log("Saindo...")
            rl.close()

        default:
            console.log("Escolha uma opção válida!")
            Menu()

            break;
    }
})

let torneios = []

let nomes = []

Menu()
function adicionarTorneio() {

    rl.question("Digite o nome do torneio: ", (torneio) => {
    rl.question("Digite o jogo: ", (jogo) => {
    rl.question("Digite a data do torneio: ", (data) => {
    rl.question("Digite o nome do participante: ", (nome) => {

        torneios.push({
            torneio,
            jogo,
            data,
        })

        nomes.push({
            nome

        })
        console.log("O torneio foi adicionado coom sucesso!")
        Menu()
    })
    })
    })
    })
 
}

function listarTorneio() {

    if (torneios.length === 0) {
        console.log("Não existe torneios cadastrados!")
        Menu()
    }

    console.log("-------- Torneios -------")
    torneios.forEach((torneios, index) => {
        console.log(`${index + 1} Torneio: ${torneios.torneio} Jogo: ${torneios.jogo} Data: ${torneios.data} total participantes: ${nomes.length}`)

    }
)
}