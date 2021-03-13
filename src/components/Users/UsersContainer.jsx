import Users from "./Users";
import {connect} from "react-redux";
import {
  addUsers,
  follow,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching, toggleFollowingProgress,
  unfollow
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(response => {
        this.props.addUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
        this.props.toggleFetching(false)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleFetching(true)
    this.props.setCurrentPage(pageNumber);
      usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(response => {
        this.props.addUsers(response.items);
        this.props.toggleFetching(false)
      });

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
               addUsers={this.props.addUsers}
               onPageChanged={this.onPageChanged}
               toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
    followingInProgress: state.usersPage.followingInProgress
  }
}

const mapDispatchToProps = {
  follow, unfollow, addUsers,
  setTotalUsersCount, setCurrentPage, toggleFetching,
  toggleFollowingProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
