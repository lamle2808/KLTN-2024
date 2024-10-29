import './paymentPage.scss';
import PaymentModal from '../../components/PaymentModal/PaymentModal';
import { useLocation } from 'react-router-dom';

export default function PaymentPage() {

  const location = useLocation();
  const venue = location.state?.venue;
  const selectedServices = location.state?.selectedServices || [];

    const eventDetails = {
        date: "December 25, 2023",

        customer: {
          name: "John Doe",
          phone: "0123 456 789",
          email: "johndoe@gmail.com",
        },
        guests: 50,
        baseVenueCost: 1000,
      };
    
      const totalAdditionalServices = selectedServices.reduce((total, service) => total + service.price, 0);
      const totalCost = venue.price + totalAdditionalServices;
    
  return (
    <div className='paymentPage'>
    <div className="event-summary">
      <div className="info-container">      
        <div className="info-column">
          <h2>Venue Information</h2>
          <p><strong>Venue Name:</strong> {venue.title}</p>
          <p><strong>Address:</strong> {venue.address}</p>
        </div>
        <div className="info-column">
          <h2>Customer Information</h2>
          <p><strong>Name:</strong> {eventDetails.customer.name}</p>
          <p><strong>Phone Number:</strong> {eventDetails.customer.phone}</p>
          <p><strong>Email:</strong> {eventDetails.customer.email}</p>
        </div>
      </div>
      
      <h2>Event Information</h2>
      <p><strong>Event Date:</strong> {eventDetails.date}</p>
      <p><strong>Number of Guests:</strong> {venue.capacity}</p>
      
      <h2>Additional Services</h2>
      <ul>
        {selectedServices.map((service, index) => (
          <li key={index}><strong>{service.name}:</strong>{service.price} VND</li>
        ))}
      </ul>
      
      <h3>Cost Breakdown</h3>
      <p><strong>Base Venue Cost:</strong>{venue.price} VND</p>
      <p><strong>Additional Services Total:</strong>{totalAdditionalServices} VND</p>
      <p><strong><em>Total Cost:</em></strong>{totalCost}VND</p>
      
      <h2>Payment Information</h2>
      <p><strong>Total Amount Due:</strong>{totalCost} VND</p>
      
    </div>
    <div className="payment">   <PaymentModal /></div>   
    </div>
  )
}
