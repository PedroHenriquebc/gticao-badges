document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('backgroundImage');

    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const moveX = ((clientX / innerWidth) - 0.5) * 50;
        const moveY = ((clientY / innerHeight) - 0.5) * 50;
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            const { beta, gamma } = event;
            const moveX = gamma * 2;
            const moveY = beta * 2;
            image.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
});

function changeImage(src) {
    document.getElementById('backgroundImage').src = src;
}
