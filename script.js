document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        moveCursor(e);
        createSmokeParticle(e.pageX, e.pageY);
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

        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});
