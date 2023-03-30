import calculate from '../../components/logic.js/calculate';

describe('Test the calculate function', () => {
  it('should reset the calculator when AC is pressed', () => {
    const obj = {
      total: 200,
      next: '12',
      operation: '+',
    };

    const buttonName = 'AC';
    const newObj = calculate(obj, buttonName);

    expect(newObj).toStrictEqual({
      next: null,
      total: null,
      operation: null,
    });
  });

  it('should add a number to the current operation', () => {
    const obj = {
      total: null,
      next: '12',
      operation: null,
    };

    const buttonName = '1';
    const newObj = calculate(obj, buttonName);

    expect(newObj).toStrictEqual({
      next: '121',
      total: null,
    });
  });

  it('should add a decimal point to the current operation', () => {
    const obj = {
      total: null,
      next: '12',
      operation: null,
    };

    let buttonName = '.';
    let newObj = calculate(obj, buttonName);
    buttonName = '4';
    newObj = calculate(newObj, buttonName);

    expect(newObj).toStrictEqual({
      next: '12.4',
      total: null,
    });
  });

  it('should compute the result of the current operation', () => {
    const obj = {
      total: '0',
      next: '12',
      operation: '+',
    };

    const buttonName = '=';
    const newObj = calculate(obj, buttonName);

    expect(newObj).toStrictEqual({
      total: '12',
      next: null,
      operation: null,
    });
  });

  it('should change the sign of the current value from positive to negative', () => {
    const obj = {
      total: null,
      next: '12',
      operation: null,
    };

    const buttonName = '+/-';
    const newObj = calculate(obj, buttonName);

    expect(newObj).toStrictEqual({
      total: null,
      next: '-12',
      operation: null,
    });
  });

  it('should change the sign of the current value from negative to positive', () => {
    const obj = {
      total: null,
      next: '-120',
      operation: null,
    };

    const buttonName = '+/-';
    const newObj = calculate(obj, buttonName);

    expect(newObj).toStrictEqual({
      total: null,
      next: '120',
      operation: null,
    });
  });

  it('should change the operation when one exists already', () => {
    const obj = {
      total: null,
      next: '12',
      operation: '+',
    };

    const buttonName = '-';
    const newObj = calculate(obj, buttonName);

    expect(newObj).toStrictEqual({
      operation: '-',
      total: 0,
    });
  });

  it('should calculate the result of a previous operation when a new operation is pressed', () => {
    const obj = {
      total: 200,
      next: '12',
      operation: '+',
    };

    const buttonName = '-';
    const newObj = calculate(obj, buttonName);

    expect(newObj).toStrictEqual({
      operation: '-',
      total: '212',
      next: null,
    });
  });
});
