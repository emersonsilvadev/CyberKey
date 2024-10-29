function generatePassword() {
    const length = 12; // Definindo o tamanho da senha fixa
    const uppercaseCheckbox = document.getElementById("uppercase").checked;
    const numbersCheckbox = document.getElementById("numbers").checked;
    const symbolsCheckbox = document.getElementById("symbols").checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = lowercaseChars;
    if (uppercaseCheckbox) allChars += uppercaseChars;
    if (numbersCheckbox) allChars += numberChars;
    if (symbolsCheckbox) allChars += symbolChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById("password").value = password;

    // Exibe a mensagem de sucesso
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}
