const decBtn = document.querySelector(".dec-btn");
const funcBtns = document.querySelectorAll(".func-btn");
const h1 = document.querySelector("h1");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");

const calc = [];

decBtn.addEventListener("click", ({ target: { innerText } }) => {
  if (calc.length === 1) {
    if (calc[0].includes(innerText)) return;

    calc[0] += innerText;
    h1.innerText = calc[0];
  } else if (calc.length === 3) {
    if (calc[2].includes(innerText)) return;

    calc[2] += innerText;
    h1.innerText = calc[2];
  }
});

function changeText() {
  funcBtns[0].innerText = calc.length === 0 ? "AC" : "C";
}

funcBtns.forEach((funcBtn) => {
  funcBtn.addEventListener("click", ({ target: { innerText } }) => {
    if (innerText === "+/-") {
      if (calc.length === 1) {
        calc[0] = -calc[0] + "";
        h1.innerText = calc[0];
      } else if (calc.length === 3) {
        calc[2] = -calc[2] + "";
        h1.innerText = calc[2];
      }
    } else if (innerText === "%") {
      if (calc.length === 1) {
        calc[0] = eval(calc[0] + "/100") + "";
        h1.innerText = calc[0];
      } else if (calc.length === 3) {
        calc[2] = eval(calc[2] + "/100") + "";
        h1.innerText = calc[2];
      }
    } else {
      calc.splice(0, calc.length);
      h1.innerText = "0";
      changeText();
    }
  });
});

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", ({ target: { innerText } }) => {
    if (calc.length === 0) {
      calc.push(innerText);
      h1.innerText = calc[0];
    } else if (calc.length === 1) {
      calc[0] += innerText;
      h1.innerText = calc[0];
    } else if (calc.length === 2) {
      calc.push(innerText);
      h1.innerText = calc[2];
    } else if (calc.length === 3) {
      calc[2] += innerText;
      h1.innerText = calc[2];
    }

    changeText();
  });
});

opBtns.forEach((opBtn) => {
  opBtn.addEventListener("click", ({ target: { innerText } }) => {
    if (innerText !== "=") {
      if (calc.length === 1) {
        calc.push(innerText);
      } else if (calc.length === 2) {
        calc[1] = innerText;
      } else if (calc.length === 3) {
        h1.innerText = eval(calc.join(""));
        calc.splice(0, calc.length, "" + eval(calc.join("")), innerText);
      }
    } else {
      h1.innerText = eval(calc.join(""));
      calc.splice(0, calc.length, "" + eval(calc.join("")));
    }
  });
});
