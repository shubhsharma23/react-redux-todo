import { ADD_POLICY, PURCHASE_POLICY, SURRENDER_POLICY, DROP_POLICY } from "../constants"

export const addPolicy = data => {
    return {
        type: ADD_POLICY,
        data: data.formValues
    }
}

export const purchasePolicy = id => {
    return {
        type: PURCHASE_POLICY,
        key: id
    }
}

export const surrenderPolicy = id => {
    return {
        type: SURRENDER_POLICY,
        key: id
    }
}

export const dropPolicy = id => {
    return {
        type: DROP_POLICY,
        key: id
    }
}
