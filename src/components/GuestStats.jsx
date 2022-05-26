import React, {useContext} from "react"
import GuestContext from "../context/GuestContext"
function GuestStats( ) {
  const {guest} = useContext(GuestContext)
  const TotalGuest = guest.length

  return (
    <div>
      {TotalGuest >= 1 && <h3>{TotalGuest} Confirmed {TotalGuest <= 1 ? "Guest" : "Guests"}</h3>}
    </div>
  )
}


export default GuestStats