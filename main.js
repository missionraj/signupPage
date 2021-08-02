const form = document.getElementById("form")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener('submit', (e)=> { 
    e.preventDefault();

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();
    
    
    if (firstNameValue == '' || firstNameValue == null) {
        setErrorMessage(firstName,"this feild cannot be empty")
    }else { 
        removeError(firstName)
    }
    if (lastNameValue == '' || lastNameValue == null) {
        setErrorMessage(lastName,"this feild cannot be empty")
    }else { 
        removeError(lastName)
    }
    if (passwordValue == '' || passwordValue == null) {
        setErrorMessage(password,"this feild cannot be empty")
    }else { 
        removeError(password)
    }
    if (emailValue == '' || emailValue == null) {
        setErrorMessage(email,"this feild cannot be empty")
    }else { 
        removeError(email)
    }
})

function setErrorMessage (input, msg) { 
    const element = input.parentElement;
    element.className = "input__wrapper error";
    element.nextElementSibling.innerHTML = '<span> '+ msg + '</span>' 
}

function removeError(input) {
    const element = input.parentElement;
    element.className = "input__wrapper";
    element.nextElementSibling.innerHTML = ''; 
}