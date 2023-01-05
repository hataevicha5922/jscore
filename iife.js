const privetCounter = (() => {
  let count = 0;
  console.log(`initial value ${count}`);
  return () => {
    count += 1;
    console.log(count);
  };
})();

privetCounter();
privetCounter();
privetCounter();
