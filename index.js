// Add your functions here
function map(sourceArray, mapFunction) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(mapFunction(sourceArray[i]));
  }
  return newArray;
}

function reduce(sourceArray, reduceFunction, startValue) {
  let result = (!!startValue) ? startValue : sourceArray[0];
  let i = (!!startValue) ? 1: 0;
  for (let j = i; j < sourceArray.length; j++) {
      result = reduceFunction(sourceArray[j], result);
  }
  return result;
}