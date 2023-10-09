// script.js
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var prompt = document.getElementById('prompt').value;

    fetch('/generate_response', {
        method: 'POST',
        body: new URLSearchParams(new FormData(this)),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
    })
    .catch(error => {
        document.getElementById('response').innerText = "An error occurred: " + error;
    });
});
