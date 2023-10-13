function indexInput() {
    const nameInput = document.querySelector('.guest-name');
    const inputMessage = document.getElementById('warning-message');
    const continueButton = document.getElementById('continue-welcome');

    nameInput.addEventListener('focus', function () {
        inputMessage.style.display = 'block';
    });

    nameInput.addEventListener('blur', function () {
        inputMessage.style.display = 'none';
    });

    nameInput.addEventListener('input', function () {

        const name = nameInput.value.trim();

        if(name.length > 30) {
            inputMessage.innerHTML = 'I\'m sorry! Your name is more than 30 characters!';
            inputMessage.classList.add('danger');
            continueButton.disabled = true;
        } else if (name.length === 0) {
            inputMessage.innerHTML = 'Name can\'t be longer than 30 characters.';
            continueButton.disabled = true;
        } else {
            continueButton.disabled = false;
            inputMessage.textContent = '';
            inputMessage.classList.remove('danger');
        }
    });

    function buttonPress() {
        if (!continueButton.disabled) {
            const name = nameInput.value.trim();
            
            nameInput.value = '';
            localStorage.setItem('inputName', name);
            window.location.href = '../html/welcome.html';
        }
    }

    continueButton.addEventListener('click', buttonPress);

    nameInput.addEventListener('keypress', function (event) {
        if(event.key === 'Enter') {
            buttonPress();
        }
    });
}

indexInput();