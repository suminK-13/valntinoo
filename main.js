// Love Meter Logic
const slider = document.getElementById('love-slider');
const scoreDisplay = document.getElementById('score-display');
const messageDisplay = document.getElementById('message-display');

slider.addEventListener('input', () => {
    const score = slider.value;
    scoreDisplay.textContent = `${score}%`;

    // Dynamic messages based on score
    let message;
    if (score < 25) {
        message = "Just getting started! 🌱";
    } else if (score < 50) {
        message = "Building something beautiful! 💕";
    } else if (score < 75) {
        message = "We're a great match! 🔥";
    } else {
        message = "Soulmates forever! 💖";
    }
    messageDisplay.textContent = message;
});

// Romantic Message Generator
const generateBtn = document.getElementById('generate-btn');
const romanticMessage = document.getElementById('romantic-message');

const messages = [
    "You are my everything, my love. ❤️",
    "Every moment with you is a treasure. 💎",
    "I love you more than words can say. 🌹",
    "You're the light of my life. ✨",
    "Forever and always, my heart is yours. 💑"
];

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    romanticMessage.textContent = messages[randomIndex];
});

// Floating Hearts Animation
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // 3-6 seconds
    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate hearts periodically
setInterval(createHeart, 500); // Every 0.5 seconds