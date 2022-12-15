import React from 'react'

function OrderDate(props) {
  return (
    <div>
      <p className={props.className}>{props.value1} <br /> {props.value2}</p>
    </div>
  )
}

export default OrderDate