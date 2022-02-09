import { render, screen } from '@testing-library/react';
import React from 'react'
import ReactDOM from 'react-dom'
import SamuraiJSApp from "./App";

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SamuraiJSApp />,div);
  ReactDOM.unmountComponentAtNode(div);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
