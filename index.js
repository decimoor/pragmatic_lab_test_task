const numbers = Array.from({ length: 10 }).map((_, index) => 9 - index);
// 9 8 7 6 5 4 3 2 1 0

const operations = ["+", "-", ""];

const totalOperations = Math.pow(3, numbers.length - 1);

for (let i = 0; i < totalOperations; i++) {
  let currentState = "";

  for (let j = 0; j < numbers.length; j++) {
    if (j === 0) {
      currentState += numbers[j];
    } else {
      currentState +=
        operations[divideIntegers(i, Math.pow(3, j - 1)) % 3] + numbers[j];
    }
  }

  const result = eval(currentState);

  if (result === 200) {
    console.log(`${currentState}=200`);
  }
}

function divideIntegers(a, b) {
  return Math.floor(a / b);
}
