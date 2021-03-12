import Users from "./Users";
import {connect} from "react-redux";
import {addUsersAC, followAC, setCurrentPageAC, setTotalUsersCountAC, unfollowAC} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";


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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.addUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.addUsers(response.data.items);
      });
  }


  render() {
    return <Users users={this.props.users}
                  totalUsersCount={this.props.totalUsersCount}
                  pageCount={this.props.pageCount}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  addUsers={this.props.addUsers}/>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageCount: state.usersPage.pageCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    addUsers: (users) => {
      dispatch(addUsersAC(users));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
