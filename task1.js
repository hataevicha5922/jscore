const minMinMax = (array) => {
  let min = Math.min(...array);
  let max = Math.max(...array);
  let arr = [];

  for (let i = min; i <= max; i++) {
    arr.push(i);
  }

  console.log(arr);
};

minMinMax([-1, 0, 3, 15]);
