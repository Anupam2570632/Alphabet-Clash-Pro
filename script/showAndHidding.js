function hideHomePage() {
    const homePage = document.getElementById('home-page');
    homePage.classList.add('hidden');

    const playingPage = document.getElementById('playing-page');
    playingPage.classList.remove('hidden');
}