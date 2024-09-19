const email = document.querySelector("#email")


email.addEventListener('focusout', (e)=>{

    console.log(email.validity)

    const validityState = email.validity

    switch(true) {
        case validityState.valueMissing:
            email.setCustomValidity("You must enter something")
            break;
        case validityState.typeMismatch:
            email.setCustomValidity("And it has to be an email. Didn't I say that?")
            break;
        default:
            console.log("Valid")
    }
    console.log(email.validationMessage)
    /* if (email.validity.typeMismatch) {
        email.setCustomValidity("and it has to be an email");
        
    }else if (email.validity.valueMissing){
        email.setCustomValidity("you must enter something")
    }
    else if (email.checkValidity()){
        console.log("valid")
    } else {
        console.log("unknown")
    }
    email.reportValidity() */
})