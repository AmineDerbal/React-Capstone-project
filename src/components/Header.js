import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="navigation-left">
        <FontAwesomeIcon
          className="chevron-left"
          onClick={() => {
            navigate('/');
          }}
          icon={faChevronLeft}
          style={{ color: '#fff' }}
        />
        <span>2023</span>
      </div>
      <h1>Coins States</h1>
      <div className="navigation-right">
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
    </header>
  );
};

export default Header;
