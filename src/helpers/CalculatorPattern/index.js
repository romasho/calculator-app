export default class CalculatorStore {
  constructor() {
    this.value = 0
    this.history = []
  }

  execute(command) {
    this.value = this.roundTo(
      command.execute(this.value, command.value),
    )
    this.history.push(command)
  }

  undo() {
    const command = this.history.pop()
    this.value = this.roundTo(
      command.undo(this.value, command.value),
    )
  }

  setCurrentValue(str) {
    this.value = str
  }

  roundTo(e) {
    return e % 1 === 0 ? e.toFixed(0) : e.toFixed(3)
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
    this.history = []
  }

  get CurrentValue() {
    return this.value
  }
}
