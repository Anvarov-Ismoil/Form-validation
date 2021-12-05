const text = document.querySelector('#text')
const number = document.querySelector('#num')
const email = document.querySelector('#mail')
const block = document.querySelectorAll('.input-box')
const btn = document.querySelector('button')

// Text
text.addEventListener('input', ()=>{
    const textValue = text.value

    if(textValue.length < 5 || textValue.length > 20){
        block[0].classList.add('invalid')
        block[0].classList.remove('valid')
        block[1].style.display = 'none'
    } else{
        block[0].classList.add('valid')
        block[0].classList.remove('invalid')
        block[1].style.display = 'block'
    }
    
    if(textValue == ''){
        block[0].classList.remove('valid', 'invalid')
        block[1].style.display = 'none'
    }
})

// Number
number.addEventListener('keypress', e =>{
    if(e.keyCode < 48 || e.keyCode > 57){
        e.preventDefault()
        block[1].classList.add('invalid')
        block[1].classList.remove('valid')
        block[2].style.display = 'none'
    } else{
        block[1].classList.remove('invalid')
        block[1].classList.add('valid')
        block[2].style.display = 'block'
    }
})

number.addEventListener('input', ()=>{
    if(number.value == ''){
        block[1].classList.remove('valid', 'invalid')
        block[2].style.display = 'none'
    }
})

// Mail
email.addEventListener('input', ()=>{
    const emailValue = email.value
    const pattern = email.getAttribute('pattern')
    if(emailValue.match(pattern)){
        block[2].classList.add('valid')
        block[2].classList.remove('invalid')
        btn.style.display = 'block'
    } else{
        block[2].classList.remove('valid')
        block[2].classList.add('invalid')
        btn.style.display = 'none'
    }

    if(emailValue == ''){
        btn.style.display = 'none'
    }
})