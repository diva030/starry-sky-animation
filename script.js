const starContainer = document.querySelector('.starry-sky');

// Generate random stars
function createStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        starContainer.appendChild(star);
    }
}

// Create a shooting star
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // Set random starting position for the shooting star
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight / 2;

    // Set the shooting star's position
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    // Add the shooting star to the sky and animate it
    starContainer.appendChild(star);
    star.style.animation = 'shootingStar 1.5s linear forwards';

    // Make the name and message appear after the shooting star
    setTimeout(() => {
        const name = document.querySelector('.tasha-name');
        const message = document.querySelector('.message');
        name.style.opacity = 1;
        setTimeout(() => {
            message.style.opacity = 1;
        }, 500); // Message appears after the name
    }, 1000);
    

    // Remove the shooting star after animation
    setTimeout(() => {
        star.remove();
    }, 1500);
}

// Generate more frequent shooting stars
function spawnShootingStars() {
    const count = Math.floor(Math.random() * 6) + 1; // 1 to 6 shooting stars at a time
    for (let i = 0; i < count; i++) {
        createShootingStar();
    }
}

// Generate many stars to make the sky look fuller
createStars(400);

// Start the shooting star animation every second
setInterval(spawnShootingStars, 1000);
