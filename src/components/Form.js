import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPolicy } from '../services/actions/action'

export default function Form() {
    const initialValues = { policyName: "", type: "", premium: "", status: "Available" }
    const [formValues, setFormValues] = useState(initialValues)
    const [showError, setShowError] = useState(false)
    const dispatch = useDispatch();

    function handleChange(e) {
        let { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    
    const addPolicyHandler = () => {
        if(isEmpty){
            setShowError(false)
            dispatch(addPolicy({ formValues }))
            setFormValues(initialValues)
        } else {
            setShowError(true)
        }
    }

    const isEmpty = Object.values(formValues).every(value => {
        if (value === null || value === "") {
          return false;
        }
        return true;
      });

    return (
        <>
                <table className='table table-dark m-0'>
                    <thead>
                        <tr>
                            <td>
                                <input type="text" className='form-control' name="policyName" placeholder="policy name" value={formValues.policyName} onChange={handleChange} autoFocus />
                            </td>
                            <td>
                                <select name="type" className='form-select' value={formValues.type} onChange={handleChange} >
                                    <option value="Health">Health</option>
                                    <option value="Term">Term</option>
                                    <option value="ULIP">ULIP</option>
                                </select>
                            </td>
                            <td>
                                <input type="number" className='form-control' name="premium" placeholder="yearly premium(in thousand)" value={formValues.premium} onChange={handleChange} />
                            </td>
                            <td>
                                <button className='btn btn-primary' type='submit' onClick={addPolicyHandler}> ADD </button>
                            </td>
                        </tr>
                    </thead>
                </table>
                {(showError) ? <h4 className='text-danger p-2 text-center m-1'>All fields must have a value</h4> : null}
        </>
    )
}
