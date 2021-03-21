import React from 'react';
import StatusInput from "../../../Forms/StatusInput/StatusInput";
import style from './Status.module.css';


class Status extends React.Component {
  state = {
    editMode: false
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
}

  render() {
    return (
      <div className={style.statusWrap}>
        <b>Status:</b>

        {this.props.isOwner && this.state.editMode
          ? <div>
            <StatusInput storeStatus={this.props.status}
                         editMode={this.state.editMode}
                         toggleEditMode={this.toggleEditMode}
                         updateUserStatus={this.props.updateUserStatus}/>
          </div>
          : <div>
            <span onDoubleClick={this.toggleEditMode}>{this.props.status || 'Click to set your status'}</span>
          </div>
        }
      </div>
    );
  }
}

export default Status;
