const splStr = (str) => {
  // let str = 'hello world';

  const res = str.split(' ').reduce((accum, curent) => {
    return (
      accum + ' ' + curent[0].toUpperCase() + curent.slice(1, curent.length)
    );
  }, '');

  console.log(res);
};

splStr('hello world');
