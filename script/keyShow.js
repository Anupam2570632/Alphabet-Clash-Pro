const char = randomChar();
function showKey(char) {
    const charPlace = document.getElementById('char-text');
    charPlace.innerText = char;
    coloredBg(char);
}