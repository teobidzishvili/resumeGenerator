let sakheli = document.getElementById("sakheli")
let gvari = document.getElementById("gvari")
let name_label = document.getElementById("name-label")
let gvari_label = document.getElementById("gvari_label")
let name_error = document.getElementById("name_error")
let surname_error = document.getElementById("surname_error")
let name_done = document.getElementById("name_done")
let surname_done = document.getElementById("surname_done")

// Regular expression to match Georgian letters
let regEx = /^[\u10A0-\u10FF]+$/

sakheli.addEventListener("input", function() {
    if (!regEx.test(sakheli.value) || sakheli.value.length<2) {
        sakheli.classList.add("border-3", "border-danger")
        name_label.classList.add("text-danger")
        name_error.classList.remove("d-none")
        name_done.classList.add("d-none")
        return false;
    }else{
        sakheli.classList.remove("border-3", "border-danger")
        name_label.classList.remove("text-danger")
        name_error.classList.add("d-none")
        sakheli.classList.add("border-3", "border-success")
        name_done.classList.remove("d-none")
        return true;
    }
})

gvari.addEventListener("input", function(){
    if (!regEx.test(gvari.value) || gvari.value.length<2) {
        gvari.classList.add("border-3", "border-danger")
        gvari_label.classList.add("text-danger")
        surname_error.classList.remove("d-none")
        surname_done.classList.add("d-none")
        return false;
    }else{
        gvari.classList.remove("border-3", "border-danger")
        gvari_label.classList.remove("text-danger")
        surname_error.classList.add("d-none")
        gvari.classList.add("border-3", "border-success")
        surname_done.classList.remove("d-none")
        return true;
    }
})

let aboutMe = document.getElementById("aboutMe")
let about = document.getElementById("about")

aboutMe.addEventListener("input", function(){
    about.classList.remove("d-none")
    if (aboutMe.value==0){
        about.classList.add("d-none")
    }
})

let email = document.getElementById("email")
let email_label = document.getElementById("email_label")
let email_error = document.getElementById("email_error")
let email_done = document.getElementById("email_done")
let phone_done = document.getElementById("phone_done")
let at = document.getElementById("at")




email.addEventListener("input", function() {
    at.classList.remove("d-none")
    if (email.value==0){
        at.classList.add("d-none")
    }
    if (!email.value.endsWith("@redberry.ge")) {
        email_error.classList.remove("d-none")
        email_label.classList.add("text-danger")
        email.classList.add("border-3", "border-danger")
        email_done.classList.add("d-none")
        return false
    }else {
        email_error.classList.add("d-none")
        email_label.classList.remove("text-danger")
        email.classList.remove("border-3", "border-danger")
        email.classList.add("border-3", "border-success")
        email_done.classList.remove("d-none")
        return true
    }
})

let phone_number = document.getElementById("phone_number")
let phone_label = document.getElementById("phone_label")
let phone_error = document.getElementById("phone_error")
let txt

phone_number.addEventListener("keyup", function () {
    txt = this.value;
    if (
      txt.length == 4 ||
      txt.length == 8 ||
      txt.length == 11 ||
      txt.length == 14
    )
      this.value = this.value + " ";
  });

phone_number.addEventListener("input", function() {
    let phoneRegEx = /^(\+995)?(79\d{7}|5\d{8})$/
    if (!phoneRegEx.test(phone_number.value)) {
        phone_error.classList.remove("d-none")
        phone_label.classList.add("text-danger")
        phone_number.classList.add("border-3", "border-danger")
        phone_done.classList.add("d-none")
        return false
    } else {
        phone_error.classList.add("d-none")
        phone_label.classList.remove("text-danger")
        phone_number.classList.remove("border-3", "border-danger")
        phone_number.classList.add("border-3", "border-success")
        phone_done.classList.remove("d-none")
        return true
    }
})


let nextButton = document.getElementById("nextButton")
let fill = document.getElementById("fill")


nextButton.addEventListener("click", function(event) {
    event.preventDefault()
    if (form.checkValidity()) {
        fill.classList.add('d-none')
    }
})

let positionRegEx = /^[0-9a-zA-Z.-]{2,30}$/
let position = document.getElementById('position')
let position_label = document.getElementById('position_label')
let position_error = document.getElementById('position_error')
let position_done = document.getElementById('position_done')
let employer = document.getElementById('employer')
let employer_label = document.getElementById('employer_label')
let employer_error = document.getElementById('employer_error')
let employer_done = document.getElementById('employer_done')


position.addEventListener("input", function() {
    if (!positionRegEx.test(position.value) || position.value.length<2) {
        position.classList.add("border-3", "border-danger")
        position_label.classList.add("text-danger")
        position_error.classList.remove("d-none")
        position_done.classList.add("d-none")
        return false;
    }else{
        position.classList.remove("border-3", "border-danger")
        position_label.classList.remove("text-danger")
        position_error.classList.add("d-none")
        position.classList.add("border-3", "border-success")
        position_done.classList.remove("d-none")
        return true;
    }
})

employer.addEventListener("input", function() {
    if (!positionRegEx.test(employer.value) || employer.value.length<2) {
        employer.classList.add("border-3", "border-danger")
        employer_label.classList.add("text-danger")
        employer_error.classList.remove("d-none")
        employer_done.classList.add("d-none")
        return false;
    }else{
        employer.classList.remove("border-3", "border-danger")
        employer_label.classList.remove("text-danger")
        employer_error.classList.add("d-none")
        employer.classList.add("border-3", "border-success")
        employer_done.classList.remove("d-none")
        return true;
    }
})




let degrees = document.getElementById('degrees')

degrees.addEventListener('click', chooseDegree)

function chooseDegree(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://resume.redberryinternship.ge/api/degrees', true)
    xhr.onload = function(){
        if(this.status == 200){
            let users = JSON.parse(this.responseText)
            let output = ''
            for(let i in users){
                output +=
                    '<option>' +users[i].title+ '</option>'
            }
            degrees.innerHTML = output
        }
    }
    xhr.send()
}