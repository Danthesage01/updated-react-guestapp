import React, { createContext, useState, useEffect } from 'react'


const GuestContext = createContext()

export function GuestProvider ( { children } ){
const [guest, setGuest] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [guestEdit, setGuestEdit] = useState({
  item: {},
  isEdit: false
})

useEffect(()=>{
  fetchGuest()
  }, [])
  
  async function fetchGuest(){
    const res = await fetch(`https://fake-serverme.herokuapp.com/guest`)
    const data = await res.json()
    setGuest(data)
    setIsLoading(false)
  }
  

// addGuest function
async function addGuest(newGuest){
  const res = await fetch(`https://fake-serverme.herokuapp.com/guest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newGuest)
  })
  const data = await res.json()
    setGuest([data, ...guest])
}
// edit guest
function editGuest(item){
  setGuestEdit({
    item,
    isEdit: true
  })
}


// update guest
async function updateGuest(id, updatedItem){
  const res = await fetch(`https://fake-serverme.herokuapp.com/guest/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedItem)
  })
 
  const data = await res.json()
   setGuest(guest.map(item =>{ 
     return item.id === id ? data : item
   }))
   setGuestEdit({
     item: {},
     isEdit: false
   })
 }

// deleteGuest function
async function deleteGuest(id){
  if(window.confirm("Ready to delete permanently?")){
    await fetch(`https://fake-serverme.herokuapp.com/guest/${id}`, {
      method: "DELETE"
    })

   setGuest(guest=> guest.filter(item => item.id !== id))
  }
}
return (
  <GuestContext.Provider
  value={{
    guest,
    isLoading,
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
