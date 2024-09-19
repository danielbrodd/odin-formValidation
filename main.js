const form =  document.querySelector("form");

const inputs = document.querySelectorAll("input");
const pwd = document.querySelector("#pwd");
const confpwd = document.querySelector("#cnfPwd");
const error = document.querySelector(".error");


inputs.forEach(element => {
    
    element.addEventListener('focusout', () => {
        let msg = customValidator(element)
        console.log(msg)
        error.innerHTML = msg
        if (element.id = "cnfPwd") {
            if (pwd != cnfPwd) {
                msg = "Passwords do not match";
            }
        }
    });
});

zip.addEventListener('focusout', (e)=>{
    msg = customValidator(zip);

})

email.addEventListener('focusout', (e)=>{

    msg = customValidator(email)


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