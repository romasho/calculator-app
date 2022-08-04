export default class CalculatorStore {
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
    this.value = str
  }

  addToCurrentValue(str) {
    if (this.value === 0 || this.value === '0') {
      this.value = str
    } else {
      this.value += str
    }
  }

  addDot() {
    if (!this.value || this.value === '0') {
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
