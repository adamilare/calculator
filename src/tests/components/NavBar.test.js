import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';

test('NavBar component matches snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
