function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookieArray = document.cookie.split(';');
    for (let cookie of cookieArray) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

function applyPreferences() {
    const fontSize = getCookie('fontsize') || '16';
    const fontColor = getCookie('fontcolor') || '#000000';

    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.documentElement.style.setProperty('--fontcolor', fontColor);

    document.getElementById('fontsize').value = fontSize;
    document.getElementById('fontcolor').value = fontColor;
}

document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    setCookie('fontsize', fontSize, 365);
    setCookie('fontcolor', fontColor, 365);

    applyPreferences();
});

window.onload = applyPreferences;
