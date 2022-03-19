const urlParams = new URLSearchParams(window.location.search);

// if app = wsite go redirect to https://jaydendev.github.io
if (urlParams.get('app') == 'wsite') {
    window.location.replace('https://jaydendev.github.io');
    const stat = "redir-wsite";
}

console.log("test " + stat)
console.log(app)
console.log(urlParams)