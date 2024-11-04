// var soma = document.querySelector('#btn')
// function mediar(){
// 	a = Number(document.getElementById('n1').value)
// 	b = Number(document.getElementById('n2').value)
//  c = Number(document.getElementById('n3').value)
//  d = Number(document.getElementById('n4').value)

//     soma = a + b + c + d
//     media=soma/4

// 	resp.innerText = A media dos valores = ${media}
// }
// soma.addEventListener('click',mediar)

// speaknow=['haunted', 'speaknow', 'storyofus']

// function aparecer(){
 
//     palavra = document.getElementById('n1')

//     if(palavra==='speaknow'){
//         document.write(${speaknow})
//     }
// }

// //-------------------------EXEMPLO DO CHAT GPT----------------------------

const musicas = ["Fearless", "Fifteen", "Love Story", "Hey Stephen", "White Horse"]

//     album1989: ["Welcome to New York", "Blank Space", "Style", "Out of the Woods", "Shake It Off"],
//     reputation: ["...Ready For It?", "End Game", "I Did Something Bad", "Delicate", "Look What You Made Me Do"]
// };

inputmusica = document.getElementById("inputmusica");
resultado = document.getElementById("resultado");

function adicionarMusica() {




}

addEventListener('keydown',(event) => {
	if(event.key =='Enter'){  


      
    }
})



const palavras = ["maçã", "banana", "laranja", "uva"];

// Seleciona o campo de entrada e o parágrafo de resultado
const inputPalavra = document.getElementById("inputPalavra");
const resultado = document.getElementById("resultado");

// Função que verifica se a palavra está no array e exibe na tela
inputPalavra.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const palavraDigitada = inputPalavra.value.toLowerCase();

        // Exibe a palavra apenas se estiver no array
        if (palavras.includes(palavraDigitada)) {
            resultado.textContent = palavraDigitada;
        } else {
            resultado.textContent = ""; // Não exibe nada se a palavra não estiver no array
        }

        // Limpa o campo de entrada
        inputPalavra.value = "";
    }
});


// const musicasAdicionadas = {
//     fearless: [],
//     album1989: [],
//     reputation: []
// };

// function adicionarMusica() {
//     const inputMusica = document.getElementById("inputMusica").value.trim();

//     if (inputMusica === "") return;

//     for (const album in musicas) {
//         if (musicas[album].includes(inputMusica) && !musicasAdicionadas[album].includes(inputMusica)) {
//             const tabela = document.getElementById(album).getElementsByTagName("tbody")[0];
//             const novaLinha = tabela.insertRow();
//             const novaCelula = novaLinha.insertCell(0);
//             novaCelula.textContent = inputMusica;

//             // Adiciona a música ao array de músicas já digitadas
//             musicasAdicionadas[album].push(inputMusica);

//             // Limpa o campo de input
//             document.getElementById("inputMusica").value = '';
//             return;
//         }
//     }
// }


// // //---------------------------------------------------------------------------------------------------------
// // //---------MINHAS OPINIOES DE COMO PODERIA FUNCIONAR---------


// // ASSIM COMO O CHATY FEZ, CRIAR UM OBJETO COM AS MUSICAS EXISTENTES

// // CRIAR UM IF CASO A MUSICA APAREÇA
// // NAO SEI COMO FAZER ISSO, SE FAÇO PELO ARRAY, MAS AÍ COMO IDENTIFICAR O NOME IDENTICO?
// // PRINTAR COM UM DOCUMENT WRITE OU UM TEXT CONTENT SLA
// // COMO PRINTAR DENTRO DE UMA TABLE SEM PRECISAR CRIAR UM ID ESPECIFICO PARA CADA CELULA?

// // POSSO FAZER IGUAL AO CHATY E ORGANIZAR AS MUSICAS INSERIDAS EM UMA LISTA

// // CRIAR UM ID ESPECIFICO PARA CADA CELULA DARIA MUITO TRABALHO...
// // SERÁ AQUE PRECISA MESMO CRIAR O OBJETO VAZIO IGUAL O CHATY FEZ?