import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { create } from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import store from  '../redux/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-dom';
import { Users } from '../components/Users/Users';
import UserItem from '../components/Users/UserItem';
import Spinner from '../components/Users/Spinner';
import { User } from '../components/Users/User';

configure({ adapter: new Adapter() });

const props = {
    getUsers:jest.fn(),
    users: [{
        login: 'mojombo',
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4"
    }],
    loading: true || false
}

const userProps = {
    getSingleUser:jest.fn(),
    user: [{
        login: 'mojombo',
        name: 'mojombo mark',
        blog: "https://avatars0.githubusercontent.com/u/1?v=4"
    }],
    loading: false
}

const userItemProps = {
    user: [{
        login: 'mojombo',
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4"
    }],
    loading: false
}



describe('<Users />', () => {
    it('should return all users on the page', () => {
        const component = shallow(<Users {...props}/>);
        expect(component).toMatchSnapshot();
    });
    it('should display a container', () => {
        const component = shallow(<UserItem {...userItemProps} />);
        expect(component.find('div')).toHaveLength(2)
    });
});

describe('<Spinner />', () => {
    it('should display spinner', () => {
        const component = shallow(<Spinner />);
        expect(component.find('div')).toHaveLength(1)
    });
})

describe('<User />', () => {
    it('should return a user', () => {
        const component = shallow(<User {...userProps} />);
        expect(component).toMatchSnapshot();
    });
})
