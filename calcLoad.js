export function createLabel(text) {
    const tagLabel = document.createElement('label');
    tagLabel.innerHTML = text

    return tagLabel
}
export function addNewCont(key, val, obj) {
    val.value = key

    localStorage.setItem('calcVliet', JSON.stringify(obj))
}


export function resetCont() {

    const loadedIntoTrailer = {
        'KK': 0,
        'SH_KK': 0,
        'TAG': 0,
        'CC': 0,
        'NC': 0,
        'SH_CC': 0,
        "PALLETS": 0,
    }
    localStorage.setItem('calcVliet', JSON.stringify(loadedIntoTrailer))
    location.reload()


}

export let loadedIntoTrailer = {
    'KK': 0,
    'SH_KK': 0,
    'TAG': 0,
    'CC': 0,
    'NC': 0,
    'SH_CC': 0,
    "PALLETS": 0,
}
!localStorage.calcVliet ? localStorage.setItem('calcVliet', JSON.stringify(loadedIntoTrailer)) : ''


