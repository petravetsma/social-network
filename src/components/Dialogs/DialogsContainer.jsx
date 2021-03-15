import {addMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withNoAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages
  };
}

export default compose(
  connect(mapStateToProps, {addMessage}),
  withNoAuthRedirect
)(Dialogs);
