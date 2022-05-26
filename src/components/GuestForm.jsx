import React, {useState, useContext, useEffect} from 'react'
import Button from './shared/Button'
import InputCard from './shared/InputCard'
import GuestContext from '../context/GuestContext'
function GuestForm(  ) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  })
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const { addGuest, guestEdit,  updateGuest } = useContext(GuestContext)
  
  useEffect(()=>{
    if(guestEdit.isEdit === true){
      setBtnDisabled(false)
      setFormData({
        firstName: guestEdit.item.firstName,
        lastName: guestEdit.item.lastName,
      })
    }
  },[guestEdit])



  function handleChange(e){
    if(formData.firstName === "" || formData.lastName === ""){
      setBtnDisabled(true)
      setMessage(null)
    }
    else if(formData.firstName !== "" && formData.firstName.trim().length <= 1){
      setMessage(`Name cannot be ${formData.lastName.trim().length} characters`)
      setBtnDisabled(true)
    }
    else if(formData.lastName !== "" && formData.lastName.trim().length <= 1){
      setMessage(`Name cannot be ${formData.lastName.trim().length} characters`)
      setBtnDisabled(true)
    }
    else{
      setMessage(null)
      setBtnDisabled(false)
    }
    const {name, value } = e.target

      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: `${value.charAt(0).toUpperCase()}${value.slice(1)}`
      }))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(formData.firstName.trim().length >= 2 && formData.lastName.trim().length >= 2){
    const newGuest = {
      firstName: formData.firstName,
      lastName: formData.lastName
    }

    if (guestEdit.isEdit === true) {
      updateGuest(guestEdit.item.id, newGuest);
    } else{
      addGuest(newGuest)
    }

    setFormData({
      firstName: "",
      lastName: ""
    })
  }
  }
  return (
    <InputCard>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Provide names of expected guests</h2>
        <div className='input-group'>
          <input 
          type="text"
          name="firstName"
          placeholder="Enter first name"
          onChange={handleChange}
          value={formData.firstName}
          />
          <input 
          type="text"
          name="lastName"
          placeholder="Enter last name"
          onChange={handleChange}
          value={formData.lastName}
          />
        </div>
        <Button type="submit" version="secondary" isDisabled={btnDisabled}>Submit</Button>
        {message && <div className="message">{message}</div>}
      </form>
   </InputCard>
  )
}

export default GuestForm