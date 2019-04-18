import React, { Component } from "react";

class MainBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBoard: [
        {
          classCard: "card-header-success",
          id: "dailySalesChart",
          title: "Daily Sales",
          category: "increase in today sales.",
          content: "updated 4 minutes ago"
        },
        {
          classCard: "card-header-warning",
          id: "websiteViewsChart",
          title: "Email Subscriptions",
          category: "Last Campaign Performance",
          content: "campaign sent 2 days ago"
        },
        {
          classCard: "card-header-danger",
          id: "completedTasksChart",
          title: "Completed Tasks",
          category: "Last Campaign Performance",
          content: "campaign sent 2 days ago"
        }
      ]
    };
  }
  
  render() {
    const cardCharts = this.state.mainBoard.map((data, i) => (
      <div className="col-md-4" key={i}>
        <div className="card card-chart">
          <div className={`card-header ${data.classCard}`}>
            <div className="ct-chart" id={data.id} />
          </div>
          <div className="card-body">
            <h4 className="card-title">{data.title}</h4>
            <p className="card-category">{data.category}</p>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">access_time</i> {data.content}
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="row">{ cardCharts }</div>
    );
  }
}

export default MainBoard;
