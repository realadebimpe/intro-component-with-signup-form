const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('submit')

button.addEventListener('click', ()=>{
    checkInput()
})

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInput();
// });

function checkInput (){
    // get the value of the inputs
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;
    if(firstnameValue === ''){
        // show error
        // add error class
        setErrorFor( firstname, "First name cannot be empty")

    }else{
        // add success class
        setSuccessFor(firstname);
    }
    
    if(lastnameValue === ''){
         // show error
        // add error class
        setErrorFor( lastname, "Last name cannot be empty")
    }else{
        // add success class
        setSuccessFor(firstname);
    }

    if(emailValue === ''){
        
       setErrorFor( email, "email cannot be empty")
   }else if(!isEmail(emailValue)){
    setErrorFor( email, "Email is not be valid")
   } else{
       setSuccessFor(email);
   } 

   if(passwordValue === ''){
   setErrorFor( password, "Password cannot be empty")
} else{
   setSuccessFor(password);
} 
   

}

function setErrorFor(input, message){
    const formControl = input.parentElement; //form-control 
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; //error
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// const form = document.getElementById('#form')

// formEl.addEventListener('submit', e => {
//     e.preventDefault()

//     const firstName = form['firstname'].value;
//     const lastName = form['lastname'].value;
//     const email = form['email'].value;
//     const password = form['password'].value;

//     if (firstName === '') {
//         addError('firstname', 'First name cannot be empty')
//     }
//     else {
//         removeError('firstname')
//     }

//     if (lastName === '') {
//         addError('lastname', 'Last name cannot be empty')
//     }
//     else {
//         removeError('lastname')
//     }

//     if (email === '') {
//         addError('email', 'Email cannot be empty')
//     }
//     else if (!isValid(email)) {
//         addError('email', 'Email is not valid')
//     }
//     else {
//         removeError('email')
//     }

//     if (password === '') {
//         addError('password', 'Password cannot be empty')
//     }
//     else {
//         removeError('password')
//     }

// })


// function addError(field, messgae) {
//     const form = formEl[field].parentElement
//     form.classList.add('error')

//     const small = form.querySelector('small')
//     small.innerText = messgae
// }

// function removeError(field) {
//     const form = formEl[field].parentNode
//     form.classList.remove('error')
// }

// function isValid(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }