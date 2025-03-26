const dot = document.getElementById('dot');
const score = document.getElementById('score');
const time = document.getElementById('time');
const floatingNotify = document.getElementById('floating-notify');
const retryBtn = document.getElementById('retry');
retryBtn.style.display = "none";
let randomized = "";
const hero = document.getElementById('hero');
const loginContainer = document.getElementById('login-container');
const dotSize = document.getElementById('dotSize');
const gameTime = document.getElementById('gameTime');
const playGame = document.getElementById('play-game');
setInterval(() => {
    const size = dotSize.value;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
}, 200);

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
        time.innerHTML = `Is up!`;
        score.innerHTML = score.innerHTML;
        dot.style.transform = 'scale(0)';
        clearInterval(intervalId);
        floatingNotify.innerHTML.transform = 'scale(0)';
    }, time.innerHTML * 1000);
});

dot.addEventListener('click', () => {
    retryBtn.style.display = 'block';
    floatingNotify.style.transform = 'scale(0)';
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
})
console.log(randomized);
