import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from '../services/store'
import { purchasePolicy, surrenderPolicy, dropPolicy } from '../services/actions/action'


export default function List() {
    const dispatch = useDispatch()
    const availablePolicies = useSelector(state => state.policies.policyList)
    const purchasedPolicies = useSelector(state => state.policies.purchasedPolicy)
    const [temp, setTemp] = useState(null)

    const purchaseHandler = (id) => {
        dispatch(purchasePolicy(id))
    }

    const surrenderHandler = (id) => {
        dispatch(surrenderPolicy(id))
    }

    const dropHandler = (id) => {
        dispatch(dropPolicy(id))
    }

    function rerender() {
        // availablePolicies = store.getState();
        // console.table("store",availablePolicies.length);
        setTemp(temp + 1)
    }

    store.subscribe(rerender)

    return (
        <>
            <table className='table'>
                <thead>
                    <tr className='bg-secondary'>
                        <td>S.no.</td>
                        <td>Policy Name</td>
                        <td>Policy type</td>
                        <td>Yearly premium</td>
                        <td>Action</td>
                        <td>Status</td>
                    </tr>

                </thead>

                <tbody>
                    {availablePolicies.map((data, i) =>
                        <tr key={i} className='bg-info'>
                            <td>{i}</td>
                            <td>{data.policyName}</td>
                            <td>{data.type}</td>
                            <td>{data.premium}</td>
                            <td>
                                <button className='btn btn-light mx-1' onClick={() => purchaseHandler(i)}>Buy</button>
                                <button className='btn btn-danger' onClick={() => dropHandler(i)}>Remove</button>
                            </td>
                            <td>{data.status}</td>
                        </tr>
                    )}
                    
                    {purchasedPolicies.map((data, i) =>
                        <tr key={i} className='bg-success'>
                            <td>{i}</td>
                            <td>{data.policyName}</td>
                            <td>{data.type}</td>
                            <td>{data.premium}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => surrenderHandler(i)}>Surrender</button>
                            </td>
                            <td>{data.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {availablePolicies < -1 ? temp : null}
        </>
    )
}
