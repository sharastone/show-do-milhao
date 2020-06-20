function start() {
    document.getElementById("game").classList.remove("hide");
    document.getElementById("start").classList.add("hide");
    document.getElementById("info").classList.add("hide");
    let musica = document.getElementById("audio");
    musica.play();

}

let index = 0;
let questions = document.getElementById("questoes");
let question = questoes.map((question) => question.questao);
let options = questoes.map((options) => options.alternativas);
let score = 0;
document.getElementById("pontuacao").innerHTML = score;


let question_title = document.getElementById("quest");


question_title.innerHTML = question[index];

questions.appendChild(question_title);
let option = options[index].map((option) => option.texto);



for (var i = 0; i < 4; i++) {
    let alternativa = document.getElementById("bt" + i);
    alternativa.innerHTML = option[i];
}

function nextQuestion(i) {
    let correct = options[index][i].correct || false;

    if (correct == true) {
        score += options[index][i].valor || 0;
        document.getElementById("pontuacao").innerHTML = score + ".000";
        index++;
        proximo()

    } else {
        perder();
    }

}

function proximo() {
    if (index == 5) {
        vencedor();
    } else {
        question_title.innerHTML = question[index];
        option = options[index].map((option) => option.texto);
        console.log(option);
        for (var i = 0; i < 4; i++) {
            let alternativa = document.getElementById("bt" + i);
            alternativa.innerHTML = option[i];

        }
    }
}

function parar() {
    vencedor();
}

function zerar() {
    document.getElementById("game").classList.add("hide");
    document.getElementById("start").classList.remove("hide");
    index = 0;
    score = 0;
    document.getElementById("pontuacao").innerHTML = score;
    document.getElementById("dica").classList.remove("hide");
    document.getElementById("info").classList.remove("hide");
    document.getElementById("winner").classList.add("hide");
    document.getElementById("lose").classList.add("hide");
    proximo();
}

function vencedor() {
    document.getElementById("game").classList.add("hide");
    document.getElementById("winner").classList.remove("hide");
    document.getElementById("pontosWinner").innerHTML = "Parabénsss !!!!" + "<br>" + "VOCÊ GANHOU " + score + ".000";

}

function perder() {
    document.getElementById("game").classList.add("hide");
    document.getElementById("lose").classList.remove("hide");
    document.getElementById("pontosLose").innerHTML = "Você perdeu :c" + "<br>" + "mas, ganhou: " + score / 2 + ".000";
}

function dica() {
    if (index == 0) {
        alert("Foi o autor da célebre frase: Na televisão, nada se cria, tudo se copia");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 1) {
        alert("é representado por uma cabra");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 2) {
        alert("foi a última governante do Reino Ptolemaico do Egito");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 3) {
        alert("foi na mesma idade em que o ator Paulo Henrique Amorim faleceu");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 4) {
        alert("é uma das maiores cobras do mundo");
        document.getElementById("dica").classList.add("hide");
    }

}