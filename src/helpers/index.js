// @todo: add some helpers

import CalculatorStore from './CalculatorPattern'
import {
  AddCommand,
  SubCommand,
  MulCommand,
  DivCommand,
} from './CalculatorPattern/command'

const calc = new CalculatorStore()

function replacer(match) {
  return match.split('(')[0] + '*('
}

export function calculateExpression(expr) {
  const arrExpr = expr
    .replace(/[0-9]\(/g, replacer)
    .match(/[^\d()]+|[\d.]+|[()]/g)

  console.log(
    'str res',
    expr
      .replace(/[0-9]\(/g, replacer)
      .match(/[^\d()]+|[\d.]+|[()]/g),
    expr,
  )
  while (arrExpr.includes('(')) {
    let openBracket = -1
    let closeBracket = -1
    for (let i = 0; i < arrExpr.length; i++) {
      if (arrExpr[i] === '(') {
        openBracket = i
      }
    }

    if (openBracket > -1) {
      closeBracket = arrExpr.indexOf(')', openBracket)
    }

    const res = calculate(
      arrExpr.slice(openBracket + 1, closeBracket),
    )
    arrExpr.splice(
      openBracket,
      closeBracket - openBracket + 1,
      res,
    )
  }

  if (arrExpr.length === 1) {
    return arrExpr[0]
  }

  return calculate(arrExpr)
}

function calculate(exprArr) {
  if (exprArr[0] === '-') {
    const tmp = `-${exprArr[1]}`
    exprArr.splice(0, 2, tmp)
  }

  for (let i = 0; i < exprArr.length; i++) {
    if (exprArr[i] === '*') {
      calc.setCurrentValue(exprArr[i - 1])
      calc.execute(new MulCommand(exprArr[i + 1]))
      exprArr.splice(i - 1, 3, calc.CurrentValue)

      i--
    }
    if (exprArr[i] === '/') {
      calc.setCurrentValue(exprArr[i - 1])
      calc.execute(new DivCommand(exprArr[i + 1]))
      exprArr.splice(i - 1, 3, calc.CurrentValue)
      i--
    }
  }
  for (let i = 0; i < exprArr.length; i++) {
    if (exprArr[i] === '+') {
      calc.setCurrentValue(exprArr[i - 1])
      calc.execute(new AddCommand(exprArr[i + 1]))
      exprArr.splice(i - 1, 3, calc.CurrentValue)

      i--
    }
    if (exprArr[i] === '-') {
      calc.setCurrentValue(exprArr[i - 1])
      calc.execute(new SubCommand(exprArr[i + 1]))
      exprArr.splice(i - 1, 3, calc.CurrentValue)
      i--
    }
  }
  return exprArr[0]
}
