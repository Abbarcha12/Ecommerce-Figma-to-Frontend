import React from 'react'

function OrderTotalItems(props) {
  return (
    <div>
      <p className={props.className}>{props.value}</p>
    </div>
  )
}

export default OrderTotalItems