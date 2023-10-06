const elementoChute = document.getElementById("chute");

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
    numeroFalado = e.results[0][0].transcript;
    exibeChuteNaTela(numeroFalado);
    verificaSeOChutePossuiUmValorValido(numeroFalado);
}

function exibeChuteNaTela(numeroFalado) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${numeroFalado}</span>
        `;
}

recognition.addEventListener("end", () => {
    if (!ganhou) {
        recognition.start();
    }
});
