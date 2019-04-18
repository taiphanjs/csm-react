import React, { Component } from "react";

class HeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerData: [
        {
          catName: "Used Space",
          icon_1: "content_copy",
          icon_2: "warning",
          icon_fa: "",
          title: "49/50 GB",
          content: "Get More Space..."
        },
        {
          catName: "Revenue",
          icon_1: "store",
          icon_2: "date_range",
          icon_fa: "",
          title: "$34,245",
          content: "Last 24 Hours"
        },
        {
          catName: "Fixed Issues",
          icon_1: "info_outline",
          icon_2: "local_offer",
          icon_fa: "",
          title: "75",
          content: "Tracked from Github"
        },
        {
          catName: "Followers",
          icon_1: "",
          icon_2: "update",
          icon_fa: "fa fa-twitter",
          title: "+245",
          content: "Just Updated"
        }
      ]
    };
  }
  render() {
    const contents = this.state.headerData.map((data, i) => (
      <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
        <div className="card card-stats">
          <div className="card-header card-header-warning card-header-icon">
            <div className="card-icon">
              <i className={data.icon_1 !== '' ? 'material-icons': `${data.icon_fa}`}>{data.icon_1 !== '' ? data.icon_1 : null}</i>
            </div>
            <p className="card-category">{data.catName}</p>
            <h3 className="card-title">{data.title}</h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons text-danger">{data.icon_2}</i> { i === 0 ? null : data.content }
              { i === 0 ? <a href="#pablo" className="text-warning">{data.content}</a> : null }
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="row">{ contents }</div>
    );
  }
}

export default HeaderBoard;
