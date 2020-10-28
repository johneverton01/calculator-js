import operations from './operations';

class App {
    constructor() {
        this.formEl = document.getElementById('formCalulator');
        this.inputEl = document.querySelector('input[name=result]');
        this.buttonOperation = document.querySelectorAll('button.operation');
        this.buttonNumber = document.querySelectorAll('button.value');
        this.Arrnumber = [];
        this.number;
        this.operation;
        this.operationsHandlers();
    }

    operationsHandlers() {
        this.selectNumber();
        this.selectOperation();
        this.formEl.onsubmit = event => this.submitForm(event);
    }

    selectOperation() {
        this.buttonOperation.forEach(element => {
            element.addEventListener('click', (e) => {
                this.actions(element.textContent);
            })
        });

    }

    selectNumber() {
        this.buttonNumber.forEach(element => {
            element.addEventListener('click', (e) => {
                let number = this.setNumberInInput(element.textContent)
                this.number = number;
            })
        });
    }

    actions(action) {
        switch(action){
            case 'C':
                this.inputEl.value = 0;
                this.Arrnumber = [];
                break;
            case 'CE':
                this.inputEl.value = 0;
                break;
            case 'Delete':
                this.Arrnumber.push(this.inputEl.value);
                this.inputEl.value = 0;
                break;
            default:
                this.Arrnumber.push(this.inputEl.value);
                this.operation = action;
                this.inputEl.value = 0;
                break;
        }
    }

    setNumberInInput(number) {
        let value = this.inputEl.value;
        if(value === 0){
            value = number;
            this.inputEl.value = parseFloat(value)
            return value;
        }

        value = this.inputEl.value + number;
        this.inputEl.value = parseFloat(value)
        return value


    }

    submitForm(event) {
        event.preventDefault();
        this.Arrnumber.push(this.inputEl.value);

        let result = this.makeOperation();
        this.inputEl.value = result;
        this.Arrnumber = [];
    }

    makeOperation() {
        let result;
        switch(this.operation){
            case '+':
                result = operations.sum(parseFloat(this.Arrnumber[0]), parseFloat(this.Arrnumber[1]));
                break;
            case '-':
                result = operations.sub(parseFloat(this.Arrnumber[0]), parseFloat(this.Arrnumber[1]));
                break;
            case '/':
                result = operations.division(parseFloat(this.Arrnumber[0]), parseFloat(this.Arrnumber[1]));
                break;
            case '*':
                result = operations.multiplication(parseFloat(this.Arrnumber[0]), parseFloat(this.Arrnumber[1]));
                break;
            case 'x²':
                result = operations.sub(parseFloat(this.Arrnumber[0]));
                break;
            case 'raiz':
                result = operations.sub(parseFloat(this.Arrnumber[0]));
                break;
            }
            return result;
    }


}
new App();
