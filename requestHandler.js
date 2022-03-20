const urlParams = new URLSearchParams(window.location.search);

// if app = wsite go redirect to https://jaydendev.github.io
if (urlParams.get('app') == 'wsite') {
    window.location.replace('https://jaydendev.github.io');
    const stat = "redir-wsite";
}
if (urlParams.get('proc') == 'halt') {
    window.location.replace('#');
}
