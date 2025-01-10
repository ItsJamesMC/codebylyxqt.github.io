let passcode = "";
const correctPasscode = "1211";  
const targetUrl = "together.htm";  

function enterDigit(digit) {
    if (passcode.length < 4) {  
        passcode += digit;
        updateDisplay();  
    }

    if (passcode === correctPasscode) {
        window.location.href = targetUrl;
    }
}

function deleteLastDigit() {
    passcode = passcode.slice(0, -1);  
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('passcodeDisplay');
    displayElement.innerHTML = ""; 

    for (let i = 0; i < passcode.length; i++) {
        const digitElement = document.createElement('div');
        digitElement.classList.add('passcodeDigit');
        digitElement.textContent = passcode[i];
        displayElement.appendChild(digitElement);
    }

    for (let i = passcode.length; i < 4; i++) {
        const placeholderElement = document.createElement('div');
        placeholderElement.classList.add('passcodeDigit');
        placeholderElement.textContent = '-';
        displayElement.appendChild(placeholderElement);
    }
}

function submitPasscode() {
    if (passcode === correctPasscode) {
        window.location.href = targetUrl;
    } else {
        document.getElementById("heading").textContent = "Ano ba yan bebi ko, kung kailan mo ako sinagot";
        setTimeout(() => {
            document.getElementById("heading").textContent = "Enter Passcode";
        }, 2000);
        alert("Incorrect passcode!");
    }
}
