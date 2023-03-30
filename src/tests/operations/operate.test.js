import operate from '../../components/logic.js/operate';

describe('Test the operate function', () => {
  it('should add two numbers', () => {
    const num1 = 20;
    const num2 = 90;
    const sum = (num1 + num2).toString();

    const result = operate(num1, num2, '+');

    expect(result).toBe(sum);
  });

  it('should subtract a number from another', () => {
    const num1 = 20;
    const num2 = 90;
    const difference = (num1 - num2).toString();

    const result = operate(num1, num2, '-');

    expect(result).toBe(difference);
  });

  it('should multiply two numbers', () => {
    const num1 = 20;
    const num2 = 90;
    const product = (num1 * num2).toString();

    const result = operate(num1, num2, 'x');

    expect(result).toBe(product);
  });

  it('should divide a number by another', () => {
    const num1 = 100;
    const num2 = 20;
    const answer = (num1 / num2).toString();

    const result = operate(num1, num2, '÷');

    expect(result).toBe(answer);
  });
});
