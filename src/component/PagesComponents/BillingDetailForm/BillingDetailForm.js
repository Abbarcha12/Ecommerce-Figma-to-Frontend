import React from 'react'
import "./BillingDetailForm.css"

function BillingDetailForm() {
  return (
    <div className='container'>
      <form className='form p-5'>
        <h3 className='form-caption'>Billing details</h3>
        <hr />
        <div class="mb-4 form-input-grp">
          <div className='me-2 form-grp'>
            <label for="First-Name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="First-Name" aria-describedby="emailHelp" />
          </div>
          <div className='ms-2 form-grp'>
            <label for="Last-Name" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="Last-Name" aria-describedby="emailHelp" />
          </div>
        </div>
        <div class="mb-4">
          <label for="Country" class="form-label">Country</label>
          <input type="text" class="form-control" id="Country" />
        </div>
        <div class="mb-4">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control mb-2" id="address" placeholder='Street Adress' />
          <input type="text" class="form-control" id="address" placeholder='Appartment, Suite, Unite etc (optional)' />
        </div>
        <div class="mb-4">
          <label for="City/Town" class="form-label">City/Town</label>
          <input type="text" class="form-control" id="City/Town" />
        </div>
        <div class="mb-4">
          <label for="Country/State" class="form-label">Country/State</label>
          <input type="text" class="form-control" id="Country/State" />
        </div>
        <div class="mb-4">
          <label for="Postcode/Zip" class="form-label">Postcode/Zip</label>
          <input type="text" class="form-control" id="Postcode/Zip" />
        </div>
        <div class="mb-4 form-input-grp">
          <div className='form-grp me-2'>
            <label for="Phone Number" class="form-label">Phone Number</label>
            <input type="text" class="form-control" id="Phone Number" aria-describedby="emailHelp" />
          </div>
          <div className='form-grp ms-2'>
            <label for="Email" class="form-label">Email</label>
            <input type="text" class="form-control" id="Email" aria-describedby="emailHelp" />
          </div>
        </div>
        <div class="mb-4">
          <label for="Postcode/Zip" class="form-label">Postcode/Zip</label>
          <input type="text" class="form-control" id="Postcode/Zip" />
        </div>
        <div class="form-check mb-4">
          <input class="form-check-input" type="radio" name="Create-account" id="Create-account" />
          <label class="form-check-label ms-2" for="Create-account">
            Create an account
          </label>
          <div id="accountHelp" class="form-text mt-2">Create an account by entering information below. If you aer returning Customer login in <br /> at the top page.</div>
        </div>
        <div class="mb-4">
          <label for="Account-Password" class="form-label">Account Password</label>
          <input type="text" class="form-control" id="Account-Password" />
        </div>
        <div class="form-check mb-4">
          <input class="form-check-input" type="radio" name="Create-account" id="Create-account" />
          <label class="form-check-label ms-2" for="Create-account">
            Note about your order, e.g, special note for delivery
          </label>
        </div>
        <div class="mb-4">
          <label for="Other-Notes" class="form-label">Other Notes</label>
          <input type="text" class="form-control" id="Other-Notes" placeholder='Note about your order, e.g, Special note for delivery' />
        </div>
      </form>
    </div>
  )
}

export default BillingDetailForm