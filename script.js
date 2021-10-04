//DANI


//LUIZA


//GABRIEL
const criarTabela = () => {
    const body = document.querySelector('body')
    const tabela = document.createElement('div')
    body.appendChild(tabela)
        .setAttribute('id', 'tabela')
         
    for(let i = 0; i < 6; i++){
        const linhas = document.createElement('div')
                
        for(let j = 0; j < 7; j++){
            const colunas = document.createElement('div')
                
            linhas.appendChild(colunas)   
                .classList.add('coluna') 
        }   tabela.appendChild(linhas)
                .classList.add('linha')
    }   
}
criarTabela()