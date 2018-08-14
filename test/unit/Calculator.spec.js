'use strict';

import { expect } from 'chai';
import Calculator from '../../src/lib/Calculator';

describe('Calculator', () => {
    describe('state management', () => {
        it('should be able to set current state', () => {
            const calc = new Calculator();
            const n = 3.14159;
            calc.setCurrent(n);
            expect(calc.current).to.equal(n);
        });
        it('should be able to clear state', () => {
            const calc = new Calculator();
            const n = 3.14159;
            calc.setCurrent(n);
            calc.add(n);
            expect(calc.current).to.equal(n);
            expect(calc.operator).to.equal('add');
            expect(calc.exec()).to.equal(n*2);
            calc.clear();
            expect(calc.current).to.equal(0);
            expect(calc.rhsOperand).to.be.null;
            expect(calc.operator).to.be.null;
        });
        it('should be able to reset current only', () => {
            const calc = new Calculator();
            const n = 3.14159;
            calc.setCurrent(n);
            calc.add(n);
            expect(calc.current).to.equal(n);
            expect(calc.operator).to.equal('add');
            expect(calc.exec()).to.equal(n*2);
            calc.resetCurrent();
            expect(calc.current).to.equal(0);
            expect(calc.operator).to.equal('add');
            expect(calc.rhsOperand).to.equal(n);
        });
    });
    describe('mathematical operations', () => {
        it('should add correctly', () => {
            const calc = new Calculator();
            const a = 2;
            const b = 4;
            const expected = a + b;
            calc.setCurrent(a);
            calc.add(b);
            expect(calc.exec()).to.equal(expected);
        });
        it('should be able to divide correctly', () => {
            const calc = new Calculator();
            const a = 100;
            const b = 10;
            const expected = a / b;
            calc.setCurrent(a);
            calc.divide(b);
            expect(calc.exec()).to.equal(expected);
        });
        it('should be able to multiply correctly', () => {
            const calc = new Calculator();
            const a = Math.random();
            const b = Math.random();
            const expected = a * b;
            calc.setCurrent(a);
            calc.multiply(b);
            expect(calc.exec()).to.equal(expected);
        });
        it('should be able to subtract correctly', () => {
            const calc = new Calculator();
            const a = Math.random();
            const b = Math.random();
            const expected = a - b;
            calc.setCurrent(a);
            calc.subtract(b);
            expect(calc.exec()).to.equal(expected);
        });
        it('should be able to convert current to a decimal percentage', () => {
            const calc = new Calculator();
            const n = 99;
            const nPercent = 99 / 100;
            calc.setCurrent(n);
            calc.percent();
            expect(calc.current).to.equal(nPercent);
        });
        it('should be able to flip the sign of current', () => {
            const calc = new Calculator();
            const n = 1;
            calc.setCurrent(n);
            calc.sign();
            expect(calc.current).to.equal(n * -1);
        });
        it('should not return negative zero when flipping the sign', () => {
            const calc = new Calculator();
            const n = 0;
            calc.setCurrent(n);
            calc.sign();
            expect(calc.current).to.equal(0);
        });
    });
    describe('series of operations', () => {
        it('should be able to add multiple times in a row', () => {
            const calc = new Calculator();
            const a = 1;
            const b = 2;
            const expected = a + b + b + b;
            calc.setCurrent(a);
            calc.add(b);
            calc.exec();
            calc.exec();
            calc.exec();
            expect(calc.current).to.equal(expected);
        });
    });
});
