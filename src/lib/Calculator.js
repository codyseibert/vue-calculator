'use strict';

export default class Calculator {
    constructor () {
        // state
        this.current = 0;
        this.rhsOperand = null;
        this.operator = null;
    }
    // state handling
    clear () {
        this.operator = null;
        this.rhsOperand = null;
        return this.current = 0;
    };
    resetCurrent () {
        return this.setCurrent(0);
    };
    setCurrent (origN) {
        let n = parseFloat(origN);
        if (isNaN(n)) {
            throw new Error(`setCurrent received invalid float: ${origN}`);
        }
        return this.current = n;
    };
    // mathematical operations
    add (n) {
        this.operator = 'add';
        this.rhsOperand = n;
    };
    divide (n) {
        this.operator = 'divide';
        this.rhsOperand = n;
    };
    exec () {
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
    multiply (n) {
        this.operator = 'multiply';
        this.rhsOperand = n;
    };
    percent () {
        return this.current = this.current / 100;
    };
    sign () {
        let result = -this.current;
        // prevent negative 0 from being returned
        if (Math.abs(result) === 0) {
            result = 0;
        }
        return this.current = result;
    };
    subtract (n) {
        this.operator = 'subtract';
        this.rhsOperand = n;
    };
};
