import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Details from '../routes/Details';
import store from '../redux/store';

describe('Test Details Route', () => {
  it('render Details', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Details />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render a div container', () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
    const page = screen.getByTestId('detailsItem');

    expect(page).toBeInTheDocument();
  });
});
