import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <div className="navigation-left">
      <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#fff' }} />
      <span>2023</span>
    </div>
    <h1>Coins States</h1>
    <div className="navigation-right">
      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faGear} />
    </div>
  </header>
);

export default Header;
