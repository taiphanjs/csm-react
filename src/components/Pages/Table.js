import React, { Component } from "react";
import { getUsers } from '../../store/user/userActions';
import { connect } from 'react-redux';
import { setActivePage } from '../../store/common/commonActions';

class Table extends Component {
  state = {
    toggleStyle: true
  }
  componentDidMount() {
    this.props.getUsers();
    this.props.setActivePage({
      name: 'Table List',
      url: this.props.match.url
    })
  }
  toggleStyle = () => {
    this.setState({toggleStyle: !this.state.toggleStyle});
  }
  render() {
    const { loaded, usersList } = this.props;
    const userItem = loaded 
      ? usersList.map((user, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{user.username}</td>
          <td>{user.name}</td>
          <td>{user.address.city}</td>
          <td>{user.phone}</td>
        </tr>
      ))
      : null
    return (
      <div className="container-fluid">
        <div className="row">
          <div className={this.state.toggleStyle ? 'col-md-12 fade-in-component' : 'col-md-12 fade-out-component'}>
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title ">Simple Table</h4>
                <p className="card-category">
                  {" "}
                  Here is a subtitle for this table
                </p>
                <button className="btn btn-default" style={{backgroundColor: '#9c27b0'}} onClick={this.toggleStyle}>Change Style</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Phone</th>
                      </tr>
                    </thead>
                    <tbody>{ userItem }</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className={ !this.state.toggleStyle ? 'col-md-12 fade-in-component' : 'col-md-12 fade-out-component' }>
            <div className="card card-plain">
              <div className="card-header card-header-primary">
                <h4 className="card-title mt-0"> Table on Plain Background</h4>
                <p className="card-category">
                  {" "}
                  Here is a subtitle for this table
                </p>
                <button className="btn btn-default" style={{backgroundColor: '#9c27b0'}} onClick={this.toggleStyle}>Change Style</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>{ userItem }</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usersList: state.userReducer.usersList,
    loaded: state.userReducer.loaded,
  }
}

export default connect(mapStateToProps, { getUsers, setActivePage })(Table);
