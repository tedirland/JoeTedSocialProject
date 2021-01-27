import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
// import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import { Link } from 'react-router-dom';

const PostLanding = ({ getPosts, post: { posts }, auth: {user} }) => {
    useEffect(() => {
      getPosts();
    }, [getPosts]);
  
    return (
      <Fragment>
        <h1 className="large text-primary">My Top 10</h1>
        <p className="lead">
          <i className="fas fa-user" />Welcome {user && user.name}, here are your daily top 10 Posts
        </p>
        <div className="posts">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>

        <Link>Show 10 More</Link>
      </Fragment>
    );
  };
  
  PostLanding.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    post: state.post
  });
  
  export default connect(mapStateToProps, { getPosts })(PostLanding);