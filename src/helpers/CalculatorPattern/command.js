class Command {
  constructor(execute, undo, value) {
    this.execute = execute
    this.undo = undo
    this.value = value
  }
}

function add(x, y) {
  return +x + Number(y)
}
function sub(x, y) {
  return +x - Number(y)
}
function mul(x, y) {
  return +x * Number(y)
}
function div(x, y) {
  if (!y) return 'Division by zero'
  return +x / Number(y)
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
