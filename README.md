# Dev's Encryptor

Dev's Encryptor is a simple web application designed to encrypt and decrypt messages using a repetitive key method. This tool is useful for securing messages by ensuring they are not easily readable without the correct decryption key.

## Features

- **Encrypt Text**: Convert your plain text into an encrypted message using a specific key.
- **Decrypt Text**: Convert encrypted text back to plain text using the same key used for encryption.
- **Responsive Design**: Works on various devices thanks to its responsive web design.

## How to Use

1. **Enter a Message**: Write the message you want to encrypt or decrypt in the text area.
2. **Set a Key**: Enter a key that will be used for the encryption or decryption process.
3. **Choose the Operation**: Click on 'Encrypt' to encrypt your message or 'Decrypt' to decrypt an existing message.
4. **View the Result**: The result of the encryption or decryption will be displayed below the buttons.

## Technical Details

This application uses a simple character substitution based on a character set that includes letters (both uppercase and lowercase), numbers, and various symbols. The index of each character in the input text is adjusted by the index of the corresponding character in the key, and the result is determined by modular arithmetic on the total number of characters in the set.

## Setup

To run this project locally, clone the repo and open `index.html` in your browser:
