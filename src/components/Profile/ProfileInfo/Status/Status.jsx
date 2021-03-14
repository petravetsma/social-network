import React from 'react';

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
            <input onBlur={this.toggleEditMode} autoFocus={true} value={this.props.status}/>
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
