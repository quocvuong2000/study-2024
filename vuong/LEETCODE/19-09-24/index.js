/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
  const memo = new Map();

  function compute(expr) {
      if (memo.has(expr)) {
          return memo.get(expr);
      }

      const results = [];
      let isNumber = true;

      for (let i = 0; i < expr.length; i++) {
          const char = expr[i];
          if (char === '+' || char === '-' || char === '*') {
              isNumber = false;
              const left = expr.substring(0, i);
              const right = expr.substring(i + 1);

              const leftResults = compute(left);
              const rightResults = compute(right);

              for (const l of leftResults) {
                  for (const r of rightResults) {
                      if (char === '+') {
                          results.push(l + r);
                      } else if (char === '-') {
                          results.push(l - r);
                      } else if (char === '*') {
                          results.push(l * r);
                      }
                  }
              }
          }
      }

      if (isNumber) {
          results.push(parseInt(expr));
      }

      memo.set(expr, results);
      return results;
  }

  return compute(expression);
};
