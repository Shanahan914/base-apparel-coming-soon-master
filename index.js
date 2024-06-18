document.addEventListener("DOMContentLoaded", function (){
    const btn = document.getElementsByTagName('button')[0];
    const inpt = document.getElementsByTagName('input')[0];
    const errorMessage = document.getElementById('error-message');
    const errorIcon = document.getElementById('error-icon');
    const emailDiv = document.getElementsByClassName('input-email')[0];
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    btn.addEventListener('click', function(e){
        e.preventDefault();
        if (inpt.value.match(emailRegex)){
            console.log('matches')
            inpt.value="";
            errorMessage.classList.remove('unhide');
            errorIcon.classList.remove('unhide-icon');
            emailDiv.classList.remove('error-border')
        } else {
            console.log('no match')
            errorMessage.classList.add('unhide');
            errorIcon.classList.add('unhide-icon');
            emailDiv.classList.add('error-border')
        }
    })


})