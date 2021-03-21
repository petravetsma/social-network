import React from 'react';
import Post from './Post/Post';
import TextareaForm from "../../Forms/TextareaForm/TextareaForm";
import style from './MyPosts.module.css';


const MyPosts = (props) => {
  const postElements = props.posts.map(v => <Post smallPhoto={props.smallPhoto} key={v.id} text={v.text}
                                                  likes={v.likes}/>);

  return (
    <div>
      {props.isOwner &&
      <div className={style.formWrap}>
        <TextareaForm sendText={props.addPost}/>
      </div>
      }
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
