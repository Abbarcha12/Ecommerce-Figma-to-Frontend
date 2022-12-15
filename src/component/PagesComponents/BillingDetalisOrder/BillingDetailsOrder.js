import React from 'react'
import { Link } from "react-router-dom"
import "./BillingDetailsOrder.css"

function BillingDetailsOrder() {
    return (
        <div className='py-5 mx-5'>
            <div className="p-3 Order-container">
                <h3>Your Order</h3>
                <hr />
                <div className="Prducts">
                    <div className='Prduct-Names'>
                        <h5 className='mb-3'>Product</h5>
                        <p>01. Chain buck bag</p>
                        <p>02. Zip-pockets pebbled <br />tote briefcase</p>
                        <p>03. Black Jeans</p>
                        <p>04. Cotton Shirt</p>
                    </div>
                    <div className='Prduct-Price'>
                        <h5 className='text-end mx-3 mb-3'>Total</h5>
                        <p className='mx-3'>$ 300.0</p>
                        <p className='mx-3 pb-4'>$ 170.0</p>
                        <p className='mx-3'>$ 170.0</p>
                        <p className='mx-3'>$ 110.0</p>
                    </div>
                </div>
                <hr />
                <div className="Total">
                    <div className='Total-text'>
                        <h5>Subtotal</h5>
                        <h5>Total</h5>
                    </div>
                    <div className='Total-Price'>
                        <h5 className='mx-3'>$ 750.0</h5>
                        <h5 className='mx-3'>$ 750.0</h5>
                    </div>
                </div>
                <hr />
                <form className='Orders-form'>
                    <div class="form-check mb-4">
                        <input class="form-check-input" type="radio" name="Create-account" id="Create-account" />
                        <label class="form-check-label ms-2" for="Create-account">
                            Create an account?
                        </label>
                        <div id="accountHelp" class="form-text mt-2">Create an account by entering information below. If you aer returning Customer login in at the top page.</div>
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" type="radio" name="Create-account" id="Cheque-Paymentt" />
                        <label class="form-check-label ms-2" for="Cheque-Payment">
                            Cheque Payment
                        </label>
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" type="radio" name="Create-account" id="PayPal" />
                        <label class="form-check-label ms-2" for="PayPal">
                            PayPal
                        </label>
                    </div>

                    <Link to="/Bank">
                        <button className='py-2 px-5 w-100'>PLACE ORDER</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default BillingDetailsOrder