const urlParams = new URLSearchParams(window.location.search);
const app = urlParams.get('app');

// if app = wsite go redirect to https://jaydendev.github.io
if (app === 'wsite') {
    window.location.replace('https://jaydendev.github.io');
}