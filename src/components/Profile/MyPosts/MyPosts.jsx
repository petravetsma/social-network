import React from 'react';
import Post from './Post/Post';
import TextareaForm from "../../forms/TextareaForm/TextareaForm";
const MyPosts = (props) => {
  const postElements = props.posts.map(v => <Post key={v.id} text={v.text} likes={v.likes}/>);

  return (
    <div>
      <div>
        <div>
          <TextareaForm sendText={props.addPost}/>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
