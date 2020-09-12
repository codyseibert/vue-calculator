<template>
  <div class="calculator">
    <div class="display">{{ current || 0 }}</div>
    <div @click="clear" class="btn noselect">CE</div>
    <div @click="sign"  class="btn noselect">+/-</div>
    <div @click="percent" class="btn noselect">%</div>

    <div @click="divide" class="btn operator noselect">÷</div>
    
    <div @click="append('7')" class="btn noselect">7</div>
    <div @click="append('8')" class="btn noselect">8</div>
    <div @click="append('9')" class="btn noselect">9</div>
    
    <div @click="times" class="btn operator noselect">×</div>
    
    <div @click="append('4')" class="btn noselect">4</div>
    <div @click="append('5')" class="btn noselect">5</div>
    <div @click="append('6')" class="btn noselect">6</div>
    
    <div @click="minus" class="btn operator noselect">-</div>
    
    <div @click="append('1')" class="btn noselect">1</div>
    <div @click="append('2')" class="btn noselect">2</div>
    <div @click="append('3')" class="btn noselect">3</div>
    
    <div @click="add" class="btn operator noselect">+</div>
    
    <div @click="append('0')" class="btn zero noselect">0</div>
    
    <div @click="dot" class="btn noselect">.</div>
    <div @click="equal" class="btn operator noselect">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    clear() {
      this.current = '';
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ? 
        this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current), 
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    }
  }
}
</script>

<style scoped>

.calculator {
  width: 400px;
  margin: 0 auto;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  text-align: center;
  padding: 2rem;
  font-family: "Courier New", Courier, monospace;
}

.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: #ccc;
  text-align: right;
  padding:1rem;
  font-size: 50px;
}

.zero {
  grid-column: 1 / 3;
}

.btn {
  background-color: #eee;
  border: 1px solid #999;
  cursor: pointer;
  padding: 1rem;
}
.btn:active {
   transform: scale(0.95);
}

.operator {
  background-color: orange;
  color: white;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
