import React, {useContext} from "react"
import GuestItem from "./GuestItem"
import GuestContext from "../context/GuestContext"
import Loader from "./shared/Loader"

// Using Context instead of props from App 
function GuestList( ) {
const {guest, isLoading } = useContext(GuestContext)

if(!isLoading && (!guest || guest.length === 0 )){
  return <h2>No Guest yet</h2>
}

const guestDetail = guest.map(item => 
<GuestItem
key={item.id}
item = {item} 
/> 
)

  return isLoading ? <Loader /> : 
   (
    <div>
      {guestDetail}
    </div>
  )
}

export default GuestList