/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.
 */

let pointsPlayer1 = 0;
let pointsPlayer2 = 0;

const fifteenLove = "P1 <- 15 - Love -> P2";
const Lovefifteen = "P1 <- Love - 15 -> P2";
const fifteenfifteen = "P1 <- 15 - 15 -> P2";
const thirtyfifteen = "P1 <- 30 - 15 -> P2";
const fifteenthirty = "P1 <- 15 - 30 -> P2";
const thirtythirty = "P1 <- 30 - 30 -> P2";
const fortythirty = "P1 <- 40 - 30 -> P2";
const thirtyforty = "P1 <- 30 - 40 -> P2";
const deuce = "Deuce";
const AdvantajeP1 = "P1 Advantaje";
const AdvantajeP2 = "P2 Advantaje";

const thirtylove = "P1 <- 30 - 0 -> P2";
const lovethirty = "P1 <- 0 - 30 -> P2";
const fortyLove = "P1 <- 40 - 0 -> P2";
const Loveforty = "P1 <- 0 - 40 -> P2";
const fortyfifteen = "P1 <- 40 - 15 -> P2";
const fifteenforty = "P1 <- 15 - 40 -> P2";

function pointWinnerF() {
  for (let tries = 1; ; tries++) {
    let pointWinner = prompt("Who won this point? ").toLowerCase();
    if ((pointWinner != "p1" && pointWinner != "p2") || pointWinner == "") {
      alert("Please enter P1 or P2 ");
    } else if (pointWinner == "p1") {
      if (pointsPlayer1 == 3 && pointsPlayer2 == 3) {
        pointsPlayer1 = pointsPlayer1 + 1;
        console.log(AdvantajeP1);
      } else if (pointsPlayer1 == 4 && pointsPlayer2 == 3) {
        pointsPlayer1 = pointsPlayer1 + 1;
        if (pointsPlayer1 == 5) {
          console.log("Player 1 won!");
        }
      } else {
        pointsPlayer1 = pointsPlayer1 + 1;
      }
    } else if (pointWinner == "p2") {
      if (pointsPlayer2 == 3 && pointsPlayer1 == 3) {
        pointsPlayer2 = pointsPlayer2 + 1;
        console.log(AdvantajeP2);
      } else if (pointsPlayer2 == 4 && pointsPlayer1 == 3) {
        pointsPlayer2 = pointsPlayer2 + 1;
        if (pointsPlayer2 == 5) {
          console.log("Player 2 won!");
        }
      } else {
        pointsPlayer2 = pointsPlayer2 + 1;
      }
    }
    if (pointsPlayer1 == 0 && pointsPlayer2 == 1) {
      console.log(Lovefifteen);
    } else if (pointsPlayer1 == 1 && pointsPlayer2 == 0) {
      console.log(fifteenLove);
    } else if (pointsPlayer1 == 1 && pointsPlayer2 == 1) {
      console.log(fifteenfifteen);
    } else if (pointsPlayer1 == 2 && pointsPlayer2 == 1) {
      console.log(thirtyfifteen);
    } else if (pointsPlayer1 == 1 && pointsPlayer2 == 2) {
      console.log(fifteenthirty);
    } else if (pointsPlayer1 == 2 && pointsPlayer2 == 2) {
      console.log(thirtythirty);
    } else if (pointsPlayer1 == 3 && pointsPlayer2 == 2) {
      console.log(fortythirty);
    } else if (pointsPlayer1 == 2 && pointsPlayer2 == 3) {
      console.log(thirtyforty);
    } else if (pointsPlayer1 == 3 && pointsPlayer2 == 3) {
      console.log(deuce);
    } else if (pointsPlayer1 == 2 && pointsPlayer2 == 0) {
      console.log(thirtylove);
    } else if (pointsPlayer1 == 0 && pointsPlayer2 == 2) {
      console.log(lovethirty);
    } else if (pointsPlayer1 == 3 && pointsPlayer2 == 1) {
      console.log(fortyfifteen);
    } else if (pointsPlayer1 == 1 && pointsPlayer2 == 3) {
      console.log(fifteenforty);
    } else if (pointsPlayer1 == 3 && pointsPlayer2 == 0) {
      console.log(fortyLove);
    } else if (pointsPlayer1 == 0 && pointsPlayer2 == 3) {
      console.log(Loveforty);
    }
  }
}
