import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import store from '../services/store'

export default function Header() {
  const availablePolicies = useSelector(state => state.policies.policyList)
  const purchasedPolicies = useSelector(state => state.policies.purchasedPolicy)
  const [temp, setTemp] = useState(0)

  function rerender() {
    // availablePolicies = store.getState();
    // console.table("store",availablePolicies.length);
    setTemp(temp + 1)
}

store.subscribe(rerender)

  return (
    <div className='bg-success p-1'>
      <div className='d-flex float-end m-2'>
        <div>
          <img src={process.env.PUBLIC_URL + "images/menu.png"} width={30} height={30} alt='menu' />
          <span className="position-absolute translate-middle badge rounded-pill bg-dark">{availablePolicies.length}</span>
        </div>
        <div className='mx-4'>
          <img src={process.env.PUBLIC_URL + "images/save.png"} width={25} height={25} alt='menu' />
          <span className="position-absolute translate-middle badge rounded-pill bg-info">{purchasedPolicies.length}</span>
        </div>
      </div>
      <h1 className='text-center m-0'>TODO</h1>
      {availablePolicies < -1 ? temp : null}
    </div>
  )
}
