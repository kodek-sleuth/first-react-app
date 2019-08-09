import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleUser } from '../../redux/actions/actionCreators';
import Spinner from '../Users/Spinner';

class User extends Component {

  componentDidMount(){
    const username = this.props.match.params.login;
    this.props.getSingleUser(username)
  }

  render() {
    const { name, avatar_url, blog } = this.props.user;
    if (this.props.loading){
      return <Spinner />
    }
    return (
     <div className="card">
        <img src={avatar_url} alt="" className="avatar"/>
        <h3>{name}</h3>
        <Link to={blog}><button className="more">Profile</button></Link>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  user: state.user
})

export default connect(mapStateToProps, {getSingleUser})(User)