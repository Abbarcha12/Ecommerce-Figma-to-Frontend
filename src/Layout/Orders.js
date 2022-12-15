import React from 'react'

import "./Orders.css"


import OrderNumber from "../component/PagesComponents/OrderNumbers/OrderNumber"
import OrderDate from '../component/PagesComponents/OrderDate/OrderDate'
import OrderItems from '../component/PagesComponents/OrderItems/OrderItems'
import OrderTotalItems from '../component/PagesComponents/OrderTotalItems/OrderTotalItems'
import OrderAmountDue from '../component/PagesComponents/OrderAmountDue/OrderAmountDue'
import OrderShippingFee from '../component/PagesComponents/OrderShippingFee/OrderShippingFee'
import OrderState from '../component/PagesComponents/OrderState/OrderState'
import OrderpaymentMethod from '../component/PagesComponents/OrderPaymentMethod/OrderPaymentMethod'

function Orders() {
    return (
        <div>
            <h3 className='m-5 mb-3'>ORDERS</h3>
            <div className='order-table-container mb-5'>
                <table className='my-5 text-center order-table '>
                    <thead>
                        <tr className='Head-row'>
                            <th>Order Number</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Total Items</th>
                            <th>Amount Due</th>
                            <th>Shipping Fee</th>
                            <th>Status</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                        <tr className='bodyRow'>
                            <td>
                                <OrderNumber
                                    value="9fd9d9g9df9dfdd"
                                    className="OrderName"
                                />
                            </td>
                            <td>
                                <OrderDate
                                    value1="09-03-2022"
                                    value2="6:01:16 PM"
                                    className="OrderDate"
                                />
                            </td>
                            <td>
                                <OrderItems
                                    value="VIEW ITEM"
                                    className="OrderItems"
                                />
                            </td>
                            <td>
                                <OrderTotalItems
                                    value="1"
                                    className="OrderTotalItems"
                                />
                            </td>
                            <td>
                                <OrderAmountDue
                                    value="$ 120.0"
                                    className="OrderAmountDue"
                                />
                            </td>
                            <td>
                                <OrderShippingFee
                                    value="$ 50.0"
                                    className="OrderShippingFee"
                                />
                            </td>
                            <td>
                                <OrderState
                                    value="PENDING"
                                    className="OrderState"
                                />
                            </td>
                            <td>
                                <OrderpaymentMethod
                                    value="Bank Transfer"
                                    className="OrderpaymentMethod"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders