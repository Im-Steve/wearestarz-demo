import './navbar.css';

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import likeIcon from '../../assets/icons/like-gold.svg';
import userIcon from '../../assets/icons/user-gold.svg';
import logoImg from '../../assets/logos/was-logo-img.png';
import logoTxt from '../../assets/logos/was-logo-txt.svg';
import { LIKES, MAIN, PROFILE } from '../../lib/constants';

const propTypes = {
  currentPage: PropTypes.string.isRequired,
};

function Navbar({ currentPage }) {
  return (
    <>
      <div className="upper-band" />
      <div className="navbar">
        <div
          className={`
            navbar-content
            ${currentPage === MAIN ? 'navbar-center' : ''}
            ${currentPage === PROFILE ? 'navbar-left' : ''}
            ${currentPage === LIKES ? 'navbar-right' : ''}
          `}
        >
          <div
            className={`
              navbar-section
              ${currentPage === PROFILE && 'navbar-big-icon'}
            `}
          >
            <Link to={`/${PROFILE}`}>
              <img src={userIcon} />
            </Link>
          </div>
          <div
            className={`
              navbar-section navbar-section-center
              ${currentPage === MAIN && 'navbar-big-icon'}
            `}
          >
            <Link to={`/${MAIN}`}>
              <img src={logoImg} />
              <img src={logoTxt} />
            </Link>
          </div>
          <div
            className={`
              navbar-section
              ${currentPage === LIKES && 'navbar-big-icon'}
            `}
          >
            <Link to={`/${LIKES}`}>
              <img src={likeIcon} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = propTypes;

export default Navbar;
