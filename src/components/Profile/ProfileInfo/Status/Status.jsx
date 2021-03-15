import React from 'react';
import StatusInput from "../../../Forms/TextareaForm/StatusInput";

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
      <>
        Status:
        {this.state.editMode
          ? <div>
            {/*<input onBlur={(e) => {*/}
            {/*  this.toggleEditMode();*/}
            {/*  this.props.updateUserStatus(e.target.value);*/}
            {/*}*/}
            {/*} autoFocus={true} value={this.props.status}/>*/}
            <StatusInput storeStatus={this.props.status} editMode={this.state.editMode} toggleEditMode={this.toggleEditMode} updateUserStatus={this.props.updateUserStatus}/>
          </div>
          : <div>
            <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
          </div>
        }
      </>
    );
  }
}

export default Status;
