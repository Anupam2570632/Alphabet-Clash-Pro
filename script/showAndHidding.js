function hideHomePage() {
    const homePage = document.getElementById('home-page');
    homePage.classList.add('hidden');

    const playingPage = document.getElementById('playing-page');
    playingPage.classList.remove('hidden');
}

function gameOver() {
    const playingPage = document.getElementById('playing-page');
    playingPage.classList.add('hidden');

    const scoringPage = document.getElementById('scoring-page')
    scoringPage.classList.remove('hidden');
}
function playAgain() {
    const playingPage = document.getElementById('playing-page');
    playingPage.classList.remove('hidden');

    const scoringPage = document.getElementById('scoring-page')
    scoringPage.classList.add('hidden');

    document.getElementById('total-score').innerText = 0;
    document.getElementById('total-life').innerText = 5;
}