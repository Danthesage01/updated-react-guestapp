import React from "react"
import PropTypes from 'prop-types'
function DisplayCard({ children, reverse}) {

  return (
    <div className='display-card' style={{
      backgroundColor: reverse ? "#2C3E50" : "#fff",
      color: reverse ? "#fff" : "#000"
    }}>
      {children}
    </div>
  )
}

DisplayCard.defaultProps ={
  reverse: false
}

DisplayCard.protoTypes ={
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default DisplayCard