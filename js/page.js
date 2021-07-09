window.onload = function () {
    menu()
    let cambiaText = document.getElementById('welcomeText')
    cambiaText.addEventListener('mouseover', animacion)
    cambiaText.addEventListener('mouseout', animacionOff)

    let iAmText = document.getElementById('iAmText')
    iAmText.addEventListener('mouseover', iAmOn)
    iAmText.addEventListener('mouseout', iAmOff)

    let ivanText = document.getElementById('ivanText')
    ivanText.addEventListener('mouseover', ivanOn)
    ivanText.addEventListener('mouseout', ivanOff)
    
    let one = document.getElementById('uno')
    one.addEventListener('mouseover', menuShrinkOff)
    let two = document.getElementById('dos')
    two.addEventListener('mouseover', menuShrink)
    let three = document.getElementById('tres')
    three.addEventListener('mouseover', menuShrink)

    let mail = document.getElementById("inputEmail")
    let addres = document.getElementById("inputStreet")
    let addresNumber = document.getElementById("inputAddresNumber")
    let name = document.getElementById("inputName")
    let phone = document.getElementById("inputPhoneNumber")
    let message = document.getElementById("inputMessage")

    mail.addEventListener("change", checkMail)
    mail.addEventListener("focus", cleaner)
    addres.addEventListener("change", inputBlur)
    addres.addEventListener("focus", cleaner)
    addresNumber.addEventListener("change", inputBlurNumbrs)
    addresNumber.addEventListener("focus", cleaner)
    name.addEventListener("change", inputBlurName)
    name.addEventListener("focus", cleaner)
    phone.addEventListener("change", inputBlurNumbrs)
    phone.addEventListener("focus", cleaner)
    message.addEventListener("change", inputBlur)
    message.addEventListener("focus", cleaner)
    
    let form = document.getElementById("contact-form")
    let btnSend = document.getElementById("formSend")
    form.addEventListener('submit', sendContact)

    
}



// ---------- funciones -----
const menu = function () {
        
    let element = document.getElementById('menu')
    element.classList.add('animate__animated', 'animate__fadeInUp');
    element.style.setProperty('--animate-duration', '2.5s');

}


const animacion = function () {
    home = "Home"
    document.getElementById('welcomeText').innerHTML = home
    this.style.color = "#fff600"
}
const animacionOff = function () {
    welcome = 'Welcome'
    document.getElementById('welcomeText').innerHTML = welcome
    this.style.color = "#f3f9a7"
}
const iAmOn = function () {
    about = "About me"
    document.getElementById('iAmText').innerHTML = about
    this.style.color = "rgb(197, 136, 255)"
}
const iAmOff = function () {
    iAm = 'I am'
    document.getElementById('iAmText').innerHTML = iAm
    this.style.color = "rgb(228, 201, 253)"
}
const ivanOn = function () {
    contact = "Contact"
    document.getElementById('ivanText').innerHTML = contact
    this.style.color = "rgb(197, 136, 255)"
}
const ivanOff = function () {
    home = 'Ivan'
    document.getElementById('ivanText').innerHTML = home
    this.style.color = "rgb(228, 201, 253)"
}

const scrollMenu = function (event) {
    console.log(event)
    
    if (window.scrollY > 10){
    home = "Home"
    document.getElementById('welcomeText').innerHTML = home

    aboutMe = "About me"
    document.getElementById('iAmText').innerHTML = aboutMe

    contact = "Contact"
    document.getElementById('ivanText').innerHTML = contact
    }
}

const menuShrink = function (){
    let menu =  document.getElementById('menu')
    menu.classList.remove('navbar')
    menu.classList.add('shrink')
}

const menuShrinkOff = function (){
    let menu =  document.getElementById('menu')
    menu.classList.remove('shrink')
    menu.classList.add('navbar')
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

//////////////////////////////////

///////validation form///////////
const esEmail = function (value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
}
const inputBlur = function (event) {
    if (this.value == "" || this.value == " ") {
        this.style.color = "red"
        document.getElementById("alert").innerHTML = "You must provide data"
    }
    else if (!validarString(this.value)) {
        document.getElementById("alert").innerHTML = "You must put valid data"
    }

}
function checkMail(event) {
    if (this.value == "" || this.value == " ") {
        document.getElementById("alert").innerHTML = "You must provide data"
    }
    else if (this.getAttribute("type") == "email" && !esEmail(this.value)) {
        document.getElementById("alert").innerHTML = "Wrong email"
    }
}

const inputBlurNumbrs = function (event) {
    if (this.value == "" || this.value == " ") {
        document.getElementById("alert").innerHTML = "You must provide data"
    }
    else if (!validarNumber(this.value)) {
        document.getElementById("alert").innerHTML = "You must put numbers"

    }
}
const inputBlurName = function (event) {
    if (this.value == "" || this.value == " ") {
        document.getElementById("alert").innerHTML = "You must provide data"
    }
    else if (!validarString(this.value)) {
        document.getElementById("alert").innerHTML = "You must put letters"
    }
}



const cleaner = function (event) {
   let alert = document.getElementById("alert")
    if (alert == "You must provide data" || alert == "You must put letters" || alert == "You must put numbers" || alert == "Wrong email" || alert == "You must put valid data") {
        
        document.getElementById("alert").innerHTML = ""

    }
}




function validarNumber(cadenaAnalizar) {
    for (var i = 0; i < cadenaAnalizar.length; i++) {
        var caracter = cadenaAnalizar.charCodeAt(i);
        if ((caracter != 32) && (caracter < 48 || caracter > 57)) {
            return false;
        }
    }
    return true
}

function validarString(cadenaAnalizar) {
    for (var i = 0; i < cadenaAnalizar.length; i++) {
        var caracter = cadenaAnalizar.charCodeAt(i);
        if ((caracter != 32) && (caracter < 65 || caracter > 90) && (caracter < 97 || caracter > 122)) {
            return false;
        }

    }
    return true
}
/////////////// validar form ///////////////
const sendContact = function (event) {

    if (!checkForm()) {
        // si no pasa las validaciones, entonces no lo dejamos hacer el submit
        // recordar que el preventDefault de un evento previene que el evento se siga ejecutando
        // por ejemplo en este caso que el botón haría un submit del form, si nosotros
        // le hacemos preventDefault, entonces no hace el submit (es decir, no envía el form)
        console.log('prevengo el submit porque hubo errores')
        event.preventDefault()
        document.getElementById("alert").innerHTML = "Something went wrong"
    }

}

const checkForm = function () {
    let mail = document.getElementById("mail")
    let addres = document.getElementById("addres")
    let name = document.getElementById("name")
    let subject = document.getElementById("subject")
    let phone = document.getElementById("phone")
    let message = document.getElementById("message")
    if (!esEmail(email.value)) {
        return false
    }
    else if (addres.value === "" || addres.value === " " || !validarString(address.value)) {
        return false
    }
    else if (name.value === "" || name.value === " " || !validarString(namE.value)) {
        return false
    }
    else if (subject.value === "" || subjecet.value === " " || !validarString(subjecT.value)) {
        return false
    }
    else if (phone.value === "" || phone.value === " " || !validarNumber(phonE.value)) {
        return false
    }
    else if (message.value === "" || message === " " || !validarString(messagE.value)) {
        return false
    }

    return true

}