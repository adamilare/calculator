import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../../components/Layout'; // eslint-disable-line

test('Layout componet renders as expected!', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
