const form =  document.querySelector("form");
const email = document.querySelector("#email");
const zip = document.querySelector("#zip")

const inputs = document.querySelectorAll("input");



inputs.forEach(element => {
    console.log(element)
    console.log(element.labels[0].textContent)

    element.addEventListener('focusout', () => (
        msg = customValidator(element)
        console.log(msg)
        ));
});

zip.addEventListener('focusout', (e)=>{
    msg = customValidator(zip);
    console.log(msg)
})

email.addEventListener('focusout', (e)=>{

    msg = customValidator(email)
    console.log(msg)
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


function customValidator(target) {
    validityState = target.validity;
    labelText = target.labels[0].textContent;
    var errorMsg = ""
    switch(true){
        case validityState.typeMismatch:
            errorMsg = `you must enter: ${labelText}`;
            
            break;
        case validityState.valueMissing:
            errorMsg = 'cannot be empty'
            break;
        case validityState.tooShort:
            errorMsg = "too short";
            break
        default:
            errorMsg = "";
            break;
    }

    return errorMsg;
}