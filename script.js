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

//DANI VITORIA

function vitoria(jog) {
    let resultado = false;
    
    for (let i=0; i<7; i++) {
        for (let j=0; j<3; j++) {
            if (tabela[i][j]==jog && tabela[i][j+1]==jog && tabela[i][j+2]==jog && tabela[i][j+3]==jog) {
                //VITORIA VERTICAL
                resultado = true;
            }
        }
    }
    switch (resultado) {
        case true:
            break;
        case false:
            for (let i=0; i<4; i++) {
                for (let j=0; j<6; j++) {
                    if (tabela[i][j]==jog && tabela[i+1][j]==jog && tabela[i+2][j]==jog && tabela[i+3][j]==jog) {
                        //VITORIA HORIZONTAL
                        resultado = true;
                    }
                }
            }
        case true:
            break;
        case false:
            for (let i=0; i<4; i++) {
                for (let j=0; j<3; j++) {
                    if (tabela[i][j]==jog && tabela[i+1][j+1]==jog && tabela[i+2][j+2]==jog && tabela[i+3][j+3]==jog) {
                        //VITORIA DIAGONAL
                        resultado = true;
                    }
                }
            }
        case true:
            break;
        case false:
            for (let i=6; i>2; i--) {
                for (let j=5; j>1; j--) {
                    if (tabela[i][j]==jog && tabela[i+1][j+1]==jog && tabela[i+2][j+2]==jog && tabela[i+3][j+3]==jog) {
                        //VITORIA DIAGONAL INVERSA
                        resultado = true;
                    }
                }
            }
        }  
        return resultado  
}

function vencedor(jogador) {
    const section = document.querySelector('.secVitoria')
    const msg = document.createElement('p')
    if(vitoria(jogador) === true){
        msg.innerText = `Parabéns, ${jogador}. Você venceu!`
        section.appendChild(msg)
    };
    //Faz alguma coisa com o vencedor
}

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

let jogador = "X";
const criarDiscos = (evt) => {
    console.log(evt.currentTarget)
    const discoJogador1 = document.createElement("div");
    discoJogador1.classList.add("discoJogador1")
    if (evt.currentTarget.childElementCount >=0 && evt.currentTarget.childElementCount <6) {
        evt.currentTarget.appendChild(discoJogador1);
    }
    for(let i=0; i<tabela[indice].length; i++) {
         if (tabela[indice][i] === " ")
         tabela[indice][i] = jogador;
         console.log (tabela);
    }
    if(jogador === "X"){
        jogador = "Y";
    }
    else if(jogador === "Y"){
        jogador = "X";
    }
 }

 coluna0.addEventListener("click", criarDiscos);
 coluna1.addEventListener("click", criarDiscos);
 coluna2.addEventListener("click", criarDiscos);
 coluna3.addEventListener("click", criarDiscos);
 coluna4.addEventListener("click", criarDiscos);
 coluna5.addEventListener("click", criarDiscos);
 coluna6.addEventListener("click", criarDiscos);


 