const email = document.querySelector("#email")


email.addEventListener('focusout', (e)=>{
    console.log("focus out")

    if (email.validity.typeMismatch) {
        email.setCustomValidity("and it has to be an email");
        
    }else if (email.validity.valueMissing){
        email.setCustomValidity("you must enter something")
    }
    else if (email.checkValidity()){
        console.log("valid")
    } else {
        console.log("unknown")
    }
    email.reportValidity()
})