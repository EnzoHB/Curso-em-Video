function genderVerifyer() {
    let man = document.getElementsByName('checkboxes')[0]
    if (man.checked) return true
    else return false } 

function verify() {
    let birthYear = document.querySelector('#birthYear').value
    let currentYear = new Date().getFullYear()
    let userAge = currentYear - birthYear
    let gender;
        if (genderVerifyer() == true) gender = 'Homem'
        else gender = 'Mulher'
    document.querySelector('div#result').innerHTML = `Foi detectado <strong>${gender}</strong> de <strong>${userAge} anos</strong>`

    let image = document.getElementById('photores')
        if ( userAge < 3) image.setAttribute('src', 'PNG/bebe.png')
        else if ( userAge < 15 && gender == `Homem`) image.setAttribute('src', 'PNG/adolescentehomem.png')
        else if ( userAge < 15 && gender == `Mulher`) image.setAttribute('src', 'PNG/adolescentemulher.png')
        else if ( userAge < 60 && gender == 'Homem') image.setAttribute('src', 'PNG/adulto.png')
        else if ( userAge < 60 && gender == 'Mulher') image.setAttribute('src', 'PNG/adulta.png')
        else if ( gender == 'Homem') image.setAttribute('src', 'PNG/idoso.png')
        else image.setAttribute('src', 'PNG/idosa.png')

}