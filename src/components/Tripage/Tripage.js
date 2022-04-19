import './tripage.css';

import PropTypes from 'prop-types';
import React from 'react';

import { LIKES, MAIN, PROFILE } from '../../lib/constants';

const propTypes = {
  currentPage: PropTypes.string.isRequired,
  PageCenter: PropTypes.func.isRequired,
  PageLeft: PropTypes.func.isRequired,
  PageRight: PropTypes.func.isRequired,
};

function Tripage({
  currentPage,
  PageCenter,
  PageLeft,
  PageRight,
}) {
  return (
    <div
      className={`
        tripage
        ${currentPage === MAIN ? 'tripage-center' : ''}
        ${currentPage === PROFILE ? 'tripage-left' : ''}
        ${currentPage === LIKES ? 'tripage-right' : ''}
      `}
    >
      <div className="tripage-page">
        <PageLeft />
      </div>
      <div className="tripage-page">
        <PageCenter />
      </div>
      <div className="tripage-page">
        <PageRight />
      </div>
    </div>
  );
}

Tripage.propTypes = propTypes;

export default Tripage;
