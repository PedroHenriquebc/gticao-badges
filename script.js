document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('backgroundImage');

    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const moveX = ((clientX / innerWidth) - 0.5) * 15;
        const moveY = ((clientY / innerHeight) - 0.5) * 15;
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            const { beta, gamma } = event;
            const moveX = gamma / 15;
            const moveY = beta / 15;
            image.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
});

function changeImage(src) {
    document.getElementById('backgroundImage').src = src;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('movable-container');

    // Movimento com o mouse
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const rotateX = ((clientY / innerHeight) - 0.5) * 25; // Reduzir a amplitude para uma rotação mais realista
        const rotateY = ((clientX / innerWidth) - 0.5) * 25;  // Reduzir a amplitude para uma rotação mais realista
        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Movimento com o dispositivo móvel
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            const { beta, gamma } = event;
            const rotateX = beta / 3;   // Reduzir a amplitude para uma rotação mais realista
            const rotateY = gamma / 3;  // Reduzir a amplitude para uma rotação mais realista
            container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    }
});

