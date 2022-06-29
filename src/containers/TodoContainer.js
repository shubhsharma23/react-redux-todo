import { connect } from 'react-redux'
import Todo from '../Todo'
import { addPolicy, purchasePolicy, surrenderPolicy, dropPolicy } from '../services/actions/action'

const mapDispatchToProps = dispatch => ({
    addPolicyHandler: data => dispatch(addPolicy(data)),
    purchasePolicyHandler: key => dispatch(purchasePolicy(key)),
    surrenderPolicyHandler: key => dispatch(surrenderPolicy(key)),
    dropPolicyHandler: key => dispatch(dropPolicy(key)),
})

const mapStateToProps = state => ({
    data: state.policies
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)