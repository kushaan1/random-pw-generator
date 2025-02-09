function generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowerChars = "abcdefghijklmopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "1234567890";
    const symbolsChars = "!@#$%&*()_+=?|{}";
    
    let password = "";
    let allChars = "";

    allChars = includeLowercase ? allChars+=lowerChars : allChars += "";
    allChars = includeUppercase ? allChars+=upperChars : allChars += "";
    allChars = includeNumbers ? allChars+=numbersChars : allChars += "";
    allChars = includeSymbols ? allChars+=symbolsChars : allChars += "";
    if(allChars.length === 0){
        alert("Please select at least one category");
    }
    if(passwordLength == 0){
        alert("Password length cannot be 0");
    }
    for(let i = 0; i < passwordLength; i++){
        let randIndex = Math.trunc(Math.random()*allChars.length)+1;
        password += allChars[randIndex];
    }
    return password;
}
function checkReq(event){
    event.preventDefault();

    const passwordLength = document.getElementById('pwLength').value;
    let includeLowercase = false;
    let includeUppercase = false;
    let includeNumbers = false;
    let includeSymbols = false;

    const lowerCheck = document.getElementById('lowerCheck');
    const upperCheck = document.getElementById('upperCheck');
    const numberCheck = document.getElementById('numberCheck');
    const symbolCheck = document.getElementById('symbolCheck');
    if(lowerCheck.checked){
        includeLowercase = true;
    }
    if(upperCheck.checked){
        includeUppercase = true;
    }
    if(numberCheck.checked){
        includeNumbers = true;
    }
    if(symbolCheck.checked){
        includeSymbols = true;
    }

    const password = generatePassword(passwordLength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols);
        console.log(password);
    const pwDisplay = document.getElementById('passwordSpace');
    pwDisplay.textContent = password;
}


