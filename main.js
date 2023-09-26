"use strict";
const tableForListClient = document.querySelector(".list_client_NL");
const contaner = document.querySelector(".contaner")
const btnBack = document.createElement('button');
btnBack.className = "btnBack"
btnBack.onclick = () => { document.location = './index.html' }
btnBack.innerHTML = "back"
import { baseClientNL } from "./base.js";
createHtmlTable(baseClientNL);


function createHtmlTable(base) {
  for (let i = 0; i < base.length; i++) {
    const newTableAlTR = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAdress = document.createElement("td");
    const tdGps = document.createElement("td");

    const aTdGps = document.createElement("a");
    aTdGps.className = "gpsText";
    const tdPass = document.createElement("td");

    tdName.innerHTML = base[i].name;
    tdAdress.innerHTML = base[i].adress;
    aTdGps.innerHTML = base[i].gpsCode;
    aTdGps.href = base[i].gps;
    tdPass.innerHTML = base[i].passwordToDoor;
    tdGps.appendChild(aTdGps);
    newTableAlTR.appendChild(tdName);
    newTableAlTR.appendChild(tdAdress);
    newTableAlTR.appendChild(tdGps);
    newTableAlTR.appendChild(tdPass);
    tableForListClient.appendChild(newTableAlTR);
    tableForListClient.appendChild(btnBack)
  }
}
