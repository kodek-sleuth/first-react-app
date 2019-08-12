import React, { useEffect } from 'react'; 
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getSingleUser } from '../../redux/actions/actionCreators';
import Spinner from '../Users/Spinner.jsx';

const User = props => {
  useEffect(() => {
    const username = props.match.params.login;
    props.getSingleUser(username)
  }, [])

  const redirectToProfile = () => {
    window.location = props.user.blog
  }

  const { name, avatar_url } = props.user;
  if (props.loading){
    return <Spinner />
  }
  return (
    <div className="card">
      <img src={avatar_url} alt="" className="avatar"/>
      <h3>{name}</h3>
      <button className="more" onClick={redirectToProfile}>Profile</button>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  user: state.user
})

export default connect(mapStateToProps, {getSingleUser})(User)