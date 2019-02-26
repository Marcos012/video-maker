 const readline = require('readline-sync')
 
 start = () => {
    const conteudo = {}

    retornarTermoPesquisado = () => {
        return readline.question('Digite um termo para pesquisa: ')
    }

    retornarPrefixo = () => {
        const prefixos = ['Quem é', 'O que é', 'A historia de']
        const index = readline.keyInSelect(prefixos, 'Escolha uma opcao: ')
        const textoSelecionado = prefixos[index]
        return textoSelecionado;
        
    } 
    conteudo.pesquisarTermo = retornarTermoPesquisado()
    conteudo.prefixo = retornarPrefixo()
    console.log(conteudo);
 }

 start()