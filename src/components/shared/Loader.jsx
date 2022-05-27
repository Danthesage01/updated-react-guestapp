import React from 'react'
import loading from "../assets/loading.gif"
function Loader() {
  return <img src={loading} alt="Loading..." style={{
    width: "100px",
    margin: "0 auto",
    display: "block"
  }}/>
}

export default Loader