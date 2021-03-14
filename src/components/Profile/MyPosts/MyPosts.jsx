import React from 'react';
import Post from './Post/Post';
import {useFormik} from "formik";

const MyPosts = (props) => {
  const postElements = props.posts.map(v => <Post key={v.id} text={v.text} likes={v.likes}/>);

  const onAddPost = (postText) => {
    props.addPost(postText);
  }
  const formik = useFormik({
    initialValues: {
      postText: '',
    },
    onSubmit: (values, {resetForm}) => {
      onAddPost(values.postText);
      resetForm({values: ''});
    },
  });

  return (
    <div>
      <div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <textarea
              name="postText"
              onChange={formik.handleChange}
              value={formik.values.postText}
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
