import React from 'react';
import './style.css';

const Profile = ({profileName, profileRole, avatarLink}) => {
  return (
    <div className="profile-wrap">
      <div className="profile">
        <a href="/">
          <div className="profile__avatar">
            <img src={avatarLink} alt="avatar" />
          </div>
          <div className="profile__text">
            <div className="profile__name">{profileName}</div>
            <div className="profile__role">{profileRole}</div>
          </div>
          <div className="profile__icon">
            <img src="https://na-chai.ru/images/dist/profile-link-icon.svg" alt="link" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Profile;