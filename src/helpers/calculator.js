export class CalculatorStore {
  constructor() {
    this.value = 0
    this.history = []
  }

  execute(command) {
    this.value = command.execute(this.value, command.value)
    this.history.push(command)
  }

  undo() {
    const command = this.history.pop()
    this.value = command.undo(this.value, command.value)
  }

  setCurrentValue(str) {
    if (this.value === 0 || this.value === '0') {
      this.value = str
    } else {
      this.value += str
    }
  }

  addDot() {
    if (this.value === 0 || this.value === '0') {
      this.value = '0.'
    } else {
      if (!this.value.includes('.')) {
        this.value += '.'
      }
    }
  }

  clear() {
    this.value = 0
  }

  get CurrentValue() {
    return this.value
  }
}

function add(x, y) {
  console.log(x, y)
  return Number(x) + Number(y)
}
function sub(x, y) {
  return +x - Number(y)
}
function mul(x, y) {
  return +x * Number(y)
}
function div(x, y) {
  return +x / Number(y)
}

class Command {
  constructor(execute, undo, value) {
    this.execute = execute
    this.undo = undo
    this.value = value
  }
}

export const AddCommand = function(value) {
  return new Command(add, sub, value)
}

export const SubCommand = function(value) {
  return new Command(sub, add, value)
}

export const MulCommand = function(value) {
  return new Command(mul, div, value)
}

export const DivCommand = function(value) {
  return new Command(div, mul, value)
}
