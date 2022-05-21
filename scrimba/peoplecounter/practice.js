let gu = document.getElementById("madu");
let d = 0;

function oguguOnu() {
  d += +1;
  gu.innerHTML = d;
}

let saveEl = document.getElementById("save-el");

function save() {
  let count = d;
  saveEl.textContent += count + "     -     ";
  gu.innerHTML = 0;
  d = 0;
}
