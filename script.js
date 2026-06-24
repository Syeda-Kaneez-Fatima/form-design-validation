// ===================================================
// script.js — Form Validation Logic
// Project 4: Form Design & Validation
// DecodeLabs Frontend Internship · Batch 2026
// ===================================================


// ---------------------------------------------------
// HELPER FUNCTIONS
// Yeh functions baar baar use hote hain
// ---------------------------------------------------

// Input ko ERROR state mein dalta hai (red border + error message)
function showError(inputId, errorId, successId) {
  document.getElementById(inputId).classList.add('error');
  document.getElementById(inputId).classList.remove('valid');
  document.getElementById(errorId).classList.add('show');
  if (successId) {
    document.getElementById(successId).classList.remove('show');
  }
}

// Input ko SUCCESS state mein dalta hai (green border + success message)
function showSuccess(inputId, successId, errorId) {
  document.getElementById(inputId).classList.add('valid');
  document.getElementById(inputId).classList.remove('error');
  document.getElementById(successId).classList.add('show');
  if (errorId) {
    document.getElementById(errorId).classList.remove('show');
  }
}

// Dono states clear karta hai (neutral/default state)
function clearState(inputId, errorId, successId) {
  const el = document.getElementById(inputId);
  el.classList.remove('error', 'valid');
  document.getElementById(errorId).classList.remove('show');
  if (successId) {
    document.getElementById(successId).classList.remove('show');
  }
}


// ---------------------------------------------------
// 1. NAME VALIDATION
//    Rule: Minimum 3 characters hone chahiye
// ---------------------------------------------------
function validateName() {
  const val = document.getElementById('fullName').value.trim();

  // Agar khali hai to clear karo, koi message mat dikhao
  if (val === '') {
    clearState('fullName', 'nameError', 'nameSuccess');
    return false;
  }

  if (val.length < 3) {
    showError('fullName', 'nameError', 'nameSuccess');
    return false;
  } else {
    showSuccess('fullName', 'nameSuccess', 'nameError');
    return true;
  }
}


// ---------------------------------------------------
// 2. PHONE VALIDATION
//    Rule: Sirf digits, exactly 11 numbers (Pakistan format)
// ---------------------------------------------------
function validatePhone() {
  const val = document.getElementById('phone').value.trim();

  if (val === '') {
    clearState('phone', 'phoneError', 'phoneSuccess');
    return false;
  }

  // Regex: start se end tak sirf 11 digits
  const phoneRegex = /^[0-9]{11}$/;

  if (!phoneRegex.test(val)) {
    showError('phone', 'phoneError', 'phoneSuccess');
    return false;
  } else {
    showSuccess('phone', 'phoneSuccess', 'phoneError');
    return true;
  }
}


// ---------------------------------------------------
// 3. EMAIL VALIDATION
//    Rule: Standard email format hona chahiye (user@domain.com)
// ---------------------------------------------------
function validateEmail() {
  const val = document.getElementById('email').value.trim();

  if (val === '') {
    clearState('email', 'emailError', 'emailSuccess');
    return false;
  }

  // Regex: @ aur . dono hone chahiye
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(val)) {
    showError('email', 'emailError', 'emailSuccess');
    return false;
  } else {
    showSuccess('email', 'emailSuccess', 'emailError');
    return true;
  }
}


// ---------------------------------------------------
// 4. DROPDOWN VALIDATION
//    Rule: Koi option select hona chahiye
// ---------------------------------------------------
function validateField() {
  const val = document.getElementById('field').value;

  if (val === '') {
    showError('field', 'fieldError', 'fieldSuccess');
    return false;
  } else {
    showSuccess('field', 'fieldSuccess', 'fieldError');
    return true;
  }
}


