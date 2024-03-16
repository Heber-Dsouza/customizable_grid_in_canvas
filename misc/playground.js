let initial = [0, 6]


for(let a = 4; a > 0; a--){
  const temp = []
  for(let i = 0; i <= initial.length - 2; i++){
    temp.push(((initial[i + 1] - initial[i]) / 2) + initial[i])
  }
  initial.push(...temp)
  initial = initial.sort()
}


// for(let i of initial)
//   console.log(i)


const divideGrid = (arr, divisions) => {
  let _arr = arr
  for(let a = divisions; a > 0; a--){
    const temp = []
    for(let i = 0; i <= _arr.length - 2; i++){
      temp.push(((_arr[i + 1] - _arr[i]) / 2) + _arr[i])
    }
    _arr.push(...temp)
    _arr = _arr.sort((a, b) => a - b)
  }

  return _arr
}

for(let i of divideGrid([0, 100], 5)) // adicionados: (2 ** count) - 1, total: (2 ** count) + 1
  console.log(i)