const email = document.getElementById('email');
const form = document.getElementById('form');
const errorText = document.getElementById('error-message');
const errorIcon = document.getElementById('error-icon');
const inputContainer = document.getElementById('input_container');

form.addEventListener('submit', e => {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (regexMatch) {
      errorEmail.textContent = '';
    } else {
      e.preventDefault();
      errorText.textContent = 'Please provide a valid email';
      errorIcon.style.visibility = 'visible';
      inputContainer.style.border = '2px solid var(--sft-red)';
    }
  } else {
    e.preventDefault();
    errorText.textContent = 'You must type in an email';
    errorIcon.style.visibility = 'visible';
    inputContainer.style.border = '2px solid var(--sft-red)';
  }
});