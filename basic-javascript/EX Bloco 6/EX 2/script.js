//-------------------- Declaration-----------------//

const element = document.getElementsByClassName("numberSelector");
const buttons = document.getElementsByClassName("buttons");
const select = document.getElementsByClassName("output")[0];
const results = document.getElementsByClassName(`results`)[0]
const measurements = document.getElementsByClassName("findIndex")

const setReadOnly = element => element.setAttribute("readonly", "");
const resetReadOnly = element => element.removeAttribute("readonly");

const memory = [];

// ------------------- ADD ----------------------- //

function add(value) {
    value = value || 0;
    if (isNaN(value)) return error(1);

    const option = document.createElement("option");
        option.setAttribute("class", "element");
        option.text = `Valor ${value} adicionado`;
            select.appendChild(option);
            memory.push(Number(value));
            updateValues();
};

function addOptimezed(value) {
    const option = document.createElement("option");
        option.setAttribute("class", "element");
        option.text = `Valor ${value} adicionado`;
            select.appendChild(option);
            memory.push(Number(value));
}

//------------------- DEL -------------------------//

function del(delType = 0) {

    if (select.childNodes.length == 0) return error(2);
        select.removeChild(select.childNodes[select.childNodes.length - 1]);
        memory.pop();

    while(delType == 1 && select.children.length != 0 ) {
        select.removeChild(select.childNodes[select.childNodes.length - 1]);
        memory.pop();
    }
    updateValues();
}

//----------------- Error -----------------------//

function error(errorType) {

    select.innerHTML = ""
    const option = document.createElement("option");
        option.setAttribute("class", "element");
        option.setAttribute("style", "color: red;");

    switch (errorType) {
        case 0: option.innerHTML = "Valor duplicado"; // Não será utilizado mais devido ao MDC e MMC
            break;
        case 1: option.innerHTML = "Valor inválido";
            break;
        case 2: option.innerHTML = "Sem elementos"; 
            break; 
        default: option.innerHTML = "Erro desconhecido";
        }

    select.appendChild(option)
    setTimeout(back, 1000)
}

function back() {
    let memoryCopy = [];
    select.innerHTML = ""
        for (let element of memory) memoryCopy.push(element); 
        while (memory.length != 0) memory.pop();
        for(let element of memoryCopy) add(element);
}

//--------------- Update -------------------------//

function updateValues() {
    if (memory.length < 2) for(let elements of measurements) elements.value = ""
    else {

    let temporaryMemoryCopy = []; 
    Object.assign(temporaryMemoryCopy, memory);
    let valid = memory.every(a => !(String(a).includes(".")) && a != 0)

    let values = [
        memory.length, // List size
        Math.max(...memory), // Maior
        Math.min(...memory), // Menor
        memory.reduce((a, b) => Number(a) + Number(b)), // Soma
        memory.reduce((a, b) => Number(a) + Number(b)) / memory.length, // Média

        memory.length % 2 == 0?
        (temporaryMemoryCopy.sort((a, b) => a - b)[(memory.length -1) - memory.length / 2] + temporaryMemoryCopy.sort((a, b) => a - b)[memory.length - memory.length / 2]) / 2 :
        temporaryMemoryCopy.sort((a, b) => a - b)[(memory.length - 1) / 2], // Mediana

        getMode(memory), // Média

        valid == true? Math.round(getMMC(memory)): "INV", // MMC
        valid == true? getMDC(getFactors(memory)): "INV", // MDC
    ]
    
        for(let c= 0; c < measurements.length; c++) measurements[c].value = values[c] 
    }
};

//------------- Complex Calculations (MMC, MDC, MODE) ----------------//

//-------- MMC ---------//

function getMMC(numbers) {
    let prime = [2, 3, 5, 7, 11];
    let sequence = [1];
        for(let i = 0; !(numbers.every(a => a == 1)); /*Nada aqui*/ ){
            if(numbers.some(a => a % prime[i] == 0)) {
                numbers = numbers.map(a => a % prime[i] == 0? a / prime[i] : a);
                sequence.push(Number(prime[i]));
            }
            else if (i > 4) return sequence.concat(numbers.filter(a => a != 1)).reduce((a, b) => a * b)
            else i++;;
        }
    return sequence.reduce((a, b) => a * b);
}

//------- MDC ----------// 

const getFactors = (arr) => arr.map(a => toFactor([a, a]))
function toFactor([R, T]) {
    let prime = [2, 3, 5, 7, 11]
    let sequence = [1]
        for (let i = 0; !(Number(sequence.reduce((a,b) => {return a*b}, 1)) == Number(R)); /*Nada aqui*/ ) {
            if (T % prime[i] == 0) { sequence.push(Number(prime[i])); T /= prime[i]; i = 0; }
            else if(i == 5) {sequence.push(T); break;}
            else i++
        }
    sequence.shift();
    return sequence;
}

function getMDC(factors) {
    let uniqueFactors = []
        for (let c of factors) {
            for(let e of c) if(!(uniqueFactors.includes(e))) uniqueFactors.push(e)
        }
    let comumFactors = [1]
        for(let e of uniqueFactors) {
            factors.every(a => a.some(o => o == e ))? comumFactors.push(e): false;
        }
        return comumFactors.reduce((a, b) => a*b)
}

//--------- Mode  -----------//

function getMode(arr) {
    let relation = []
    let mode = []
    let uniqueNumbers = []

        arr.forEach(a => {if (!uniqueNumbers.includes(a)) uniqueNumbers.push(a)})
        let times = uniqueNumbers.map(n => arr.reduce((a, b) => { return a += b == n ? 1 : 0}, 0))
        for (let c = 0; c < uniqueNumbers.length; c++) relation.push({number: uniqueNumbers[c], quantity: times[c]})

        if (relation.every(n => n.quantity == 1)) {
            mode.push("Sem moda");
            return mode.join(", ");
        }
        for(let c of relation) if (c.quantity == Math.max(...times)) mode.push(`${c.number} (${c.quantity})`);
            return mode.join(", ")
}

//-----------List Generator-------------//

function listGenerator(listType, quantity) {
    while(select.children.length != 0) {
        select.removeChild(select.childNodes[select.childNodes.length - 1]);
        memory.pop();
    }
    if (listType == 0) for (let n = 0; n < quantity; n++) addOptimezed(Math.round(Math.random() * 1000) || 1);
    else for (let n = 1; n <= 100; n++) addOptimezed(n);
    updateValues();
}