import {ADD_POLICY, PURCHASE_POLICY} from "../constants"

export const addPolicy = data => {
    return {
        type: ADD_POLICY,
        data: data.formValues
    }
}

export const purchasePolicy = id => {
    return {
        type: PURCHASE_POLICY,
        key:id
    }
}
