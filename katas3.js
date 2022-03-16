const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function showResults(number, valor) {
  document.getElementById("kata" + number).innerHTML = "";
  const p = document.createElement("p");
  p.innerText = valor;
  document.getElementById("kata" + number).appendChild(p);
}

document.on;

function kata1() {
  // implemente o código do kata 1 aqui
  let result = "";
  for (let i = 1; i <= 25; i++) {
    result += i + ", ";
  }
  showResults(1, result);
}

function kata2() {
  // implemente o código do kata 2 aqui
  let result = "";
  for (let i = 25; i >= 1; i--) {
    result += i + ", ";
  }
  showResults(2, result);
}

function kata3() {
  // implemente o código do kata 3 aqui
  let result = "";
  for (let i = -1; i >= -25; i--) {
    result += i + ", ";
  }
  showResults(3, result);
}

function kata4() {
  // implemente o código do kata 4 aqui
  let result = "";
  for (let i = -25; i <= -1; i++) {
    result += i + ", ";
  }
  showResults(4, result);
}

function kata5() {
  // implemente o código do kata 5 aqui
  let result = "";
  for (let i = -25; i <= 25; i++) {
    if (i % 2 !== 0) {
      result += i + ", ";
    }
  }
  showResults(5, result);
}

function kata6() {
  // implemente o código do kata 6 aqui
  let result = "";
  for (let i = 3; i <= 100; i++) {
    if (i % 3 == 0) {
      result += i + ", ";
    }
  }
  showResults(6, result);
}

function kata7() {
  // implemente o código do kata 7 aqui
  let result = "";
  for (let i = 7; i <= 100; i++) {
    if (i % 7 == 0) {
      result += i + ", ";
    }
  }
  showResults(7, result);
}
// enunciado com problemas para interpretação, por conta do exemplo deu pra entender o proposto
function kata8() {
  // implemente o código do kata 8 aqui
  let result = "";
  for (let i = 100; i >= 3; i--) {
    if (i % 3 == 0 || i % 7 == 0) {
      result += i + ", ";
    }
  }
  showResults(8, result);
}

function kata9() {
  // implemente o código do kata 9 aqui
  let result = "";
  for (let i = 5; i <= 100; i++) {
    if (i % 5 == 0 && i % 2 !== 0) {
      result += i + ", ";
    }
  }
  showResults(9, result);
}

function kata10() {
  // implemente o código do kata 10 aqui
  let result = "";
  let newArr = [];
  for (let i = 0; i < 20; i++) {
    newArr.push(sampleArray[i]);
  }
  result += newArr.join(", ");
  showResults(10, result);
}

function kata11() {
  // implemente o código do kata 11 aqui
  let result = "";
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 == 0) {
      result += sampleArray[i] + ", ";
    }
  }
  showResults(11, result);
}

function kata12() {
  // implemente o código do kata 12 aqui
  let result = "";
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 !== 0) {
      result += sampleArray[i] + ", ";
    }
  }

  showResults(12, result);
}

function kata13() {
  // implemente o código do kata 13 aqui
  let result = "";
  let newArr = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 8 == 0) {
      newArr.push(sampleArray[i]);
    }
  }
  result += newArr.join(", ");
  showResults(13, result);
}

function kata14() {
  // implemente o código do kata 14 aqui
  let result = "";
  let newArr = [];
  for (let i = 0; i < sampleArray.length; i++) {
    newArr.push(sampleArray[i] * sampleArray[i]);
  }
  result += newArr.join(", ");
  showResults(14, result);
}

function kata15() {
  let result = 0;
  for (let i = 1; i <= 20; i++) {
    result += i;
  }
  showResults(15, result);
}

function kata16() {
  // implemente o código do kata 16 aqui
  let result = 0;
  for (let i = 0; i < sampleArray.length; i++) {
    result += sampleArray[i];
  }
  showResults(16, result);
}

function kata17() {
  // implemente o código do kata 17 aqui
  let result = sampleArray[0];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] < result) {
      result = sampleArray[i];
    }
  }
  showResults(17, result);
}

function kata18() {
  // implemente o código do kata 18 aqui
  let result = sampleArray[0];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > result) {
      result = sampleArray[i];
    }
  }
  showResults(18, result);
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
  // implemente o código do kata bonus 1 aqui
  document.getElementById("katabonus1").innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.classList.add("box");
    el.style.height = 20 + "px";
    el.style.width = 100 + "px";
    document.getElementById("katabonus1").appendChild(el);
  }
}

function kataBonus2() {
  // implemente o código do kata bonus 2 aqui
  document.getElementById("katabonus2").innerHTML = "";
  let width = 105;
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.classList.add("box");
    el.style.height = 20 + "px";
    el.style.width = width + "px";
    width += 5;
    document.getElementById("katabonus2").appendChild(el);
  }
}

function kataBonus3() {
  // implemente o código do kata bonus 3 aqui
  document.getElementById("katabonus3").innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.classList.add("box");
    el.style.height = 20 + "px";
    el.style.width = sampleArray[i] + "px";
    document.getElementById("katabonus3").appendChild(el);
  }
}

function kataBonus4() {
  // implemente o código do kata bonus 4 aqui
  document.getElementById("katabonus4").innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.classList.add("box");
    el.style.height = 20 + "px";
    el.style.width = sampleArray[i] + "px";
    if (i % 2 !== 0) {
      el.style.backgroundColor = "red";
    }
    document.getElementById("katabonus4").appendChild(el);
  }
}

function kataBonus5() {
  // implemente o código do kata bonus 5 aqui
  document.getElementById("katabonus5").innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.classList.add("box");
    el.style.height = 20 + "px";
    el.style.width = sampleArray[i] + "px";
    if (sampleArray[i] % 2 == 0) {
      el.style.backgroundColor = "red";
    }
    document.getElementById("katabonus5").appendChild(el);
  }
}
