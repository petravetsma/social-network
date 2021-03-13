import React from 'react';
import Header from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import axios from "axios";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
      withCredentials: true
    })
      .then(response => {
        const {id, email, login} = response.data.data;
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
