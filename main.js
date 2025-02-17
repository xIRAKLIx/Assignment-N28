const cursor = document.querySelector('.light-cursor');

document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 5}px)`;
});