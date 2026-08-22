let poppedCount = 0;
const totalNeededToPop = 4;

// Balloon popping logic
function popBalloon(balloonElement) {
    if (balloonElement.classList.contains('popped')) return;

    balloonElement.classList.add('popped');
    poppedCount++;

    const remaining = totalNeededToPop - poppedCount;
    const counterText = document.getElementById('counter');

    if (remaining > 0) {
        counterText.textContent = `باقي لج ${remaining} بلونات!`;
    } else {
        counterText.textContent = "يالله، كفو! ننتقل للخطوة اللي بعدها 🎉";
        
        // Switch to Cake Stage after a short cute delay
        setTimeout(() => {
            switchStages('balloon-stage', 'cake-stage');
        }, 800);
    }
}

// Blow candle logic
function blowCandle() {
    const cakeEmoji = document.getElementById('cake-emoji');
    const wishText = document.getElementById('wish-text');
    const blowBtn = document.getElementById('blow-btn');

    // Change emoji to unlit candle/cake and update text
    cakeEmoji.textContent = "🎂✨";
    wishText.textContent = "بتتحقق أمنيتج بإذن الله! تعالي نشوف المفاجأة اللي بعدها...";
    blowBtn.style.display = "none";

    // Switch to Letter/Music stage after 2 seconds
    setTimeout(() => {
        switchStages('cake-stage', 'letter-stage');
    }, 2000);
}

// Music player toggle logic
const audio = document.getElementById('birthday-audio');
const musicBtn = document.getElementById('play-music-btn');

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicBtn.textContent = "إيقاف الأغنية ⏸️";
        musicBtn.style.backgroundColor = "#e91e63";
        musicBtn.style.color = "white";
    } else {
        audio.pause();
        musicBtn.textContent = "تشغيل الأغنية 🎶";
        musicBtn.style.backgroundColor = "#f8bbd0";
        musicBtn.style.color = "#ad1457";
    }
}

// Helper function to switch between views smoothly
function switchStages(currentId, nextId) {
    document.getElementById(currentId).classList.remove('active');
    document.getElementById(currentId).classList.add('hidden');

    const nextStage = document.getElementById(nextId);
    nextStage.classList.remove('hidden');
    nextStage.classList.add('active');
}

function nextStage(nextId) {
    if(nextId === 'coupon-stage') {
        switchStages('letter-stage', 'coupon-stage');
    }
}
