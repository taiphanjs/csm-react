import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUsers } from '../../store/user/userActions';
import HeaderBoard from './DashBoard/HeaderBoard';
import MainBoard from './DashBoard/MainBoard';
import Task from './DashBoard/Task';
import Employee from './DashBoard/Employee';

class DashBoard extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { usersList } = this.props;
    const userItem = usersList.slice(0, 4).map((user, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{user.name}</td>
        <td>{user.phone}}</td>
        <td>{user.address.city}</td>
      </tr>
    ));
    return (
      <div className="container-fluid" >
        <HeaderBoard />
        <MainBoard />
        <div className="row">
          <Task />
          <Employee userItem={userItem} />
        </div>
      </div>
    )
  }
}

   
const mapStateToProps = state => {
  return {
    usersList: state.userReducer.usersList
  }
}
export default connect(mapStateToProps, { getUsers })(DashBoard);
