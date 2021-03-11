import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import userIcon from './../../assets/images/user.png'

class Users extends React.Component {
  constructor(props) {
    super(props);
    // Change to true for request
    const request = false;
    if (request) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => this.props.addUsers(response.data.items));
    } else {
      const users = [
        {
          id: '0',
          name: 'Dmitriy K',
          status: 'I am looking for a job',
          photos: {
            small:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
          },
          follow: false,
        },
        {
          id: '1',
          name: 'Svetlana D',
          status: 'I am pretty',
          photos: {
            small:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
          },
          follow: false,
        },
        {
          id: '2',
          name: 'Sergei S',
          status: 'I like tennis!',
          photos: {
            small:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
          },
          follow: true,
        },
        {
          id: '3',
          name: 'Andrew T.',
          status: 'ready to help',
          photos: {
            small:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
          },
          follow: true,
        },
      ];
      props.addUsers(users);
    }
  }

  onFollow = (userId) => {
    this.props.follow(userId);
  }

  onUnfollow = (userId) => {
    this.props.unfollow(userId);
  }

  render() {
    return (
      <div>
        {
          this.props.users.map(v => <div className={s.userWrap} key={v.id}>
            <div className={s.photoBtnWrap}>
              <div>
                <img className={s.userPhoto}
                     src={v.photos.small
                       ? v.photos.small
                       : userIcon}
                     alt={v.name}/>
              </div>
              <div>
                {v.follow
                  ? <button className={s.btn} onClick={() => this.onUnfollow(v.id)}>Unfollow</button>
                  : <button className={s.btn} onClick={() => this.onFollow(v.id)}>Follow</button>}
              </div>
            </div>
            <div className={s.textWrap}>
              <div className={s.mainText}>
                <p>{v.name}</p>
                <p>{v.status}</p>
              </div>
            </div>
          </div>)
        }
      </div>
    );
  }
}


export default Users;
