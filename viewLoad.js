import { createLabel, addNewCont, resetCont, loadedIntoTrailer } from './calcLoad.js'






export const tag_5 = document.createElement("button");
tag_5.id = "tag_5"
tag_5.onclick = () => { if (loadedIntoTrailer.TAG) { addNewCont(--loadedIntoTrailer.TAG, tag_5Input) } }
tag_5.innerHTML = '-'
export const tag_5Input = document.createElement("input")
tag_5Input.id = "tag_5Input"
tag_5Input.value = loadedIntoTrailer.TAG
export const tag_5Add = document.createElement("button");
tag_5Add.id = "tag_5Add"
tag_5Add.onclick = () => { if (loadedIntoTrailer.TAG >= 0) { addNewCont(++loadedIntoTrailer.TAG, tag_5Input) } }
tag_5Add.innerHTML = '+'

export const cc = document.createElement("button");
cc.id = "cc"
cc.onclick = () => { if (loadedIntoTrailer.CC) { addNewCont(--loadedIntoTrailer.CC, ccInput) } }
cc.innerHTML = '-'
export const ccInput = document.createElement("input")
ccInput.id = "ccInput"
ccInput.value = loadedIntoTrailer.CC
export const ccAdd = document.createElement("button");
ccAdd.id = "ccAdd"
ccAdd.onclick = () => { if (loadedIntoTrailer.CC >= 0) { addNewCont(++loadedIntoTrailer.CC, ccInput) } }
ccAdd.innerHTML = '+'


export const nc = document.createElement("button");
nc.id = "nc"
nc.onclick = () => { if (loadedIntoTrailer.NC) { addNewCont(--loadedIntoTrailer.NC, ncInput) } }
nc.innerHTML = '-'
export const ncInput = document.createElement("input")
ncInput.id = "ncInput"
ncInput.value = loadedIntoTrailer.NC
export const ncAdd = document.createElement("button");
ncAdd.id = "ncAdd"
ncAdd.onclick = () => { if (loadedIntoTrailer.NC >= 0) { addNewCont(++loadedIntoTrailer.NC, ncInput) } }
ncAdd.innerHTML = '+'


export const shKk = document.createElement("button");
shKk.id = "shKk"
shKk.onclick = () => { if (loadedIntoTrailer.SH_KK) { addNewCont(--loadedIntoTrailer.SH_KK, shKkInput) } }
shKk.innerHTML = '-'
export const shKkInput = document.createElement("input")
shKkInput.id = "shKkInput"
shKkInput.value = loadedIntoTrailer.SH_KK
export const shKkAdd = document.createElement("button");
shKkAdd.id = "shKkAdd"
shKkAdd.onclick = () => { if (loadedIntoTrailer.SH_KK >= 0) { addNewCont(++loadedIntoTrailer.SH_KK, shKkInput) } }
shKkAdd.innerHTML = '+'


export const shCc = document.createElement("button");
shCc.id = "shCc"
shCc.onclick = () => { if (loadedIntoTrailer.SH_CC) { addNewCont(--loadedIntoTrailer.SH_CC, shCcInput) } }
shCc.innerHTML = '-'
export const shCcInput = document.createElement("input")
shCcInput.id = "shCcInput"
shCcInput.value = loadedIntoTrailer.SH_CC
export const shCcAdd = document.createElement("button");
shCcAdd.id = "shCcAdd"
shCcAdd.onclick = () => { if (loadedIntoTrailer.SH_CC >= 0) { addNewCont(++loadedIntoTrailer.SH_CC, shCcInput) } }
shCcAdd.innerHTML = '+'


export const pallet = document.createElement("button");
pallet.id = "pallet"
pallet.onclick = () => { if (loadedIntoTrailer.PALLETS) { addNewCont(--loadedIntoTrailer.PALLETS, palletInput) } }
pallet.innerHTML = '-'
export const palletInput = document.createElement("input")
palletInput.id = "palletInput"
palletInput.value = loadedIntoTrailer.PALLETS
export const palletAdd = document.createElement("button");
palletAdd.id = "palletAdd"
palletAdd.onclick = () => { if (loadedIntoTrailer.PALLETS >= 0) { addNewCont(++loadedIntoTrailer.PALLETS, palletInput) } }
palletAdd.innerHTML = '+'

export const reset = document.createElement("button");
reset.onclick = () => { resetCont(loadedIntoTrailer) }
reset.className = 'resetBtn'
reset.innerHTML = "reset"







