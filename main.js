const form =  document.querySelector("form");

const inputs = document.querySelectorAll("input");
const pwd = document.querySelector("#pwd");
const confpwd = document.querySelector("#cnfPwd");
const error = document.querySelector(".error");

const validCountries = ["USA","SWEDEN", "NIGERIA"];

inputs.forEach(element => {
    console.log(element.name)
    element.addEventListener('focusout', () => {
        var validityState = element.validity
        console.log(validityState)

        var name = element.name
        

        

        switch (name) {
            case "email":
                console.log(`this is: ${name}`);
                if (validityState.valueMissing) {
                    console.log("missing")
                } else if (validityState.typeMismatch) {
                    console.log("not an email")
                } else if (validityState.valid) {
                    console.log("valid")
                } else {
                    console.log("unkown error")
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
                break;
        
            default:
                console.log("def")
                break;
        }
       
    });
});




// function customValidator(target) {
//     validityState = target.validity;
//     labelText = target.labels[0].textContent;
//     var errorMsg = ""
//     switch(true){
//         case validityState.typeMismatch:
//             errorMsg = `you must enter: ${labelText}`;
            
//             break;
//         case validityState.valueMissing:
//             errorMsg = 'cannot be empty'
//             break;
//         case validityState.tooShort:
//             errorMsg = "too short";
//             break
//         default:
//             errorMsg = "";
//             break;
//     }

//     return errorMsg;
// }