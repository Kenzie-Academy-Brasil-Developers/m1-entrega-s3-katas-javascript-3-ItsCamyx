const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function showResults(number, valor) {
  const p = document.createElement("p");
  p.innerText = valor;
  document.getElementById("kata" + number).appendChild(p);
}

document.on;

function kata1() {
  // implemente o código do kata 1 aqui
  let result = "";
  for (let i = 0; i <= 25; i++) {
    result += i + ", ";
  }
  showResults(1, result);
}

function kata2() {
  // implemente o código do kata 2 aqui
  let result = "";
  showResults(2, result);
}

function kata3() {
  // implemente o código do kata 3 aqui
  let result = "";
  showResults(3, result);
}

function kata4() {
  // implemente o código do kata 4 aqui
  let result = "";
  showResults(4, result);
}

function kata5() {
  // implemente o código do kata 5 aqui
  let result = "";
  showResults(5, result);
}

function kata6() {
  // implemente o código do kata 6 aqui
  let result = "";
  showResults(6, result);
}

function kata7() {
  // implemente o código do kata 7 aqui
  showResults(7, result);
}

function kata8() {
  // implemente o código do kata 8 aqui
  showResults(8, result);
}

function kata9() {
  // implemente o código do kata 9 aqui
  showResults(9, result);
}

function kata10() {
  // implemente o código do kata 10 aqui
  let result = "";
  let newArr = [];
  for (let i = 0; i < 20; i++) {
    newArr.push(sampleArray[i]);
  }
  result += newArr;
  showResults(10, result);
}

function kata11() {
  // implemente o código do kata 11 aqui
  showResults(11, result);
}

function kata12() {
  // implemente o código do kata 12 aqui
  showResults(12, result);
}

function kata13() {
  // implemente o código do kata 13 aqui
  showResults(13, result);
}

function kata14() {
  // implemente o código do kata 14 aqui
  showResults(14, result);
}

function kata15() {
  // implemente o código do kata 15 aqui
  showResults(15, result);
}

function kata16() {
  // implemente o código do kata 16 aqui
  showResults(16, result);
}

function kata17() {
  // implemente o código do kata 17 aqui
  showResults(17, result);
}

function kata18() {
  // implemente o código do kata 18 aqui
  showResults(18, result);
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
  // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
  // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
  // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
  // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
  // implemente o código do kata bonus 5 aqui
}
