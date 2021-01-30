import React from 'react';
import { Link } from 'react-router-dom';
const moment = require('moment')

const DashboardActions = () => {

  let rawDate = moment().format('dddd, MMMM Do')

  return (
    <div className='dash-buttons'>
      <Link to='#!' className='btn btn-light'>
        <i className='fas fa-keyboard text-primary' /> Coming Soon
      </Link>
      <Link to='/posts' className='btn btn-light'>
        <i className='fas fa-comments text-primary' /> View User Posts
      </Link>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-edit text-primary' /> Edit Profile
      </Link>
    </div>
  );
};

export default DashboardActions;
