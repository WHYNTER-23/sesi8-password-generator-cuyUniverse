let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (length) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerik = "0123456789";
  const symbol = "~`!@#$%^&*()-_=+[]{};:/?.,<>'";

  const data = lowerAlphabet + upperAlphabet + numerik + symbol;
  let generator = "";
  for (let index = 0; index < length; index++) {
    generator += data[~~(Math.random() * data.length)];
  }

  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
  setTimeout(() => {
    alert("password has been generate!");
  }, 1000);
};

const savePassword = () => {
  let dataPassword = password.value;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`password saya : ${dataPassword}`)
  );
  saveButton.setAttribute("download", "MyPassword.txt");
  setTimeout(() => {
    alert("password has been saved!");
  }, 1000);
};
