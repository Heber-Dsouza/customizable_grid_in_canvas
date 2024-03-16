// ------------------------------------------------------------------------

const getMax = (a, b) => (a >= b ? a : b)

// ------------------------------------------------------------------------

const divideGrid = (arr, divisions) => {
  let _arr = arr
  for (let a = divisions; a > 0; a--) {
    const temp = []
    for (let i = 0; i <= _arr.length - 2; i++) {
      temp.push((_arr[i + 1] - _arr[i]) / 2 + _arr[i])
    }
    _arr.push(...temp)
    _arr = _arr.sort((a, b) => a - b)
  }

  return _arr
}

// ------------------------------------------------------------------------