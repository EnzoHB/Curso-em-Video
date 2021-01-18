function update(lengthOfTabuada = 10) {
    let userInputs = document.getElementsByClassName(`userInputs`)
    let tabuada = document.getElementById(`output`)
    tabuada.innerHTML = ""
        let length = userInputs[1].value || lengthOfTabuada

        for(let x = 0; x <= length; x++) {
            let option = document.createElement("option")
                option.setAttribute("class", "element")
                option.text = `${userInputs[0].value || 0} x ${x} = ${userInputs[0].value * x}`
                        tabuada.appendChild(option)
        }
}

window.setInterval("update()", 500)