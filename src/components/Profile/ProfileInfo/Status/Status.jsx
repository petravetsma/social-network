import React from 'react';
import StatusInput from "../../../Forms/StatusInput/StatusInput";


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
      <div >
        <b>Status:</b>

        {this.props.isOwner && this.state.editMode
          ? <div>
            <StatusInput storeStatus={this.props.status}
                         editMode={this.state.editMode}
                         toggleEditMode={this.toggleEditMode}
                         updateUserStatus={this.props.updateUserStatus}/>
          </div>
          : <div>
            <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
          </div>
        }
      </div>
    );
  }
}

export default Status;
