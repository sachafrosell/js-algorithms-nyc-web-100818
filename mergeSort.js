let array = [7, 1, 2, 8, 6, 10, 4, 3]


const splitMethod = (array) => {
  let nArr = [];
  for (let i = 0; i < array.length; i++) {
    let arr2 = []
    arr2.push(array[i]);
    nArr.push(arr2)
  }
  let arr2 = [];
  for (let i = 0; i < array.length; i += 2) {
    let x = nArr[i][0];
    let y = nArr[i + 1][0];
    debugger
    if (x > y) {
      debugger
      let merge = nArr[i + 1].concat(nArr[i])
      arr2.push(merge);
    } else {
      debugger
      let merge = nArr[i].concat(nArr[i + 1])
      arr2.push(merge);
    }

  }
  console.log(arr2);
}

console.log(splitMethod(array));
