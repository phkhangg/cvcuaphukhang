import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.jpg';

export default function Profile() {
	return (
    <div>
      <div className="card">
        <div className="card-image">
          <img className="activator" src={ImgProfile} alt="Nguyễn Tuấn Minh" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator black-text text-darken-4">
            Nguyễn Tuấn Minh
          </span>
          <p className='back-text'>Full Stack Web Developer</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Follow Me
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            <i className="fab fa-facebook-f grey-text text-darken-4 social_style">
              <a href="https://www.facebook.com/profile.php?id=100014532467977"></a>
            </i>
            <i className="fab fa-twitter grey-text text-darken-4 social_style"></i>
            <i className="fab fa-google-plus-g grey-text text-darken-4 social_style"></i>
            <i className="fab fa-instagram grey-text text-darken-4 social_style">
              <a href="https://www.instagram.com/ngxtminh/"></a>
            </i>
            <i className="fab fa-pinterest grey-text text-darken-4 social_style"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
