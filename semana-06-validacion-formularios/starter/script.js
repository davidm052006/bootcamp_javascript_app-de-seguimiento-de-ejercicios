// starter/script.js
// Validador de formulario para Semana 6
// Comentarios en español, nombres en inglés

const form = document.getElementById('register-form');
const fields = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  phone: document.getElementById('phone'),
  birthdate: document.getElementById('birthdate'),
  memberId: document.getElementById('memberId'),
  postal: document.getElementById('postal'),
  profileUrl: document.getElementById('profileUrl'),
  password: document.getElementById('password'),
  confirm: document.getElementById('confirm')
};

const msgs = Array.from(document.querySelectorAll('.msg')).reduce((acc, el) => (acc[el.dataset.for] = el, acc), {});

// ======= Sanitization =======
export function sanitizeInput(input = ''){
  // escapar caracteres especiales básicos contra XSS
  return String(input)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// ======= RegExp patterns (ES2023 usage) =======
const patterns = {
  name: /^[A-Za-zÀ-ÿ]+(?:[ \-'][A-Za-zÀ-ÿ]+){1,}$/u, // mínimo 2 palabras/partes (2-50 chars enforced separately)
  email: /^[\w.+-]+@[\w-]+(\.[\w-]+)+$/i,
  phone: /^\+?[0-9]{7,15}$/, // international naive
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/, // min 8, upper, lower, digit, symbol
  memberId: /^[A-Z0-9]{4,12}$/i, // alfanum 4-12
  postal: /^\d{4,10}(?:[- ]?\d{3,4})?$/, // flexible postal codes
  url: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i,
  dateISO: /^\d{4}-\d{2}-\d{2}$/
};

// ======= Validator convension =======
function ok(message = ''){ return { isValid: true, message, formatted: undefined }; }
function fail(message = '', formatted = undefined){ return { isValid: false, message, formatted }; }

// ======= Individual validators returning the required object shape =======
function validateName(value = ''){
  const v = value.trim();
  if (v.length < 2 || v.length > 50) return fail('Name must be 2–50 characters');
  if (!patterns.name.test(v)) return fail('Use only letters, spaces or hyphens, at least two parts');
  return ok('Looks good');
}

function validateEmail(value = ''){
  const v = value.trim();
  if (!patterns.email.test(v)) return fail('Invalid email format');
  return ok('Valid email');
}

function formatPhone(value = ''){
  // keep only digits and leading +
  const cleaned = value.replace(/[^+\d]/g, '');
  if (cleaned.startsWith('+')) return cleaned;
  // assume default country code +1 if not provided (only for formatting demo)
  return cleaned ? `+${cleaned}` : '';
}

function validatePhone(value = ''){
  const formatted = formatPhone(value);
  if (!formatted) return fail('Phone required');
  if (!patterns.phone.test(formatted)) return fail('Phone must be international digits (7–15)');
  return { isValid: true, message: 'Valid phone', formatted };
}

function validateBirthdate(value = ''){
  if (!value) return fail('Birthdate required');
  if (!patterns.dateISO.test(value)) return fail('Invalid date');
  const dob = new Date(value);
  const age = new Date().getFullYear() - dob.getFullYear();
  if (age < 13) return fail('Must be at least 13 years old');
  return ok(`Age ${age}`);
}

function validateMemberId(value = ''){
  const v = value.trim();
  if (!patterns.memberId.test(v)) return fail('Member ID 4–12 alphanumeric');
  return ok('Member ID ok');
}

function validatePostal(value = ''){
  const v = value.trim();
  if (!v) return fail('Postal required');
  if (!patterns.postal.test(v)) return fail('Invalid postal code');
  return ok('Postal ok');
}

function validateProfileUrl(value = ''){
  const v = value.trim();
  if (!v) return ok('Optional');
  if (!patterns.url.test(v)) return fail('Invalid URL');
  return ok('URL looks good');
}

function validatePassword(value = ''){
  if (!patterns.password.test(value)) return fail('Password must be 8+, include upper, lower, number, symbol');
  return ok('Strong password');
}

function validateConfirm(password = '', confirm = ''){
  if (password !== confirm) return fail('Passwords do not match');
  return ok('Passwords match');
}

// ======= Password strength meter (simple scoring) =======
function passwordStrength(value = ''){
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/[a-z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^\w\s]/.test(value)) score += 1;
  return Math.min(100, (score / 5) * 100);
}

// ======= UI helpers =======
function setValid(el, message = ''){
  el.classList.remove('invalid'); el.classList.add('valid');
  msgs[el.id].textContent = message;
  msgs[el.id].style.color = 'var(--accent)';
}

function setInvalid(el, message = ''){
  el.classList.remove('valid'); el.classList.add('invalid');
  msgs[el.id].textContent = message;
  msgs[el.id].style.color = 'var(--danger)';
}

function clearState(el){ el.classList.remove('valid','invalid'); msgs[el.id].textContent = ''; }

// ======= Real-time binding =======
function handleName(){
  const { value } = fields.name; const res = validateName(value);
  res.isValid ? setValid(fields.name, res.message) : setInvalid(fields.name, res.message);
}

function handleEmail(){
  const { value } = fields.email; const res = validateEmail(value);
  res.isValid ? setValid(fields.email, res.message) : setInvalid(fields.email, res.message);
}

function handlePhone(){
  const { value } = fields.phone; const res = validatePhone(value);
  if (res.formatted) fields.phone.value = res.formatted; // auto-format
  res.isValid ? setValid(fields.phone, res.message) : setInvalid(fields.phone, res.message);
}

function handleBirth(){
  const { value } = fields.birthdate; const res = validateBirthdate(value);
  res.isValid ? setValid(fields.birthdate, res.message) : setInvalid(fields.birthdate, res.message);
}

function handleMember(){
  const { value } = fields.memberId; const res = validateMemberId(value);
  res.isValid ? setValid(fields.memberId, res.message) : setInvalid(fields.memberId, res.message);
}

function handlePostal(){
  const { value } = fields.postal; const res = validatePostal(value);
  res.isValid ? setValid(fields.postal, res.message) : setInvalid(fields.postal, res.message);
}

function handleProfile(){
  const { value } = fields.profileUrl; const res = validateProfileUrl(value);
  res.isValid ? setValid(fields.profileUrl, res.message) : setInvalid(fields.profileUrl, res.message);
}

function handlePassword(){
  const v = fields.password.value;
  const res = validatePassword(v);
  const meter = document.querySelector('#pw-meter .fill');
  meter.style.width = `${passwordStrength(v)}%`;
  res.isValid ? setValid(fields.password, res.message) : setInvalid(fields.password, res.message);
  // also validate confirm to keep consistency
  handleConfirm();
}

function handleConfirm(){
  const res = validateConfirm(fields.password.value, fields.confirm.value);
  res.isValid ? setValid(fields.confirm, res.message) : setInvalid(fields.confirm, res.message);
}

// Attach input listeners (real-time)
fields.name.addEventListener('input', handleName);
fields.email.addEventListener('input', handleEmail);
fields.phone.addEventListener('input', handlePhone);
fields.birthdate.addEventListener('change', handleBirth);
fields.memberId.addEventListener('input', handleMember);
fields.postal.addEventListener('input', handlePostal);
fields.profileUrl.addEventListener('input', handleProfile);
fields.password.addEventListener('input', handlePassword);
fields.confirm.addEventListener('input', handleConfirm);

// clear button
document.getElementById('reset').addEventListener('click', () => {
  form.reset();
  Object.values(fields).forEach(clearState);
  document.querySelector('#pw-meter .fill').style.width = '0%';
});

// Prevent submission if there are errors; sanitize inputs and show summary
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // run all validators
  const results = {
    name: validateName(fields.name.value),
    email: validateEmail(fields.email.value),
    phone: validatePhone(fields.phone.value),
    birthdate: validateBirthdate(fields.birthdate.value),
    memberId: validateMemberId(fields.memberId.value),
    postal: validatePostal(fields.postal.value),
    profileUrl: validateProfileUrl(fields.profileUrl.value),
    password: validatePassword(fields.password.value),
    confirm: validateConfirm(fields.password.value, fields.confirm.value)
  };

  // update UI states based on results
  Object.entries(results).forEach(([k,res]) => {
    const el = fields[k];
    if (!res) return; // defensive
    res.isValid ? setValid(el, res.message) : setInvalid(el, res.message);
  });

  const invalid = Object.values(results).some(r => !r.isValid);
  if (invalid) {
    alert('Please fix the highlighted errors before submitting.');
    return;
  }

  // sanitize values and prepare payload
  const payload = Object.fromEntries(Object.entries(fields).map(([k,el]) => [k, sanitizeInput(el.value)]));

  // demo: log sanitized payload
  console.log('Sanitized payload:', payload);
  alert('Form submitted successfully (payload logged to console).');
  form.reset();
  Object.values(fields).forEach(clearState);
  document.querySelector('#pw-meter .fill').style.width = '0%';
});

// Expose for debugging in console
window.__week6 = { validateName, validateEmail, validatePhone, validatePassword, sanitizeInput };
