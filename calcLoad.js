export function createLabel(text) {
    const tagLabel = document.createElement('label');
    tagLabel.innerHTML = text
    return tagLabel
}
export function addNewCont(key, val) {
    val.value = key
    console.log(key);
}


export function resetCont() {

    loadedIntoTrailer = {
        'KK': 0,
        'SH-KK': 0,
        'TAG': 0,
        'CC': 0,
        'NC': 0,
        'SH-CC': 0,
    }
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


