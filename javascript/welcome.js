function welcomeScreen () {
    const inputName = localStorage.getItem('inputName');
    const nameInput = document.getElementById('name-input');
    const welcome = 'Welcome, ' + inputName + '!'
    const continueButton = document.getElementById('continue-home');

    document.title = welcome;

    nameInput.innerHTML = inputName;
    
    continueButton.addEventListener('click', function () {
        window.location.href = '../html/home.html';
    })

}

document.addEventListener('DOMContentLoaded', function() {
    welcomeScreen();
});