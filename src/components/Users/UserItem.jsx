import React from "react"; 
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div>
      <div className="card">
        <img src={avatar_url} alt="" className="avatar"/>
        <h3>{login}</h3>
        <Link to={`/user/${login}`}><button className="more">More</button></Link>
      </div>
    </div>
  );
}

export default UserItem;