module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  let stack = [];
  let brInd;
  bracketsConfig.forEach(element => (brackets = brackets.concat(element)));

  for (let i = 0; i < str.length; i++) {
    brInd = brackets.indexOf(str[i]);
    if ((brInd + 1) % 2 == 0) {
      if (stack.pop() !== brackets[brInd - 1]) return false;
    } else if (brackets[brInd] == brackets[brInd + 1] &&stack[stack.length - 1] == brackets[brInd])
      stack.pop();
    else stack.push(brackets[brInd]);
  }
  if (stack.length > 0) return false;
  return true;
};
