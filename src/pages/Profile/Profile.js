import './profile.css';

import React from 'react';
import { FormattedMessage } from 'react-intl';

import userIcon from '../../assets/icons/user-grey.svg';
import Footer from '../../components/Footer/Footer';

function Profile() {
  return (
    <div className="profile">
      <img src={userIcon} className="profile-photo" />
      <div className="profile-login">
        <div className="login-button">
          <p><FormattedMessage id="loginButton" /></p>
        </div>
        <div className="login-footer">
          <FormattedMessage id="loginFooter1" />
          <p className="login-footer-link"><FormattedMessage id="loginFooter2" /></p>
          <FormattedMessage id="loginFooter3" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
