let currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;

    function updateDisplay() {
        document.querySelector('#display').value = currentDisplay;
    }

    function appendToDisplay(value) {
        currentDisplay += value;
        updateDisplay();
    }

    function calculateResult() {
        try {
            currentDisplay = eval(currentDisplay);
        } catch {
            currentDisplay = 'Error';
        }
        updateDisplay();
    }

    // Add click effect to all buttons
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function () {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
        });
    });
