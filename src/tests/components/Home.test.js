import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../routes/Home';

test('Home page displays correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
