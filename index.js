// Define the set of valid characters for encryption and decryption.
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+=";

// Encrypt a given text using a key.
function encryptText(text, key) {
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        const textChar = text[i];
        const keyChar = key[i % key.length]; // Use modulus to cycle through key characters.

        const textIndex = alphabet.indexOf(textChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if (textIndex === -1) {
            // If character is not found in alphabet, add it as is.
            encryptedText += textChar;
        } else {
            // Calculate the new character's index and add to the result.
            const newIndex = (textIndex + keyIndex) % alphabet.length;
            encryptedText += alphabet[newIndex];
        }
    }

    return encryptedText;
}

// Decrypt the encrypted text using the key.
function decryptText(encryptedText, key) {
    let decryptedText = "";

    for (let i = 0; i < encryptedText.length; i++) {
        const encryptedChar = encryptedText[i];
        const keyChar = key[i % key.length];
        const encryptedIndex = alphabet.indexOf(encryptedChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if (encryptedIndex === -1) {
            // If character is not found in alphabet, add it as is.
            decryptedText += encryptedChar;
        } else {
            // Calculate the new index considering possible negative values.
            let newIndex = encryptedIndex - keyIndex;
            if (newIndex < 0) newIndex += alphabet.length;
            decryptedText += alphabet[newIndex];
        }
    }

    return decryptedText;
}

// Update the display result depending on the encryption or decryption choice.
function updateResult(isEncrypting) {
    const text = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    let result = "";
    if (isEncrypting) {
        result = encryptText(text, key);
    } else {
        result = decryptText(text, key);
    }

    document.getElementById("result").textContent = result;
}

// Add click event listeners to encryption and decryption buttons.
document.getElementById("enc-btn").addEventListener('click', function () {
    updateResult(true); // Encrypt the text when clicked.
});

document.getElementById("dec-btn").addEventListener('click', function () {
    updateResult(false); // Decrypt the text when clicked.
});


