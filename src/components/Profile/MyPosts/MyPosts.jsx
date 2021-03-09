import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
  const newPostTextarea = React.createRef();

  const postElements = props.posts.map(v => <Post text={v.text} likes={v.likes}/>);

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const changeInput = (event) => {
    props.dispatch(addPostTextActionCreator(event.target.value));
  }

  return (
    <div>
      <div>
        <div>
          <textarea ref={newPostTextarea} name="new post" id="new-post" cols="30" rows="10"
                    value={props.newPostText}
                    onChange={changeInput}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
