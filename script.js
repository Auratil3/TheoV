// Create falling hearts
function createHearts() {
    const container = document.getElementById('hearts-container');
    for (let i = 0; i < 9; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💗';
        // Alternate between pink and purple
        if (i % 2 === 0) {
            heart.style.color = '#ff69b4'; // Pink
        } else {
            heart.style.color = '#da70d6'; // Purple
        }
        container.appendChild(heart);
    }
}

// Make the No button run away
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const responseDiv = document.getElementById('response');

noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('click', moveButton);

function moveButton() {
    // Generate random position
    const randomX = Math.random() * 300 - 150; // -150 to 150
    const randomY = Math.random() * 200 - 100; // -100 to 100
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Yes button handler
yesBtn.addEventListener('click', function() {
    responseDiv.innerHTML = '🎉 thank you Mrs Abrams! 💜💕 You\'re stuck with me forever! 🥂';
    responseDiv.style.fontSize = '24px';
    responseDiv.style.fontWeight = 'bold';
    
    // Create celebration animation
    celebrateYes();
    
    // Disable buttons
    yesBtn.disabled = true;
    noBtn.disabled = true;
    yesBtn.style.opacity = '0.6';
    noBtn.style.opacity = '0.6';
});

function celebrateYes() {
    // Create more hearts on yes
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = i % 2 === 0 ? '💗' : '💜';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '50%';
        heart.style.fontSize = '40px';
        heart.style.animation = `float-down 3s ease-in forwards`;
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        document.getElementById('hearts-container').appendChild(heart);
    }
}

// Initialize
createHearts();