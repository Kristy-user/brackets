module.exports = function check(str, bracketsConfig) {
  const bracketsObj = Object.fromEntries(bracketsConfig);
  let resultArr = [];
  str.split('').forEach((item) => {
    let lastElem = resultArr[resultArr.length - 1];
    if (resultArr.length > 0 && bracketsObj[lastElem] === item) {
      resultArr.pop();
    } else {
      resultArr.push(item);
    }
  });
  return resultArr.length === 0;
};
