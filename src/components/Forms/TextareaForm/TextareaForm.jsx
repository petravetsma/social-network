import React from "react";
import {useFormik} from "formik";

const TextareaForm = (props) => {
  const sendText = (message) => {
    props.sendText(message);
  }
  const formik = useFormik({
    initialValues: {
      messageText: '',
    },
    onSubmit: (values, {resetForm} ) => {
      sendText(values.messageText);
      resetForm({values: ''});
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea
              name="messageText"
              onChange={formik.handleChange}
              value={formik.values.messageText}
            />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default TextareaForm;
