import React, { Component } from "react";
import { connect } from 'react-redux';
import HeaderBoard from './DashBoard/HeaderBoard';
import MainBoard from './DashBoard/MainBoard';
import Task from './DashBoard/Task';
import Employee from './DashBoard/Employee';
import { getUsers } from '../../store/user/userActions';
import { getTasks } from '../../store/dashboard/dashboardActions';

class DashBoard extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getTasks();
  }
  render() {
    const { usersList, tasksList } = this.props;
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
          <Task tasksList={tasksList} />
          <Employee userItem={userItem} />
        </div>
      </div>
    )
  }
}

   
const mapStateToProps = state => {
  return {
    usersList: state.userReducer.usersList,
    tasksList: state.dashboardReducer.tasksList,
  }
}
export default connect(mapStateToProps, { getUsers, getTasks })(DashBoard);
