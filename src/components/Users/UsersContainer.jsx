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
import style from "./UsersContainer.module.css";
import Paginator from "../common/Paginator/Paginator";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.onMountGetUsers(this.props.pageCount, this.props.pageSize);
  }

  onPageChange = (event, page) => {
    this.props.onUpdateGetUsers(page, this.props.pageSize);
  }

  render() {
    return (
      <>
        <div className={style.paginatorWrap}>
        <Paginator
          pageCount={this.props.pageCount}
          onPageChange={this.onPageChange}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
        />
        </div>
        {this.props.isFetching ?
          <div className={style.preloaderWrap}> <Preloader/></div>
          : null}
        <Users users={this.props.users}
               totalUsersCount={this.props.totalUsersCount}
               pageCount={this.props.pageCount}
               pageSize={this.props.pageSize}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               onPageChange={this.onPageChange}
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
