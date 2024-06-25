document.getElementById('btnStart').addEventListener('click', function() {
    const url = document.getElementById('texturl').value;
    if (url) {
        window.location.href = `emulator.html?url=${encodeURIComponent(url)}`;
    } else {
        alert('Please enter a valid URL');
    }
});
