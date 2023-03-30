/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import Quote from '../../routes/Quote'; // eslint-disable-line

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({ data: [{ quote: 'Test quote', author: 'Test author' }] })
  ),
}));

test('Quote page displays correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