// ---------------------------------------------------
// 5. PASSWORD VALIDATION + STRENGTH METER
//    Rule: Min 8 characters + kam az kam 1 number
// ---------------------------------------------------
function validatePassword() {
  const val = document.getElementById('password').value;
  const wrapper = document.getElementById('strengthWrapper');
  const fill    = document.getElementById('strengthFill');
  const label   = document.getElementById('strengthLabel');

  // Agar khali hai to strength bar bhi hide karo
  if (val === '') {
    clearState('password', 'passError', 'passSuccess');
    wrapper.classList.remove('show');
    return false;
  }

  // Strength bar dikhao
  wrapper.classList.add('show');

  // Password ki strength calculate karo (0 to 4 points)
  let strength = 0;
  if (val.length >= 8)          strength++; // length theek hai
  if (/[A-Z]/.test(val))        strength++; // uppercase letter hai
  if (/[0-9]/.test(val))        strength++; // number hai
  if (/[^A-Za-z0-9]/.test(val)) strength++; // special character hai (@, #, ! etc.)

  // Strength ke hisab se bar update karo
  const widths = ['25%', '50%', '75%', '100%'];
  const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#27ae60'];
  const labels = ['Weak', 'Fair', 'Good', 'Strong'];

  fill.style.width      = widths[strength - 1] || '10%';
  fill.style.background = colors[strength - 1] || '#e74c3c';
  label.textContent     = labels[strength - 1] || '';
  label.style.color     = colors[strength - 1] || '#e74c3c';

  // Minimum condition check: 8 chars + 1 number
  const passRegex = /^(?=.*[0-9]).{8,}$/;

  if (!passRegex.test(val)) {
    showError('password', 'passError', 'passSuccess');
    return false;
  } else {
    showSuccess('password', 'passSuccess', 'passError');
    // Agar confirm field bhi fill hua hai to woh bhi re-validate karo
    if (document.getElementById('confirmPass').value) {
      validateConfirmPass();
    }
    return true;
  }
}


// ---------------------------------------------------
// 6. CONFIRM PASSWORD VALIDATION
//    Rule: Password aur Confirm Password same honi chahiye
// ---------------------------------------------------
function validateConfirmPass() {
  const pass    = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPass').value;

  if (confirm === '') {
    clearState('confirmPass', 'confirmError', 'confirmSuccess');
    return false;
  }

  if (pass !== confirm) {
    showError('confirmPass', 'confirmError', 'confirmSuccess');
    return false;
  } else {
    showSuccess('confirmPass', 'confirmSuccess', 'confirmError');
    return true;
  }
}


// ---------------------------------------------------
// 7. BIO / TEXTAREA VALIDATION
//    Rule: Minimum 20 characters likhne chahiye
// ---------------------------------------------------
function validateBio() {
  const val = document.getElementById('bio').value.trim();

  if (val === '') {
    clearState('bio', 'bioError', 'bioSuccess');
    return false;
  }

  if (val.length < 20) {
    showError('bio', 'bioError', 'bioSuccess');
    return false;
  } else {
    showSuccess('bio', 'bioSuccess', 'bioError');
    return true;
  }
}


// ---------------------------------------------------
// 8. TERMS & CONDITIONS VALIDATION
//    Rule: Checkbox checked hona chahiye
// ---------------------------------------------------
function validateTerms() {
  const checked = document.getElementById('terms').checked;
  const errorEl = document.getElementById('termsError');

  if (!checked) {
    errorEl.classList.add('show');
    return false;
  } else {
    errorEl.classList.remove('show');
    return true;
  }
}


// ---------------------------------------------------
// 9. SUBMIT FUNCTION
//    Sab validations ek baar run karta hai
//    Agar sab pass ho to success dikhaata hai
// ---------------------------------------------------
function submitForm() {

  // Sab functions call karo — taki sab errors ek saath nazar aayein
  const isNameOk    = validateName();
  const isPhoneOk   = validatePhone();
  const isEmailOk   = validateEmail();
  const isFieldOk   = validateField();
  const isPassOk    = validatePassword();
  const isConfirmOk = validateConfirmPass();
  const isBioOk     = validateBio();
  const isTermsOk   = validateTerms();

  // Agar koi bhi false return kare to submit band karo
  if (!isNameOk || !isPhoneOk || !isEmailOk || !isFieldOk ||
      !isPassOk || !isConfirmOk || !isBioOk || !isTermsOk) {
    return; // Yahan rok do
  }

  // Sab validations pass — form hide karo, success banner dikhao
  document.getElementById('regForm').style.display = 'none';
  document.getElementById('successBanner').classList.add('show');
}