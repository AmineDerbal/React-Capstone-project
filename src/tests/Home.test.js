import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import store from '../redux/store';
import Home from '../routes/Home';

const mockStore = configureMockStore([]);

describe('Test Home Route', () => {
  it('render Home', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a div container', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const page = screen.getByTestId('cryptoItem');
    expect(page).toBeInTheDocument();
  });
});

describe('home component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      crypto: {
        cryptos: [
          {
            id: 'bitcoin',
            icon: 'https://static.coinstats.app/coins/1650455588819.png',
            name: 'Bitcoin',
            symbol: 'BTC',
            rank: 1,
            price: 28786.19357173307,
            priceBtc: 1,
            volume: 76799812579.72203,
            marketCap: 557058183867.9104,
            availableSupply: 19351575,
            totalSupply: 21000000,
            priceChange1h: 0.1,
            priceChange1d: -1.59,
            priceChange1w: -4.59,
            websiteUrl: 'http://www.bitcoin.org',
            twitterUrl: 'https://twitter.com/bitcoin',
            exp: [
              'https://blockchair.com/bitcoin/',
              'https://btc.com/',
              'https://btc.tokenview.io/',
            ],
          },
          {
            id: 'ethereum',
            icon: 'https://static.coinstats.app/coins/1650455629727.png',
            name: 'Ethereum',
            symbol: 'ETH',
            rank: 2,
            price: 1963.315626510734,
            priceBtc: 0.06824796503542649,
            volume: 89239272240.45131,
            marketCap: 236439921620.3423,
            availableSupply: 120428890,
            totalSupply: 120428890,
            priceChange1h: 0.74,
            priceChange1d: -0.67,
            priceChange1w: -1.16,
            websiteUrl: 'https://www.ethereum.org/',
            twitterUrl: 'https://twitter.com/ethereum',
            contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            decimals: 18,
            exp: [
              'https://etherscan.io/',
              'https://ethplorer.io/',
              'https://blockchair.com/ethereum',
              'https://eth.tokenview.io/',
            ],
          },
        ],
      },
    });
    store.dispatch = jest.fn();
  });
  it('should render coins', () => {
    render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
        ,
      </Router>,
    );
  });
});
