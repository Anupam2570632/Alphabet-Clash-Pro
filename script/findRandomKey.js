function randomChar() {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabets.split('');
    const index = Math.round(Math.random() * 25);
    const char = alphabet[index];
    return char;
}