import React from 'react'

function OrderAmountDue(props) {
  return (
    <div>
      <p className={props.className}>{props.value}</p>
    </div>
  )
}

export default OrderAmountDue