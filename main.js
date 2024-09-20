const form =  document.querySelector("form");

const inputs = document.querySelectorAll("input");
const pwd = document.querySelector("#pwd");
const confpwd = document.querySelector("#cnfPwd");
const error = document.querySelector(".error");
const validSubmission = false

const validCountries = ["USA","SWEDEN", "NIGERIA"];
inputs.forEach(element => {
    element.addEventListener('focusout', () => {
    validationSwitch(element);
        
    });
});

form.addEventListener('submit', (event) =>{

    inputs.forEach(element => {
        if(!element.checkValidity()){
            validationSwitch(element);
            console.log('not valid for submission')
            event.preventDefault();
        }

    })
})

function validationSwitch(element) {
    let name = element.name;
    let validityState = element.validity;
    switch (name) {
        case "email":
            console.log(`this is: ${name}`);
            if (validityState.valid) {
                console.log("Valid");
            } else {
                if (validityState.valueMissing) {
                    console.log("missing")
                } else if (validityState.typeMismatch) {
                    console.log("not an email")
                } else {
                    console.log("unkown error")
                }
                
            }

            break;
        case "country":
            console.log(`this is: ${name}`);

            if(validityState.valueMissing) {
                console.log("missing");
            } else if (!validCountries.includes(element.value.toUpperCase())){
                console.log("not a country")
            } else {
                console.log("Valid")
            }
            break;
        case "zipCode":
            console.log(`this is: ${name}`);
            let zip = element.value;
            if (zip.match("[a-zA-z+]")) {
                console.log("not a number")
            } else {
                let zipNumber = parseInt(zip)
                console.log(typeof zipNumber);
            }
            
            break;
        case "password":
            console.log(`this is: ${name}`);
            break;
        case "confirmPassowrd":
            console.log(`this is: ${name}`);
            console.log(element.previousElementSibling.previousElementSibling)
            if (!(element.value === element.previousElementSibling.previousElementSibling.value)) {
                console.log("don't match")
                element.setCustomValidity("Not valid");
                element.reportValidity();
            } else {
                console.log("match")
            }
            break;
    
        default:
            console.log("def")
            break;
    }
}