//DANI
let tabela = [];

const criarArray = () => {
    let coluna = [];
    for (let i=0; i<6; i++) {
        coluna.push(" ");
    }
    for (let j=0; j<7; j++) {
        tabela.push(coluna);
    }
    console.log(tabela);
}
criarArray();

const criarTabela = () => {
    const main = document.querySelector("main");
    const jogo = document.createElement("section");
    jogo.setAttribute("id", "jogo");
    main.appendChild(jogo);

    for(let i=0; i<7; i++) {
        const colunas = document.createElement("div");
        colunas.classList.add(`coluna${i}`);
        jogo.appendChild(colunas);
        
        // for(let j=0; j<6; j++) {
        // const celulas = document.createElement("div");
        // celulas.classList.add(`celula${j}`);
        // colunas.appendChild(celulas);
        //  } 
    }   
}
criarTabela();



//GABRIEL
/*
const criarTabela = () => {
    const body = document.querySelector('body')
    const tabela = document.createElement('div')
    body.appendChild(tabela)
        .setAttribute('id', 'tabela')
         
    for(let i = 0; i < 7; i++){
        const colunas = document.createElement('div')
        colunas.classList.add(`coluna${i+1}`)
                
        for(let j = 0; j < 6; j++){
            const linhas = document.createElement('div')
                
            colunas.appendChild(linhas)   
                .classList.add('linha') 
        }   tabela.appendChild(colunas)
                //.classList.add('linha')
    }   
}
criarTabela()
*/


//LUIZA
 const coluna0 = document.querySelector(".coluna0");
 const coluna1 = document.querySelector(".coluna1");
 const coluna2 = document.querySelector(".coluna2");
 const coluna3 = document.querySelector(".coluna3");
 const coluna4 = document.querySelector(".coluna4");
 const coluna5 = document.querySelector(".coluna5");
 const coluna6 = document.querySelector(".coluna6");

let indice = 0;


const criarDiscos = (evt) => {
    console.log(evt.currentTarget)
    const discoJogador1 = document.createElement("div");
    discoJogador1.classList.add("discoJogador1")
    if (evt.currentTarget.childElementCount >=0 && evt.currentTarget.childElementCount <6) {
        evt.currentTarget.appendChild(discoJogador1);
    }
    for(let i=0; i<tabela[indice].length; i++) {
         if (tabela[indice][i] === " ");
         tabela[indice][i] = "X";
         console.log (tabela);
    }
 }

 coluna0.addEventListener("click", criarDiscos);
 coluna1.addEventListener("click", criarDiscos);
 coluna2.addEventListener("click", criarDiscos);
 coluna3.addEventListener("click", criarDiscos);
 coluna4.addEventListener("click", criarDiscos);
 coluna5.addEventListener("click", criarDiscos);
 coluna6.addEventListener("click", criarDiscos);

