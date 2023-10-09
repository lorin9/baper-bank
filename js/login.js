// step-1: add event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
//step-2: get the email inside the input field
let emailField = document.getElementById('user-email')
let email = emailField.value

// step-3: get the password field
let passwordField = document.getElementById('user-password')
let password = passwordField.value;

// do not verify password like this
// step-4: verify email and password
if(email === 'sanjidaaker757@gmail.com' && password === 'secret'){
   window.location.href = 'bank.html'
}
else{
    alert('invalid user')
}
})