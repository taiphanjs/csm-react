import React, { Component } from "react";

class Upgrade extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Material Dashboard PRO</h4>
                <p className="card-category">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>
              </div>
              <div className="card-body">
                <div className="table-responsive table-upgrade">
                  <table className="table">
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">Free</th>
                        <th className="text-center">PRO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Components</td>
                        <td className="text-center">60</td>
                        <td className="text-center">200</td>
                      </tr>
                      <tr>
                        <td>Plugins</td>
                        <td className="text-center">2</td>
                        <td className="text-center">15</td>
                      </tr>
                      <tr>
                        <td>Example Pages</td>
                        <td className="text-center">3</td>
                        <td className="text-center">27</td>
                      </tr>
                      <tr>
                        <td>Login, Register, Pricing, Lock Pages</td>
                        <td className="text-center"><i className="fa fa-times text-danger" /></td>
                        <td className="text-center"><i className="fa fa-check text-success" /></td>
                      </tr>
                      <tr>
                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>
                        <td className="text-center"><i className="fa fa-times text-danger" /></td>
                        <td className="text-center"><i className="fa fa-check text-success" /></td>
                      </tr>
                      <tr>
                        <td>Mini Sidebar</td>
                        <td className="text-center"><i className="fa fa-times text-danger" /></td>
                        <td className="text-center"><i className="fa fa-check text-success" /></td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td className="text-center"><i className="fa fa-times text-danger" /></td>
                        <td className="text-center"><i className="fa fa-check text-success" /></td>
                      </tr>
                      <tr>
                        <td />
                        <td className="text-center">Free</td>
                        <td className="text-center">Just $49</td>
                      </tr>
                      <tr>
                        <td className="text-center" />
                        <td className="text-center">
                          <a href="#!" className="btn btn-round btn-fill btn-default disabled">Current Version</a>
                        </td>
                        <td className="text-center">
                          <a href="http://www.creative-tim.com/product/material-dashboard-pro/?ref=md-free-upgrade-live" className="btn btn-round btn-fill btn-info">Upgrade to PRO</a>
                        </td>
                      </tr>
                    </tbody>
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
export default Upgrade;
