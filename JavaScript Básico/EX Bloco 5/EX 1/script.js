function startCount() {
    if (validation() == true) return false
        let uI = document.getElementsByClassName("values");
        let paragraph = document.querySelector(`.counts`);
            let start = Number(uI[0].value)
            let end = Number(uI[1].value)
            let step = Number(uI[2].value) || 1
                paragraph.innerText = ""
    
    if (start < end) {
        //Crescente
        for(start; start <= end; start += step) {
            paragraph.innerText += `${start} 👉 `
        };
    }
    else {
        // Decrescente
        for(start; start >= end; start -= step) {
            paragraph.innerText += `${start} 👉 `
        };
    };
    paragraph.innerText += "🏁"
};

function validation() {
    let uI = document.getElementsByClassName("values");

    //Valida se estiver nulo
    for(let element of uI) {
        if(element.value == "") {
            console.log("verificado")
            alert(`O elemento ${element.getAttribute("id")} possui um valor inválido`);
            return true;
        }
        
    //Valida se o step for menor ou igual a 0
    if (element[2] <= 0) alert(`O elemento 3 possui um valor menor ou igual a 0`);
    return false
    }
}