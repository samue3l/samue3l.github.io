// Function to resize text
function resizeText(size) {
    if (size === 'larger') {
        document.body.style.fontSize = '1.5em';
    } else if (size === 'default') {
        document.body.style.fontSize = '1em';
    }
}

// Function to toggle colorblind-friendly mode
function toggleColorMode() {
    const body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#FFFFFF';
        body.style.color = '#333333';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
}