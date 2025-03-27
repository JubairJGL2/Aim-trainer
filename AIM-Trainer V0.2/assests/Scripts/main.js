const dot = document.getElementById('dot');
const score = document.getElementById('score');
const scoreParent = document.getElementById('scoreParent');
const timeParent = document.getElementById('timeParent');
const time = document.getElementById('time');
const floatingImg = document.getElementById('floating-img');
const retryBtn = document.getElementById('retry');
const darkTheme = document.getElementById('darkTheme');
const lightTheme = document.getElementById('lightTheme');
const splash = document.getElementById('splash');
const hero = document.getElementById('hero');
const loginContainer = document.getElementById('login-container');
const dotSize = document.getElementById('dotSize');
const gameTime = document.getElementById('gameTime');
const playGame = document.getElementById('play-game');
function init() {
    retryBtn.style.display = "none";
    let randomized = "";
    setInterval(() => {
        const size = dotSize.value;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
    }, 200);
}
darkTheme.addEventListener('click', () => {
    splash.style.backgroundColor = '#0f0f0f';
    splash.style.opacity = '0.6';
    scoreParent.style.position = 'relative';
    timeParent.style.position = 'relative';
    scoreParent.style.zIndex = '5';
    timeParent.style.zIndex = '5';
    floatingImg.style.color = '#faf6f1';
    document.body.style.color = '#faf6f1';
    dotSize.style.color = '#faf6f1';
    gameTime.style.color = '#faf6f1';
    retryBtn.style.color = '#faf6f1';
    retryBtn.style.borderColor = '#faf6f1';
})
lightTheme.addEventListener('click', () => {
    splash.style.backgroundColor = '#4F97A3';
    splash.style.opacity = '0.2';
    score.style.zIndex = '1';
    time.style.zIndex = '1';
    floatingImg.style.color = '#0f0f0f';
    document.body.style.color = '#1e2a3a';
    dotSize.style.color = '#0f0f0f';
    gameTime.style.color = '#0f0f0f';
})
playGame.addEventListener('click', () => {
    time.innerHTML = gameTime.value;
    loginContainer.style.transform = 'translateY(-100%)';
    hero.style.display = 'flex';
    const timer = () => {
        const intervalId = setInterval(() => {
            const currentTime = parseInt(time.innerHTML);
            if (currentTime > 0) {
                time.innerHTML = currentTime - 1;
            }
        }, 1000);
        return intervalId;
    };
    const intervalId = timer();
    setTimeout(() => {
        dot.style.display = 'none';
        time.innerHTML = `Is up!`;
        score.innerHTML = score.innerHTML;
        clearInterval(intervalId);
        floatingImg.style.transform = 'scale(0)';
    }, time.innerHTML * 1000);
});
dot.addEventListener('click', () => {
    retryBtn.style.display = 'block';
    floatingImg.style.transform = 'scale(0)';
    const randomNum = Math.floor(Math.random() * 9);
    const randomNum2 = Math.floor(Math.random() * 9);
    randomized = `${randomNum}${randomNum2}`;
    dot.style.transform = `translateX(${randomNum}${randomNum2}vw) translateY(${randomNum2}${randomNum}vh)`;
    if (hero.style.display === 'flex') {
        score.innerHTML++;
    }
});
retryBtn.addEventListener('click', () => {
    location.reload();
});