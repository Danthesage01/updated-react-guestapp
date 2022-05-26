import React, { createContext, useState } from 'react'
import GuestListData from '../data/GuestListData'
import {v4 as uuidv4} from "uuid"

const GuestContext = createContext()

export function GuestProvider ( { children } ){
const [guest, setGuest] = useState(GuestListData)
const [guestEdit, setGuestEdit] = useState({
  item: {},
  isEdit: false
})

// addGuest function
function addGuest(newGuest){
  newGuest.id = uuidv4()
    setGuest([newGuest, ...guest])
  }
// edit guest
function editGuest(item){
  setGuestEdit({
    item,
    isEdit: true
  })
}

// update guest
function updateGuest(id, updatedItem){
  setGuest(guest.map(item =>{ 
    return item.id === id ? {...item, ...updatedItem }: item
  }))
  setGuestEdit({
    item: {},
    isEdit: false
  })
}
// deleteGuest function
function deleteGuest(id){
  if(window.confirm("Are you sure?")){
   setGuest(guest=> guest.filter(item => item.id !== id))
  }
}
  
return (
  <GuestContext.Provider
  value={{
    guest,
    guestEdit,
    deleteGuest,
    addGuest,
    updateGuest,
    editGuest
  }}
  >
    { children }
  </GuestContext.Provider>
)

}

export default GuestContext
