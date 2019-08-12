import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/actions/actionCreators';
import UserItem from './UserItem.jsx';
import Spinner from '../Users/Spinner.jsx';

export const Users = props => {
    useEffect(() => {
        props.getUsers();
    }, [])

    if (props.loading){
        return <Spinner />
    }

    return(
        <div className="container">
            {props.users.map(user => 
                <div key={user.id}>
                    <UserItem user={user}/>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.users,
    loading: state.loading
})

export default connect(mapStateToProps, {getUsers})(Users)
