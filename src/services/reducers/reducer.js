import { ADD_POLICY, PURCHASE_POLICY, SURRENDER_POLICY, DROP_POLICY } from "../constants"

const initialState = {
    policyList: [],
    purchasedPolicy: []
}

export default function policies(state = initialState, action) {
    var a, b;
    switch (action.type) {
        case ADD_POLICY:
            state.policyList.push(action.data)
            return state

        case PURCHASE_POLICY:
            let getPurchasedPolicy = state.policyList[action.key]
            a = state.policyList.slice(0, action.key)
            b = state.policyList.slice(action.key + 1)
            state.policyList = a.concat(b)
            state.purchasedPolicy.push(getPurchasedPolicy)
            return state

        case SURRENDER_POLICY:
            let getSurrenderedPolicy = state.purchasedPolicy[action.key]
            a = state.purchasedPolicy.slice(0, action.key)
            b = state.purchasedPolicy.slice(action.key + 1)
            state.purchasedPolicy = a.concat(b)
            state.policyList.push(getSurrenderedPolicy)
            return state

        case DROP_POLICY:
            a = state.policyList.slice(0, action.key)
            b = state.policyList.slice(action.key + 1)
            state.policyList = a.concat(b)
            return state

        default:
            return state
    }
}