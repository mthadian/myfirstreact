import React, {Component} from 'react';
import UserService from '../UserService';
import DataService from '../UserService';

class UserComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state= {
            users:[]
        }

    }
    componentDidMount(){
        UserService.getAllUsers().then((res) => {
            this.setState({users:res.data});
        });
    }


}
export default UserComponent;