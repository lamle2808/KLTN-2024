import { useState } from "react";
import "./bookingPage.scss";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process booking logic here
    
    if (paymentMethod === "Credit Card") {
      setTimeout(() => {
        navigate("/payment");
      }, 2000);
    }
    else {
      setConfirmed(true); // Simulate confirmation after submission
    }
  };

  return (
    <div className="bookingPage">
      <h1>Complete Your Booking</h1>
      
      {!confirmed ? (
        <form onSubmit={handleSubmit}>
          {/* Event and Customer Information in one row */}
          <div className="row">
            <div className="sectionEventDetails">
              <h3>Event Details</h3>
              <label>
                Event Name:
                <input 
                  type="text" 
                  value={eventName} 
                  onChange={(e) => setEventName(e.target.value)} 
                  required 
                />
              </label>
              <label>
                Event Date:
                <input 
                  type="date" 
                  value={eventDate} 
                  onChange={(e) => setEventDate(e.target.value)} 
                  required 
                />
              </label>
              <label>
                Guest Count:
                <input 
                  type="number" 
                  value={guestCount} 
                  onChange={(e) => setGuestCount(Number(e.target.value))} 
                  required 
                />
              </label>
              <label>
                Special Requests / Notes:
                <textarea 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)} 
                />
              </label>
            </div>

            <div className="sectionCustomerInfo">
              <h3>Customer Information</h3>
              <label>
                Full Name:
                <input 
                  type="text" 
                  value={customerName} 
                  onChange={(e) => setCustomerName(e.target.value)} 
                  required 
                />
              </label>
              <label>
                Email:
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </label>
              <label>
                Phone Number:
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                />
              </label>
            </div>
          </div>

          {/* Payment Information */}
          <div className="section">
            <h3>Payment Method</h3>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="Credit Card" 
                onChange={(e) => setPaymentMethod(e.target.value)} 
                required 
              />
              Credit Card
            </label>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="Bank Transfer" 
                onChange={(e) => setPaymentMethod(e.target.value)} 
                required 
              />
              Bank Transfer
            </label>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="Cash" 
                onChange={(e) => setPaymentMethod(e.target.value)} 
                required 
              />
              Cash
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submitButton">Confirm Booking</button>
        </form>
      ) : (
        <div className="confirmation">
          <h2>Booking Confirmed!</h2>
          <p>Thank you, {customerName}! Your booking for the {eventName} event on {eventDate} has been confirmed.</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      )}
    </div>
  );
}