import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteTask } from '../../../store/dashboard/dashboardActions';

class Task extends Component {
  state = {
    id: '',
    userId: '',
    title: '',
    completed: ''
  }
  
  chunkTasks = (arr, size) => {
    let tempArr = [];
    for (let i = 0; i < arr.length; i += size) {
      let rsChunk = arr.slice(i, i + size);
      tempArr.push(rsChunk);
    }
    return tempArr;
  };
  
  render() {   
    const hardData = [
      {
        id: 1,
        title: "profile",
        icon: 'bug_report',
        iconName: 'Bugs'
      },
      {
        id: 2,
        title: "messages",
        icon: 'code',
        iconName: 'Website'
      },
      {
        id: 2,
        title: "settings",
        icon: 'cloud',
        iconName: 'Server'
      }
    ];
    const tasks = this.chunkTasks(this.props.tasksList.slice(0, 12), 4);
    for (let i in tasks) tasks[i].title = hardData[i].title;

    const tasksPanes = tasks.map((taskList, i) => (
      <div
        className={i === 0 ? "tab-pane active show" : "tab-pane"}
        id={taskList.title}
        key={i}
      >
        <table className="table">
          <tbody>
            {taskList.map((task, i) => (
              <tr key={i}>
                <td>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        defaultChecked={task.completed}
                      />
                      <span className="form-check-sign">
                        <span className="check" />
                      </span>
                    </label>
                  </div>
                </td>
                <td>{task.title}</td>
                <td className="td-actions text-right" style={{float: 'right'}}>
                  <button
                    type="button"
                    rel="tooltip"
                    title="Edit Task"
                    className="btn btn-primary btn-link btn-sm"
                  >
                    <i className="material-icons">edit</i>
                  </button>
                  <button
                    type="button"
                    rel="tooltip"
                    title="Remove"
                    className="btn btn-danger btn-link btn-sm"
                    onClick={this.props.deleteTask.bind(this, task.id )}
                  >
                    <i className="material-icons">close</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));

    const taskControl = hardData.map((data, i) => (
      <li className="nav-item" key={i}>
        <a
          className={i === 0 ? "nav-link active" : "nav-link"}
          href={`#${data.title}`}
          data-toggle="tab"
        >
          <i className="material-icons">{data.icon}</i> {data.iconName}
          <div className="ripple-container" />
        </a>
      </li>
    ));
    
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="card-header card-header-tabs card-header-primary">
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <span className="nav-tabs-title">Tasks:</span>
                <ul className="nav nav-tabs" data-tabs="tabs">
                  { taskControl }
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="tab-content">
              { tasksPanes }
             </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteTask })(Task);
