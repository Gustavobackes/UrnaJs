//PARAMETROS
let QTD_ELEITORES, N_ELEITOR, CANDIDATO, VOTOS; // INTEIRO
let VOTO; // INTEIRO
let V; // INTEIRO
let NOME; //CARACTERE

//% DE VOTACAO
let BRA, PERCENTUAL_BRANCO, PERCENTUAL_NULOS, PERCENTUAL; // REAL

// OPCOES DE VOTACAO
let TOTAL_VOTOS_VALIDOS, BRANCO, A, B, C, NULO; // INTEIRO

function eleicao() {
  do {
    QTD_ELEITORES = prompt("Informar n° de eleitores");
    do {
      VOTO = prompt(`
        URNA ELETRÔNICA:
        ELEITOR N°: ${N_ELEITOR}
        LISTA DE CANDIDATOS:
        Candidato N°0 - Branco
        Candidato N°10 - Antônio da Silva
        Candidato N°20 - José Nascimento
        Candidato N°30 - Paulo Cardos
        Escolha o candidato:
        `);
      switch (VOTO) {
        case 0:
          BRANCO = BRANCO++;
          alert(`ELEITOR: N° ${N_ELEITOR},  VOTOU EM BRANCO!`);
          break;
        case 10:
          A = A++;
          alert(`ELEITOR: N° ${N_ELEITOR},  ANTÔNIO DA SILVA!`);
          break;
        case 20:
          B = B++;
          alert(`ELEITOR: N° ${N_ELEITOR},  JOSÉ NASCIMENTO!`);
          break;
        case 30:
          C = C++;
          alert(`ELEITOR: N° ${N_ELEITOR}, PAULO CARDOS!`);
          break;
        default:
          NULO = NULO++;
      }
      N_ELEITOR = N_ELEITOR++;
    } while ((toString(N_ELEITOR) = QTD_ELEITORES));

    alert(`QUANTIDADE DE ELEITORES: ${QTD_ELEITORES}`);

    TOTAL_VOTOS_VALIDOS = A + B + C;
    BRA = QTD_ELEITORES - TOTAL_VOTOS_VALIDOS - NULO;
    PERCENTUAL_BRANCO = (BRA * 100) / QTD_ELEITORES;

    alert(`VOTOS EM BRANCO: ${BRA} - ${PERCENTUAL_BRANCO}%`);

    for (let i = 1; i <= 3; i++) {
      switch (i) {
        case 1:
          NOME = "ANTÔNIO DA SILVA";
          VOTOS = A;
          break;
        case 2:
          NOME = "JOSÉ DO NASCIMENTO";
          VOTOS = B;
          break;
        case 3:
          NOME = "PAULO CARDOS";
          VOTOS = C;
          break;
      }
      PERCENTUAL = (VOTOS * 100) / TOTAL_VOTOS_VALIDOS;
      alert(`VOTOS NO CANDIDATO ${NOME}: ${votos} - ${PERCENTUAL}%`);
    }
    PERCENTUAL_NULOS = (NULO * 100) / QTD_ELEITORES;
    alert(`VOTOS NULOS: ${NULO} - ${PERCENTUAL_NULOS}%`);

    if (BRANCO > A && BRANCO > B && BRANCO > C && BRANCO > NULO) {
      alert("MAIORIA DOS VOTOS FORAM EM BRANCO!");
    }
    if (NULO > A && NULO > B && NULO > C && NULO > BRANCO) {
      alert("MAIORIA DOS VOTOS FORAM NULOS!");
    }
    if (A > B && A > C && A > BRANCO && A > NULO) {
      V = 1;
      alert("O CANDIDATO ANTÔNIO DA SILVA FOI ELEITO!");
    }
    if (B > A && B > C && B > BRANCO && B > NULO) {
      V = 1;
      alert("O CANDIDATO JOSÉ DO NASCIMENTO FOI ELEITO!");
    }
    if (C > A && C > B && C > BRANCO && C > NULO) {
      V = 1;
      alert("O CANDIDATO PAULO CARDOS FOI ELEITO!");
    }

    if ((V = 0)) {
      alert("NÃO HOUVE UM CANDIDATO VENCEDOR!");
      alert("SERÁ NECESSÁRIO UMA NOVA ELEIÇÃO!");
      alert("***************************************************************");
    }
  } while ((V = 1));
}

eleicao();
