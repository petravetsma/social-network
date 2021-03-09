import React from "react";

const Message = (props) => {
  if (props.from === 'me') {
    return <div>
      me: {props.message}
    </div>
  } else if (props.from === 'them') {
    return <div>
      them: {props.message}
    </div>
  }
  return <div>
    {props.message}
  </div>
}

export default Message;
