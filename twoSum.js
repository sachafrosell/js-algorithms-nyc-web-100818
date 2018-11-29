array = [1, 2, 3, 4, 5];

const findIndices = (array, target) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        results.push(i, j);
      };
    };
  };
  let answer = results.splice(0,2);
  return answer;
}

// console.log(findIndices(array, 3));
