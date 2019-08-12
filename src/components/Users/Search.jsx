import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUsers } from '../../redux/actions/actionCreators';
import UserItem from './UserItem.jsx';
import Spinner from '../Users/Spinner.jsx';

export class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        console.log(this.props);
        this.setState({ text: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text)
    }

    render() {
        if (this.props.loading){
            return <Spinner />
        }
        return (
            <div>
                <form style={{ marginTop: '100px', marginLeft: '100px' }} onSubmit={this.onSubmit}>
                    <input type="search" placeholder="search..." className="formControl" value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="formControlBtn" />
                </form>
                <div className="container">
                    {
                        this.props.users.map(user => 
                        <div key={user.id}>
                            <UserItem user={user} />
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    users: state.users
})

export default connect(mapStateToProps, {searchUsers})(Search)
