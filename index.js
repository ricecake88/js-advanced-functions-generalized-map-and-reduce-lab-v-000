// Add your functions here
function map(sourceArray, mapFunction) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(mapFunction(sourceArray[i]));
  }
  return newArray;
}

function reduce(sourceArray, reduceFunction, startValue=0) {
  let result = (startValue) ? startValue : sourceArray[0];
  for (let i = 0; i < sourceArray.length; i++) {
      result = reduceFunction(sourceArray[i], startValue);
  }
  return result;
}