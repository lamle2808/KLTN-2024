import React from "react";
import "./PaymentModal.scss";

export default function PaymentModal() {
  return (
    <div className="modal">
      <form className="form">
        <h2>Payment Information</h2>
        <div className="credit-card-info--form">
          <div className="input_container">
            <label className="input_label" htmlFor="cardholder_name">
              Cardholder Full Name
            </label>
            <input
              placeholder="Enter your full name"
              title="Input title"
              name="cardholder_name"
              type="text"
              className="input_field"
              id="cardholder_name"
              required
            />
          </div>
          <div className="input_container">
            <label className="input_label" htmlFor="card_number">
              Card Number
            </label>
            <input
              placeholder="0000 0000 0000 0000"
              title="Input title"
              name="card_number"
              type="text"
              className="input_field"
              id="card_number"
              required
            />
          </div>
          <div className="input_container">
            <label className="input_label" htmlFor="expiry_cvv">
              Expiry Date / CVV
            </label>
            <div className="split">
              <input
                placeholder="MM/YY"
                title="Expiry Date"
                name="expiry_date"
                type="text"
                className="input_field"
                id="expiry_date"
                required
              />
              <input
                placeholder="CVV"
                title="CVV"
                name="cvv"
                type="text"
                className="input_field"
                id="cvv"
                required
              />
            </div>
          </div>
          <button type="submit" className="purchase--btn">
            Checkout
          </button>
          <div className="separator">
            <hr className="line" />
            <p>or pay using e-wallet</p>
            <hr className="line" />
          </div>
          <div className="payment--options">
            <button type="button" name="paypal" className="payment-btn">
              <img src="path/to/paypal-logo.png" alt="PayPal" />
            </button>
            <button type="button" name="apple-pay" className="payment-btn">
              <img src="path/to/apple-pay-logo.png" alt="Apple Pay" />
            </button>
            <button type="button" name="google-pay" className="payment-btn">
              <img src="path/to/google-pay-logo.png" alt="Google Pay" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}