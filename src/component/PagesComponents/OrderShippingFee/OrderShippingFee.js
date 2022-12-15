import React from 'react'

function OrderShippingFee(props) {
  return (
    <div>
      <p className={props.className}>{props.value}</p>
    </div>
  )
}

export default OrderShippingFee