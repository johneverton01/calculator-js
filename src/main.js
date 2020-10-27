import operations from './operations';

class App {
    constructor() {
        this.formEl = document.getElementById('formCalulator');
        this.inputEl = document.querySelector('input[name=result]');
        this.buttonOperation = document.querySelectorAll('button.operation');
        this.buttonNumber = document.getElementsByClassName('value');
        this.operationsHandlers();
    }

    operationsHandlers() {
        this.formEl.onsubmit = event => this.selectOperation(event);
    }

    selectOperation(event) {
        event.preventDefault();
        const buttonsOperation = this.buttonOperation;
        buttonsOperation.forEach((item, index) => {
            console.log(buttonsOperation[index]);

        })

    }
}
new App();
