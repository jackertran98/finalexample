import {connect } from 'react-redux';
import {checkPass} from '../actions';
import SignIn from '../components/signIn';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        check: (user,pass) => {
            dispatch(checkPass(user,pass))
        }
    }
}
export default connect(null,mapDispatchToProps)(SignIn);