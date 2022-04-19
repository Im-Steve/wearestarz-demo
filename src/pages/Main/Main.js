import './main.css';

import PropTypes from 'prop-types';
import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Tripage from '../../components/Tripage/Tripage';
import { MAIN } from '../../lib/constants';
import Likes from '../Likes/Likes';
import Profile from '../Profile/Profile';
import Showcase from '../Showcase/Showcase';

const propTypes = {
  currentPage: PropTypes.string,
};

const defaultProps = {
  currentPage: MAIN,
};

function Home({ currentPage }) {
  return (
    <div className="main">
      <Navbar currentPage={currentPage} />
      <Tripage
        currentPage={currentPage}
        PageCenter={Showcase}
        PageLeft={Profile}
        PageRight={Likes}
      />
    </div>
  );
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
