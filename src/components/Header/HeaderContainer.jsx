import React from 'react';
import Header from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {headerAPI} from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    headerAPI.getAuth()
      .then(response => {
        const {id, email, login} = response.data;
        this.props.setUserData(id, email, login);
      });
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);
