import Users from "./Users";
import {connect} from "react-redux";
import {
  follow, onMountGetUsers, onUpdateGetUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
  unfollow
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.onMountGetUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.onUpdateGetUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users users={this.props.users}
               totalUsersCount={this.props.totalUsersCount}
               pageCount={this.props.pageCount}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               onPageChanged={this.onPageChanged}
               followingInProgress={this.props.followingInProgress}
        />

      </>)
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageCount: state.usersPage.pageCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

const mapDispatchToProps = {
  follow, unfollow,
  setTotalUsersCount, setCurrentPage, toggleFetching,
  onMountGetUsers, onUpdateGetUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
