const dado = ['maca','banana','melancia','verde','vermelho','vibrador','pelos'];

btnNova.addEventListener('click', () => {
  sortearPalavra();
  attContador();
  resetar();
});
btnVerif.addEventListener('click',() => {
  verificarPalavra();
  resposta.value = "";
  attContador();
});

let contador = 3;
let pontuacao = 0;
let palavra = null;

function sortearPalavra() {
  const index = Math.floor(Math.random() * dado.length); 
  palavra = dado[index];
  // printIn.innerHTML += `<p>A palavra sorteada foi: ${palavra}</p>`;
  embaralharPalavra(palavra);
}

function embaralharPalavra(palav) {
  const palavraEmbaralhada = [...palav];
  palavraEmbaralhada.sort();
  printIn.innerHTML = `<p>A palavra embaralhada é: ${palavraEmbaralhada.join(" - ")}</p>`;
}

function verificarPalavra() {
  if (resposta.value === palavra) {
    spSituacao.innerText = `A resposta está correta, a resposta é ${palavra}!`;
    btnVerif.disabled = true;
    resposta.disabled = true;
    definirPont();
  } else { 
    spSituacao.innerText = `A resposta esta incorreta, a resposta não é ${resposta.value}!`;
    contador--;
  }
  if (contador <= 0) {
    btnVerif.disabled = true;
    resposta.disabled = true;
    spSituacao.innerText = `Você perdeu!`;
  }
}

function attContador() {
  spQuantTentativas.innerText = `Você ainda tem:${contador} tentativas!`;
}

function definirPont() {
  pontuacao += contador;
  spPlacar.innerText = `Você tem ${pontuacao} pontos!`; 
}

function resetar() {
  btnVerif.disabled = false;
  resposta.disabled = false;
  contador = 3;
  resposta.value = "";
  attContador();
}
  