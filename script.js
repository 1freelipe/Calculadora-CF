function Calculadora() {
    const display = document.querySelector('.display');

    this.inicia = function () {
        this.clickButtons();
        this.keyEnter();
    };

    this.clearDisplay = function () {
        display.value = '';
    };

    this.deleteOne = function () {
        display.value = display.value.slice(0, -1)
    }

    this.keyEnter = function () {
        display.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                this.countEqual();
            }
        })
    }

    this.countEqual = function () {
        let count = display.value

        if (count === null || count === '') return;

        try {
            count = eval(count)

            if (!count) {
                display.value = 'Conta inválida';
                display.style.color = 'red';

                setTimeout(() => {
                    display.value = '';
                    display.style.color = 'black';
                }, 1500)
                return;
            }
            display.value = count
        } catch (e) {
            display.value = 'Conta inválida';
            display.style.color = 'red';

            setTimeout(() => {
                display.value = '';
                display.style.color = 'black';
            }, 1500)
            return;
        }
    }

    this.clickButtons = function () {
        document.addEventListener('click', function (e) {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.deleteOne();
            }

            if (el.classList.contains('btn-equal')) {
                this.countEqual();
            }
        }.bind(this));
    };

    this.btnDisplay = function (valor) {
        display.value += valor;
        display.focus();
    }
}

const calculadora = new Calculadora();
calculadora.inicia();

