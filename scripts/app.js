const secret = document.querySelector('#learn-more')

let counter = 0;

secret.addEventListener('click', () => {
    counter++
    if (counter === 10) {
        if (parseInt(prompt('Enter password')) === 1234) {
            alert('Darkmode on')
            const bg = document.querySelector('.header')
            bg.style.backgroundImage = 'none'
            bg.style.backgroundColor = '#0d0d0f'
            document.querySelector('#delete-later').innerHTML = 'KEEP QUIET HE IS GOING...'
            document.querySelector('.brand-name').innerHTML = '.#(/4;$2^%'
        } else {
            alert('Incorrect password')
        }
        counter = 0
    }
})