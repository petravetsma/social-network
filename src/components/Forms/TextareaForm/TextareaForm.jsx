import React from "react";
import {useFormik} from "formik";
import {Button, TextField} from "@material-ui/core";
import style from "./TextareaForm.module.css";

const TextareaForm = (props) => {
  const sendText = (message) => {
    props.sendText(message);
  }
  const formik = useFormik({
    initialValues: {
      messageText: '',
    },
    onSubmit: (values, {resetForm}) => {
      sendText(values.messageText);
      resetForm({values: ''});
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField className={style.textInput}
        label="Post text" variant="outlined"
                 name="messageText"
                 onChange={formik.handleChange}
                 value={formik.values.messageText}
      />
      <div className={style.buttonWrap}>
        <Button variant="contained" type="submit">Submit</Button>
      </div>
    </form>
  )
}

export default TextareaForm;
