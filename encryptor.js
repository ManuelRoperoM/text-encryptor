const textChange = () => {
    const textArea = document.getElementById('text-user').value
    const encryptButton = document.getElementById('encrypt')
    const unencryptButton = document.getElementById('unencrypt')
    const regex = /^[a-z\s]*$/
    if (!regex.test(textArea)) {
        encryptButton.disabled = true
        unencrypt.disabled = true
        encryptButton.classList.add('disabled-button')
        unencrypt.classList.add('disabled-button')
    }else{
        encryptButton.disabled = false
        unencrypt.disabled = false
        encryptButton.classList.remove('disabled-button')
        unencrypt.classList.remove('disabled-button')
    }
}

const encryptor = () => {
    const textArea = document.getElementById('text-user').value
    console.log('clickEncriptar',textArea);
}
