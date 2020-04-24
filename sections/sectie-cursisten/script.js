document.getElementById('cursBtn').onclick = function() {
    var el = document.getElementById('cursistenContainer');
    if (el.style.display != 'block') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    };
};