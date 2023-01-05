// console.log(null === undefined);

// const alex = 'alexNew';

// const user = {
//   alex,
// };

// console.log(user.alex);

let x = 1;

const parentFunction = () => {
  let y = 5;
  console.log(x);
  console.log(y);

  const childFunction = () => {
    console.log((x += 5));
    console.log((y += 2));
  };
  return childFunction;
};

const result = parentFunction();

result();
result();
