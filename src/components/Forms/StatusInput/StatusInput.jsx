import React from "react";
import {useFormik} from "formik";

const StatusInput = (props) => {
  const handleBlur = (values) => {
    props.updateUserStatus(values.target.value);
    props.toggleEditMode();
  }
  const formik = useFormik({
    initialValues: {
      status: props.storeStatus
    }
  });
  return (
    <input
      autofocus="true"
      name="status"
      onChange={formik.handleChange}
      value={formik.values.status}
      onBlur={handleBlur}
    />
  )
}

export default StatusInput;
