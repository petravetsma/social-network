import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageText: state.dialogPage.newMessageText,
    isAuth: state.auth.isAuth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInput: (message) => {
      dispatch(updateMessageTextActionCreator(message));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
