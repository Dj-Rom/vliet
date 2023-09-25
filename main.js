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
    let newTableAlTR = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdAdress = document.createElement("td");
    let tdGps = document.createElement("td");
    let aTdGps = document.createElement("a");
    let tdPass = document.createElement("td");
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
    tableForListClient.append(btnBack)
  }
}
