let ganhou = null;

function verificaSeOChutePossuiUmValorValido(numeroFalado) {
    const numero = +numeroFalado;

    if (numeroForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor}</div>
            `;
        return;
    }

    if (acertou(numero)) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto é ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
        ganhou = true;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    }
}

function numeroForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

const acertou = (numero) => numero === numeroSecreto;

document.body.addEventListener("click", (e) => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload();
    }
});
