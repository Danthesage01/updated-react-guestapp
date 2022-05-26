import React from "react"
import PropTypes from 'prop-types'
function InputCard( { children, reverse }) {
  return (
    <div className='input-card' style={{
      backgroundColor: reverse ? "#2C3E50" : "#fff",
      color: reverse ? "#fff" : "#000"
    }}>
      {children}
    </div>
  )
}
InputCard.defaultProps ={
  reverse: false
}

InputCard.protoTypes ={
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default InputCard