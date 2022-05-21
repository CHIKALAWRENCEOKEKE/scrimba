let myLeads = [];
let inputbtn = document.getElementById("save-input");

const inputEL = document.getElementById("input-el");
const ulEle = document.getElementById("ul-ele");

const leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deletebtn = document.getElementById("delete-btn");

if (leadsfromLocalStorage) {
  myLeads = leadsfromLocalStorage;
  renderLeads();
}

deletebtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

inputbtn.addEventListener("click", function () {
  myLeads.push(inputEL.value);
  inputEL.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li><a href='${myLeads[i]}'   target='_blank'> 
       ${myLeads[i]}  </a></li>
       `;
  }

  ulEle.innerHTML = listItems;
}
