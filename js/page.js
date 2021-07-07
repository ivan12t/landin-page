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
    
    let menuScroll = document.getElementById('body')    
    menuScroll.onscroll = scrollMenu()
    
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

const scrollMenu = function () {
    console.log("########")
    if (window.scrollY > 50){
    home = "Home"
    document.getElementById('welcomeText').innerHTML = home

    aboutMe = "About me"
    document.getElementById('iAmText').innerHTML = aboutMe

    contact = "Contact"
    document.getElementById('ivanText').innerHTML = contact
    }
}