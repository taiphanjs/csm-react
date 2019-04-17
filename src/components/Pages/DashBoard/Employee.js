import React, { Component } from "react";

class Employee extends Component {
  render() {
    const { userItem } = this.props;
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="card-header card-header-warning">
            <h4 className="card-title">Employees Stats</h4>
            <p className="card-category">
              New employees on 15th September, 2016
            </p>
          </div>
          <div className="card-body table-responsive">
            <table className="table table-hover">
              <thead className="text-warning">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>{userItem}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Employee;
