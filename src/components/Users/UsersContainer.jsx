import Users from "./Users";
import {connect} from "react-redux";
import {
  addUsers,
  follow,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
  unfollow
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    // Change to true for request

    // const request = false;
    // if (request) {
    //   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageCount}&count=${this.props.pageSize}`)
    //     .then(response => {
    //       this.props.setTotalUsersCount(response.data.totalCount)
    //       this.props.addUsers(response.data.items)
    //     });
    // } else {
    //   const users = [
    //     {
    //       id: '0',
    //       name: 'Dmitriy K',
    //       status: 'I am looking for a job',
    //       photos: {
    //         small: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
    //       },
    //       follow: false,
    //     },
    //     {
    //       id: '1',
    //       name: 'Svetlana D',
    //       status: 'I am pretty',
    //       photos: {
    //         small: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
    //       },
    //       follow: false,
    //     },
    //     {
    //       id: '2',
    //       name: 'Sergei S',
    //       status: 'I like tennis!',
    //       photos: {
    //         small: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
    //       },
    //       follow: true,
    //     },
    //     {
    //       id: '3',
    //       name: 'Andrew T.',
    //       status: 'ready to help',
    //       photos: {
    //         small: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
    //       },
    //       follow: true,
    //     },
    //   ];
    //   props.addUsers(users);
    // }

  }

  componentDidMount() {
    this.props.toggleFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.addUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleFetching(false)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.addUsers(response.data.items);
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
               onPageChanged={this.onPageChanged}/>

      </>)
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageCount: state.usersPage.pageCount,
    isFetching: state.usersPage.isFetching
  }
}

const mapDispatchToProps = {
  follow, unfollow, addUsers,
  setTotalUsersCount, setCurrentPage, toggleFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
