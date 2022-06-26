import React, { useState } from 'react'

export default function Form(props) {
    const initialValues = { policyName: "HDFC ERGO", type: "Health", premium: "23", status: "Purchase" }
    const [formValues, setFormValues] = useState(initialValues)

    function handleChange(e) {
        let { name, value } = e.target
        setFormValues({ ...formValues, [name]: value }) 
    }

    const add = () => {
        props.handlers.addPoicyHandler({ formValues })
        setFormValues(initialValues)
    }

    const update = () => {
        alert("update")
    }
    return (
        <>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <td>
                            <input type="text" name="policyName" placeholder="policy name" value={formValues.policyName} onChange={handleChange} autoFocus />
                        </td>
                        <td>
                            <input type="text" name="type" placeholder="policy type" value={formValues.type} onChange={handleChange} />
                        </td>
                        <td>
                            <input type="text" name="premium" placeholder="yearly premium(in thousand)" value={formValues.premium} onChange={handleChange} />
                        </td>
                        <td>
                            <button className='btn btn-primary' onClick={() => add()}> ADD </button>
                        </td>
                    </tr>
                </thead>
            </table>
        </>
    )
}
