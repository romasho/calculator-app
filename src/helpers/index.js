// @todo: add some helpers

function checkBrackets(arr) {
  const countBracket = [0, 0]
  arr.forEach(item => {
    if (item === '(') {
      countBracket[0]++
    }

    if (item === ')') {
      countBracket[1]++
    }
  })

  return countBracket[0] === countBracket[1]
}

function replacer(match) {
  return match.split('(')[0] + '*('
}

export function calculateExpression(expr) {
  const arrExpr = expr
    .replace(/[0-9]\(/g, replacer)
    .match(/[^\d()]+|[\d.]+|[()]/g)

  if (!checkBrackets(arrExpr)) {
    return 'Brackets must be paired'
  }

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
    let res = 0
    if (exprArr[i] === '*') {
      res = +exprArr[i - 1] * +exprArr[i + 1]
      exprArr.splice(i - 1, 3, res)
      i--
    }
    if (exprArr[i] === '/') {
      if (!+exprArr[i + 1]) {
        return 'Division by zero'
      }
      res = +exprArr[i - 1] / +exprArr[i + 1]
      exprArr.splice(i - 1, 3, res)
      i--
    }
  }
  for (let i = 0; i < exprArr.length; i++) {
    let res = 0
    if (exprArr[i] === '+') {
      res = +exprArr[i - 1] + +exprArr[i + 1]
      exprArr.splice(i - 1, 3, res)
      i--
    }
    if (exprArr[i] === '-') {
      res = +exprArr[i - 1] - +exprArr[i + 1]
      exprArr.splice(i - 1, 3, res)
      i--
    }
  }
  return exprArr[0]
}
