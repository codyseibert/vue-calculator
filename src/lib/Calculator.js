'use strict';

export default Calculator;

function Calculator () {
    // state
    this.current = 0;
    this.rhsOperand = null;
    this.operator = null;

    // methods
    // state handling
    this.clear = function () {
        this.operator = null;
        this.rhsOperand = null;
        return this.current = 0;
    };
    this.resetCurrent = function () {
        return this.setCurrent(0);
    };
    this.setCurrent = function (origN) {
        let n = parseFloat(origN);
        if (isNaN(n)) {
            throw new Error(`setCurrent received invalid float: ${origN}`);
        }
        return this.current = n;
    };
    // mathematical operations
    this.add = function (n) {
        this.operator = 'add';
        this.rhsOperand = n;
    };
    this.divide = function (n) {
        this.operator = 'divide';
        this.rhsOperand = n;
    };
    this.exec = function () {
        switch (this.operator) {
            case 'add':
                this.current = this.current + this.rhsOperand;
                break;
            case 'divide':
                this.current = this.current / this.rhsOperand;
                break;
            case 'multiply':
                this.current = this.current * this.rhsOperand;
                break;
            case 'subtract':
                this.current = this.current - this.rhsOperand;
                break;
            default:
                break;
        }
        return this.current;
    };
    this.multiply = function (n) {
        this.operator = 'multiply';
        this.rhsOperand = n;
    };
    this.percent = function () {
        return this.current = this.current / 100;
    };
    this.sign = function () {
        let result = -this.current;
        // prevent negative 0 from being returned
        if (Math.abs(result) === 0) {
            result = 0;
        }
        return this.current = result;
    };
    this.subtract = function (n) {
        this.operator = 'subtract';
        this.rhsOperand = n;
    };
    return this;
}
