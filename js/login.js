// step 1. Add click event handler with the submit button.
document.getElementById('btn-submit').addEventListener('click', function(){

    //step 2. get the email address inside the email input field
const emailField = document.getElementById('user-email');
const email = emailField.value;

//  step 3. get password
// set id on the html element
// get the element
// get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
if(email === 'developer@hero.com' && password === 'Krishna'){
    window.location.href = 'bank.html'
}
else{
    alert('Tui Password Vule gechis!! Toke Tejjo sontan ghosona korlam.')
}
})
