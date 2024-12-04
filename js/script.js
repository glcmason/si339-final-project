function uxLink() {
    window.location.href = 'ux.html'; // URL of the target page
}

function artworkLink() {
    window.location.href = 'artwork.html'; // URL of the target page
}

function photoLink() {
    window.location.href = 'photography.html'; // URL of the target page
}

function handleKey(event, link) {
    if (event.key === 'Enter'|| event.keyCode === 13) {
        link();
    }
}