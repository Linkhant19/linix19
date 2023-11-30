function redirectTo(url) {
    window.location.href = url;
}

function redirectTo(url) {
    if(url.startsWith('http://') || url.startsWith('https://')) {
        window.open(url, '_blank'); 
    } else {
        window.location.href = url; 
    }
}
