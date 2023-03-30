import React from 'react';
import renderer from 'react-test-renderer';
import CalcDisplay from '../../components/calcDisplay'; // eslint-disable-line

test("Calculator's output component displays correctly", () => {
  const tree = renderer.create(<CalcDisplay />).toJSON();
  expect(tree).toMatchSnapshot();
});
