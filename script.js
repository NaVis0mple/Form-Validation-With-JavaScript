function showError (target, errortext) {
  if (target.validity.valueMissing) {
    errortext.textContent = 'need input'
  } else if (target.validity.typeMismatch) {
    errortext.textContent = `please enter correct ${target.id}`
  } else if (target.validity.patternMismatch) {
    errortext.textContent = 'wrong pattern'
  }
}
function setInvalidCss (input) {
  input.classList.add('invalid')
}
function unSetInvalidCss (input) {
  input.classList.remove('invalid')
}
const email = document.getElementById('email')
const emailerror = document.getElementById('emailerror')
function emailCheck () {
  if (email.validity.valid) {
    emailerror.textContent = ''
    unSetInvalidCss(email)
  } else {
    showError(email, emailerror)
    setInvalidCss(email)
  }
}
email.addEventListener('blur', () => emailCheck())

//zip

const country = document.getElementById('country')
const zip = document.getElementById('zip')
const ziperror = document.getElementById('ziperror')
function checkZip () {
  const countryZip = {
    jp: [
      /^\d{3}-?\d{4}$/,
      'jp zip must have 7 digits, e.g. 123-4567 or 1234567'
    ],
    cn: [/^\d{3}-?\d{3}$/, 'cn zip must have 6 digits, e.g.123456 or 123-456'],
    kr: [/^\d{3}-?\d{2}$/, 'kr zip must have 5 digits, e.g. 123-56 or 12345'],
    tw: [
      /^\d{5}-?\d{3}$/,
      'tw zip must have 8 digits, e.g. 12345-678 or 12345678'
    ]
  }

  if (countryZip[country.value][0].test(zip.value)) {
    ziperror.textContent = ''
    unSetInvalidCss(zip)
  } else {
    ziperror.textContent = `${countryZip[country.value][1]}`
    setInvalidCss(zip)
  }
}
zip.addEventListener('blur', () => checkZip())

//password

const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('repassword')
const passworderror = document.getElementById('passworderror')
function passwordMatch () {
  if (
    password.validity.valueMissing ||
    passwordConfirmation.validity.valueMissing
  ) {
    passworderror.textContent = 'need input'
    setInvalidCss(password)
    setInvalidCss(passwordConfirmation)
  } else if (password.value !== passwordConfirmation.value) {
    passworderror.textContent = 'not match'
    setInvalidCss(passwordConfirmation)
  } else {
    passworderror.textContent = ''
    unSetInvalidCss(password)
    unSetInvalidCss(passwordConfirmation)
  }
}
passwordConfirmation.addEventListener('blur', () => passwordMatch())

//form submit control

const form = document.getElementById('myform')
function handleFormSubmission (e) {
  if (!email.validity.valid || emailerror.textContent !== '') {
    e.preventDefault()
    emailCheck()
    showError(email, emailerror)
  }
  if (!zip.validity.valid || ziperror.textContent !== '') {
    e.preventDefault()
    checkZip()
  }
  if (
    !password.validity.valid ||
    !passwordConfirmation.validity.valid ||
    passworderror.textContent !== ''
  ) {
    e.preventDefault()
    passwordMatch()
  }
}

form.addEventListener('submit', e => handleFormSubmission(e))
