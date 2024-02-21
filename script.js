document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        moveCursor(e);
        createSmokeParticle(e.pageX, e.pageY);

        // Add text wiggling effect
        wiggleText(e);
    });

    function moveCursor(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }

    function createSmokeParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('smoke-particle');
        document.body.appendChild(particle);

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Remove particle after animation moves
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }

    // Loadind Lottie animation here
    const lottieContainer = document.getElementById('lottie-container');
    const animationPath = './animation.json';
    const anim = lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath,
    });

    // Added bounce effect to Lottie on hover
    lottieContainer.addEventListener('mouseenter', () => {
        lottieContainer.classList.add('bounce-animation');
    });

    lottieContainer.addEventListener('mouseleave', () => {
        lottieContainer.classList.remove('bounce-animation');
    });

    function wiggleText(e) {
        const textSide = document.querySelector('.text-side');
        const offsetX = (e.pageX / window.innerWidth - 0.5) * 30;
        const offsetY = (e.pageY / window.innerHeight - 0.5) * 30;

        textSide.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
});
