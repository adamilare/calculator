import React from 'react';
import renderer from 'react-test-renderer';
import CalcDisplay from '../../components/CalcDisplay';

test('Calculator\'s output component displays correctly', () => {
  const tree = renderer.create(<CalcDisplay />).toJSON();
  expect(tree).toMatchSnapshot();
});
