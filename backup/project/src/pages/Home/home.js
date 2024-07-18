document.addEventListener('DOMContentLoaded', function () {
    var aboutBtn = document.getElementById('aboutbtn');
    var gameBtn = document.getElementById('gamebtn');
    var competitionBtn = document.getElementById('competitionbtn');
    var contactBtn = document.getElementById('contactbtn');

    if (aboutBtn) {
        aboutBtn.addEventListener('click', function () {
            window.location.href = '../../pages/About/About.html';
        });
    }

    if (gameBtn) {
        gameBtn.addEventListener('click', function () {
            window.location.href = '../../pages/Game/Game.html';
        });
    }

    if (competitionBtn) {
        competitionBtn.addEventListener('click', function () {
            window.location.href = '../../pages/Schools/Schools.html';
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', function () {
            window.location.href = '../../pages/Contact/Contact.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            document.body.style.cursor = 'wait';
            setTimeout(function () {
                document.body.style.cursor = 'default';
            }, 1000);
        });
    });
});

const menuIcon = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});

