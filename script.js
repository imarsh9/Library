// HAMBURGER MENU TOGGLE
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // prevent background scroll
});

// Close menu when clicking a link
document.querySelectorAll('#menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// DROPDOWN TOGGLE
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
    const btn = drop.querySelector('.dropbtn');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        drop.classList.toggle('active'); // mobile ke liye toggle
    });
});

// Close dropdown if clicking outside
window.addEventListener('click', function(e) {
    dropdowns.forEach(drop => {
        if (!drop.contains(e.target)) {
            drop.classList.remove('active');
        }
    });
});
