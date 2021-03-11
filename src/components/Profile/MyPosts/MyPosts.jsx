import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postElements = props.posts.map(v => <Post key={v.id} text={v.text} likes={v.likes}/>);

  const onAddPost = () => {
    props.addPost();
  }

  const onChangeInput = (event) => {
    props.changeInput(event.target.value);
  }

  return (
    <div>
      <div>
        <div>
          <textarea
            value={props.newPostText}
            onChange={onChangeInput}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
