import React, {useContext} from "react"
import GuestItem from "./GuestItem"
import GuestContext from "../context/GuestContext"

// Using Context instead of props from App 
function GuestList( ) {
const {guest } = useContext(GuestContext)

if(!guest || guest.length === 0 ){
  return <h2>No Guest yet</h2>
}

const guestDetail = guest.map(item => 
<GuestItem
key={item.id}
item = {item} 
/> 
)

  return (
    <div>
      {guestDetail}
    </div>
  )
}

export default GuestList