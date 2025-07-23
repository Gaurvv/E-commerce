import React, { useRef, useState } from 'react'
import InputDetails from './InputDetails'
import OrangeButton from '../OrangeButton'

const UserDetails = () => {
  const [err, setErr] = useState(0)

  const name = useRef()
  const address = useRef()
  const phone = useRef()

  const handleProceed = () => {
    const nameVal = name.current?.value.trim()
    const phoneVal = phone.current?.value.trim()
    const addressVal = address.current?.value.trim()

    const nameRegex = /^[A-Za-z\s]+$/          
    const phoneRegex = /^\d{10}$/                 
    const addressRegex = /^.{5,}$/              

    if (!nameVal || !nameRegex.test(nameVal)) {
      setErr(1)
    } else if (!phoneVal || !phoneRegex.test(phoneVal)) {
      setErr(2)
    } else if (!addressVal || !addressRegex.test(addressVal)) {
      setErr(3)
    } else {
      setErr(0)
      alert("Order Placed Succesfully")
      console.log("Name:", nameVal)
      console.log("Contact:", phoneVal)
      console.log("Address:", addressVal)
      
    }
    localStorage.removeItem("cart")
    
  }

  return (
    <>
      <div>
        <InputDetails
          placeholder={"enter your name"}
          title={"Name"}
          ref={name}
          err={err === 1}
        />
        <InputDetails
          placeholder={"enter your Contact"}
          title={"Contact"}
          ref={phone}
          err={err === 2}
        />
        <InputDetails
          placeholder={"enter your Address"}
          title={"Address"}
          ref={address}
          err={err === 3}

        />
      </div>
      <div className="flex justify-center">
        <OrangeButton title={"Proceed"} onClick={handleProceed} />
      </div>
    </>
  )
}

export default UserDetails
