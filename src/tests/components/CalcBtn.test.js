import React from 'react';
import renderer from 'react-test-renderer';

import CalcBtn from '../../components/CalcBtn'; // eslint-disable-line

test("Calculator's buttons display correctly", () => {
  const onClick = jest.fn();
  const tree = renderer.create(<CalcBtn onClick={onClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
