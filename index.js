const arrayToBeAutogenerated = [1, 2, 3, 4];
const reducerMake = (accumulator, currentValue, currentIndex, sourceArray) => {
  console.log({ accumulator, currentValue, currentIndex, sourceArray });
  // TODO: Don't show last item.
  return accumulator + currentValue;
};

console.log(arrayToBeAutogenerated.reduce(reducerMake));

console.log(arrayToBeAutogenerated.reduce(reducerMake, 10));
