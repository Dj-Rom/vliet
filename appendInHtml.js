import { createLabel } from './calcLoad.js'
import { tag_5Input, tag_5Add, tag_5, cc, ccInput, ccAdd, nc, ncInput, ncAdd, shKk, shKkInput, shKkAdd, kk, kkInput, kkAdd, shCc, shCcInput, shCcAdd, palletInput, pallet, palletAdd, reset } from './viewLoad.js';

const contenerCalk = document.querySelector(".contener");
const br = document.createElement('BR');
const _tag = document.createElement('div');
const _cc = document.createElement('div');
const _nc = document.createElement('div');
const _kk = document.createElement('div');
const _pallets = document.createElement('div');
const _shkk = document.createElement('div');
const _shcc = document.createElement('div');
const btnBack = document.createElement('button');
btnBack.className = "btnBack, MBtn"
btnBack.onclick = () => { document.location = './index.html' }
btnBack.innerHTML = "back"




contenerCalk.append(createLabel("KK"))
_kk.append(br)
_kk.appendChild(kk)
_kk.appendChild(kkInput)
_kk.appendChild(kkAdd)
contenerCalk.appendChild(_kk)

contenerCalk.append(createLabel("SH_KK"))
_shkk.append(br)
_shkk.appendChild(shKk)
_shkk.appendChild(shKkInput)
_shkk.appendChild(shKkAdd)
contenerCalk.appendChild(_shkk)

contenerCalk.append(createLabel("TAG-5"))
_tag.append(br)
_tag.appendChild(tag_5)
_tag.appendChild(tag_5Input)
_tag.appendChild(tag_5Add)
contenerCalk.appendChild(_tag)

contenerCalk.append(createLabel("CC"))
_cc.append(br)
_cc.appendChild(cc)
_cc.appendChild(ccInput)
_cc.appendChild(ccAdd)
contenerCalk.appendChild(_cc)


contenerCalk.append(createLabel("NC"))
_nc.append(br)
_nc.appendChild(nc)
_nc.appendChild(ncInput)
_nc.appendChild(ncAdd)
contenerCalk.appendChild(_nc)

contenerCalk.append(createLabel("SH_CC"))
_shcc.append(br)
_shcc.appendChild(shCc)
_shcc.appendChild(shCcInput)
_shcc.appendChild(shCcAdd)
contenerCalk.appendChild(_shcc)


contenerCalk.append(createLabel("PALLETS"))
_pallets.append(br)
_pallets.appendChild(pallet)
_pallets.appendChild(palletInput)
_pallets.appendChild(palletAdd)
contenerCalk.appendChild(_pallets)


_pallets.append(br)
contenerCalk.append(reset)


contenerCalk.append(btnBack)
