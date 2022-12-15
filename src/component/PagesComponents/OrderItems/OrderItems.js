import React from 'react'

function OrderItems(props) {
  return (
    <div>
      <p className={props.className}>{props.value}</p>
    </div>
  )
}

export default OrderItems