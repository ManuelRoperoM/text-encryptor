const textChange = () => {
    const textArea = document.getElementById('text-user').value
    const encryptButton = document.getElementById('encrypt')
    const unencryptButton = document.getElementById('unencrypt')
    const regex = /^[a-z\s]*$/
    if (!regex.test(textArea)) {
        encryptButton.disabled = true
        unencryptButton.disabled = true
        encryptButton.classList.add('disabled-button')
        unencryptButton.classList.add('disabled-button')
    }else{
        encryptButton.disabled = false
        unencryptButton.disabled = false
        encryptButton.classList.remove('disabled-button')
        unencryptButton.classList.remove('disabled-button')
    }
}

function disabled(){
    document.getElementById('doll-img').classList.add('hidden')
    document.getElementById('pictuare-subtitle').classList.add('hidden')
    document.getElementById('pictuare-parrafo').classList.add('hidden')
    document.getElementById('encrypted-message').classList.remove('hidden')
}
function enabled(){
    document.getElementById('doll-img').classList.remove('hidden')
    document.getElementById('pictuare-subtitle').classList.remove('hidden')
    document.getElementById('pictuare-parrafo').classList.remove('hidden')
    document.getElementById('encrypted-message').classList.add('hidden')
}

const encryptor = () => {
    const textArea = document.getElementById('text-user').value
    let encryptText = '';
    if (textArea) {
        const encryptDcitionary = {
            'a':'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat' 
        }
        for(let i = 0; i < textArea.length; i++){
            if (encryptDcitionary.hasOwnProperty(textArea[i])) {
                encryptText += encryptDcitionary[textArea[i]]
            }else{
                encryptText +=textArea[i]
            }
        }
        disabled() //desahbilitar elementos
        const encryptedMssge = document.getElementById('encrypted-message')
        encryptedMssge.style.display = 'flex'
        encryptedMssge.innerHTML = encryptText
        console.log(encryptText)
    }else{
        console.log('texto vacio');
        enabled()
    }
}

const decryptor = () => {
    const textArea = document.getElementById('text-user').value
    if (textArea) {
        let decrypt = ''
        for (let i = 0; i < textArea.length; i++) {
            console.log(textArea[i]);
            if(textArea[i] == 'a'){
                decrypt += 'a'
                i++
            }else if(textArea[i] == 'e'){
                decrypt += 'e'
                i = i+4
            }else if(textArea[i] == 'i'){
                decrypt += 'i'
                i = i+3
            }else if(textArea[i] == 'o'){
                decrypt += 'o'
                i = i+3
            }else if(textArea[i] == 'u'){
                decrypt += 'u'
                i = i+3
            }else{
                decrypt += textArea[i]
            }
        }
        disabled()
        const encryptedMssge = document.getElementById('encrypted-message')
        encryptedMssge.style.display = 'flex'
        encryptedMssge.innerHTML = decrypt
    }else{
        enabled()
    }
}
