import { connect } from 'react-redux'
import Todo from '../Todo'
import { addPolicy, purchasePolicy } from '../services/actions/action'

const mapDispatchToProps = dispatch => ({
    addPoicyHandler: data => dispatch(addPolicy(data)),
    purchasePolicyHandler: key => dispatch(purchasePolicy(key)),
})

const mapStateToProps = state => ({
    data: state.policies
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)