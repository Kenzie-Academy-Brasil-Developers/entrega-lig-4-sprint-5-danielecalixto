//DANI
const criarArray = () => {
    let tabela = [];
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
        colunas.classList.add(`coluna${i+1}`);
        jogo.appendChild(colunas);
        for(let j=0; j<6; j++) {
            const celulas = document.createElement("div");
            celulas.classList.add(`celula${j+1}`);
            colunas.appendChild(celulas);
        } 
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
}

function vencedor(jogador) {
    vitoria(jogador);
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
 const coluna1 = document.querySelector(".coluna1");
 const coluna2 = document.querySelector(".coluna2");
 const coluna3 = document.querySelector(".coluna3");
 const coluna4 = document.querySelector(".coluna4");
 const coluna5 = document.querySelector(".coluna5");
 const coluna6 = document.querySelector(".coluna6");

 const criarDiscos = () => {
    discos1 = coluna1.lastChild;
    discos1.style.backgroundColor = "yellow";
    discos2 = coluna2.lastChild;
    discos2.style.backgroundColor = "yellow";
    discos3 = coluna3.lastChild;
    discos3.style.backgroundColor = "yellow";
    discos4 = coluna4.lastChild;
    discos4.style.backgroundColor = "yellow";
    discos5 = coluna5.lastChild;
    discos5.style.backgroundColor = "yellow";
    discos6 = coluna6.lastChild;
    discos6.style.backgroundColor = "yellow";
 }

 coluna1.addEventListener("click", criarDiscos);
 coluna2.addEventListener("click", criarDiscos);
 coluna2.addEventListener("click", criarDiscos);
 coluna3.addEventListener("click", criarDiscos);
 coluna4.addEventListener("click", criarDiscos);
 coluna5.addEventListener("click", criarDiscos);


 