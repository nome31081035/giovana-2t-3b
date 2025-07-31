const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o nome do criador do Minecraft?",
        alternativas: [
            {
                texto: "Markus Persson",
                afirmacao: "Acertou"
            },
            {
                texto: "Herobrine Steven",
                afirmacao: "Errou"
            },
            {
                texto: "Shigeru Miyamoto",
                afirmacao: "Errou"
            },
            {
                texto: "Scoot Cawthon",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Em que ano o jogo foi criado?",
        alternativas: [
            {
                texto: "2010",
                afirmacao: "Errou"
            },
            {
                texto: "2011",
                afirmacao: "Errou"
            },
            {
                texto: "2009",
                afirmacao: "Acertou"
            },
            {
                texto: "2008",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Quais são os personagens principais do Minecraft?",
        alternativas: [
            {
                texto: "Fat e Thin",
                afirmacao: "Errou"
            },
            {
                texto: "Steve e Alex",
                afirmacao: "Acertou"
            },
            {
                texto: "Notch e Jeb",
                afirmacao: "Errou"
            },
            {
                texto: "Steve e Andy",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Qual o maior medo do Creeper?",
        alternativas: [
            {
                texto: "Felinos",
                afirmacao: "Acertou"
            },
            {
                texto: "Cogumelos",
                afirmacao: "Errou"
            },
            {
                texto: "Água",
                afirmacao: "Errou"
            },
            {
                texto: "Portal o Nether",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "O que acontece se renomear uma ovelha para jeb_? ",
        alternativas: [
            {
                texto: "Ela ataca",
                afirmacao: "Errou"
            },
            {
                texto: "Fica de ponta cabeça",
                afirmacao: "Errou"
            },
            {
                texto: "Muda de cor",
                afirmacao: "Acertou"
            },
            {
                texto: "Começa a girar",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Quanto tempo demora o dia no Minecraft ",
        alternativas: [
            {
                texto: "15 minutos",
                afirmacao: "Acertou"
            },
            {
                texto: "10 minutos",
                afirmacao: "Errou"
            },
            {
                texto: "5 minutos",
                afirmacao: "Errou"
            },
            {
                texto: "20 minutos",
                afirmacao: "Errou"
            }
        ]
    },    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    const totalPerguntas = perguntas.length;
    const totalAcertos = contagemAfirmacoes["Acertou"] || 0; // Se não houver acertos, considera como 0
    const porcentagemAcertos = (totalAcertos / totalPerguntas) * 100;

    caixaPerguntas.textContent = "Resultado do Quiz!";
    textoResultado.textContent = `Você acertou ${totalAcertos} de ${totalPerguntas} perguntas. Sua taxa de acerto foi ${porcentagemAcertos.toFixed(2)}%.`;
    caixaAlternativas.textContent = "";
}

