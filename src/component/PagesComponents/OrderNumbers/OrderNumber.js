import React from 'react'

function OrderNumer(props) {
  return (
    <div>
      <p className={props.className}>{props.value}</p>
    </div>
  )
}

export default OrderNumer