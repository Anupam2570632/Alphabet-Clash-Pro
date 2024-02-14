document.addEventListener('keyup', changeKey)

function changeKey(e) {
    // console.log(char)
    // console.log(e.key);

    const targetKeyElement = document.getElementById('char-text');
    const targetKey = targetKeyElement.innerText;
    const target = targetKey.toLowerCase()
    console.log(target);
    const pressedKey = e.key;
    console.log(pressedKey)

    if (target === pressedKey) {
        const char = randomChar();
        if (target !== char) {
            removeBg(target);
        }
        scoreIncrease();
    }
    else {
        lifeDecrease();
    }
    if (e.key === 'Escape') {
        gameOver();
    }
}

function scoreIncrease() {
    const currentScoreElementText = document.getElementById('total-score');
    const currentScoreText = currentScoreElementText.innerText;
    const currentScore = parseInt(currentScoreText);
    const score = currentScore + 1;
    currentScoreElementText.innerText = score;
    document.getElementById('last-score').innerText = score;
    const highScoreElementText = document.getElementById('high-score');
    const highScoreText = highScoreElementText.innerText;
    const highScore = parseInt(highScoreText);
    if (highScore < score) {
        highScoreElementText.innerText = score;
    }
}

function lifeDecrease() {
    const currentLifeElementText = document.getElementById('total-life');
    const currentLifeText = currentLifeElementText.innerText;
    const currentLife = parseInt(currentLifeText);
    const life = currentLife - 1;
    currentLifeElementText.innerText = life;
    if (life === 0) {
        gameOver();
    }
}