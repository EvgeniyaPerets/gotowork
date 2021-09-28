const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePhone = inputText => {
    const inputStripped = inputText.replace(/\D/g,'')
    const phoneReg = /^[0-9()-.\s]+$/
    return phoneReg.test(inputText) && inputStripped.length >= 10
}

const validatePass = password => {
    const res = [false, false, false]
    const regexL = /^(?=.*[a-z]).+$/; // Lowercase character pattern
    const regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

    if( password.length >= 8 ) {
        res[0] = true
    }

    if( regexL.test(password) ) {
        res[1] = true
    }

    if( regex.test(password) ) {
        res[2] = true
    }

    return res.indexOf(false) === -1
}