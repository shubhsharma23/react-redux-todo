import React from 'react'

export default function List(props) {
    console.log("list", props);
    const policies = props.handlers.data

    const purchasePolicy = (id) => {
        props.handlers.purchasePolicyHandler(id)
    }

    const deletePolicy = (id) => {
        props.handlers.purchasePolicyHandler(id)
    }

    return (
        <>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Policy Name</td>
                        <td>Policy type</td>
                        <td>Yearly premium</td>
                        <td>Submit</td>
                        <td>Status</td>
                    </tr>

                </thead>

                <tbody>
                    {policies.map((data, i) =>
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{data.policyData.policyName}</td>
                            <td>{data.policyData.type}</td>
                            <td>{data.policyData.premium}</td>
                            <td>
                                {(data.policyData.status == "Purchase")
                                    ? <button className='btn btn-danger' onClick={() => purchasePolicy(i)}>Buy</button>
                                    : <button className='btn btn-danger' onClick={() => deletePolicy(i)}>Surrender</button>
                                }
                            </td>
                            <td>{data.policyData.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
