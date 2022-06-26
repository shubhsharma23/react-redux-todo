import { ADD_POLICY, PURCHASE_POLICY } from "../constants"

const initialState = {
    policyData: []
}

export default function policies(state = [], action) {
    switch (action.type) {
        case ADD_POLICY:
            return [
                ...state,
                { policyData: action.data }
            ]

        case PURCHASE_POLICY:
            state[action.key].policyData.status = "ISSUED"
            return state

        default:
            return state
    }
}