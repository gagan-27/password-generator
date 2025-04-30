const numbers= "1234567890";
const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

const passwordInput= document.getElementById("password");
const copyBtn= document.getElementById("copy");
const generateBtn= document.getElementById("generate");
const lengthSlider= document.getElementById("length");
const lengthValue= document.getElementById("lengthValue");

const includeUppercase = document.getElementById("uppercase");
const includeLowercase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");

lengthSlider.addEventListener("input",()=>{
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", ()=>{
    const length = +lengthSlider.value;
    let chars = "";


  if (includeUppercase.checked) chars += upperCase;
  if (includeLowercase.checked) chars += lowerCase;
  if (includeNumbers.checked) chars += numbers;
  if (includeSymbols.checked) chars += symbols;

  if (chars === "") {
    alert("Select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordInput.value = password;
});

copyBtn.addEventListener("click", () => {
    const password = passwordInput.value;
    if (!password || password === "Select at least one option!") return;
  
    navigator.clipboard.writeText(password).then(() => {
      copyBtn.textContent = "✅";
      setTimeout(() => (copyBtn.textContent = "📋"), 2000);
    });
  });