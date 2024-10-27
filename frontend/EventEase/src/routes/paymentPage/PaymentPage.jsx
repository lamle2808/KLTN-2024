import React from 'react'
import './paymentPage.scss';
import PaymentModal from '../../components/PaymentModal/PaymentModal';

export default function PaymentPage() {
    const eventDetails = {
        eventName: "30th Birthday Party",
        date: "December 25, 2023",
        time: "6:00 PM - 10:00 PM",
        venue: {
          name: "ABC Restaurant",
          address: "123 XYZ Street, Ho Chi Minh City",
        },
        customer: {
          name: "John Doe",
          phone: "0123 456 789",
          email: "johndoe@gmail.com",
        },
        guests: 50,
        additionalServices: [
          { name: "Sound System", price: 300 },
          { name: "Lighting Setup", price: 200 },
          { name: "Buffet Catering", price: 500 },
          { name: "Decoration", price: 150 },
          { name: "Photography", price: 400 },
        ],
        baseVenueCost: 1000,
      };
    
      const totalAdditionalServices = eventDetails.additionalServices.reduce((total, service) => total + service.price, 0);
      const totalCost = eventDetails.baseVenueCost + totalAdditionalServices;
    
  return (
    <div className='paymentPage'>
    <div className="event-summary">
      <div className="info-container">
        <div className="info-column">
          <h2>Event Information</h2>
          <p><strong>Event Name:</strong> {eventDetails.eventName}</p>
          <p><strong>Date:</strong> {eventDetails.date}</p>
          <p><strong>Time:</strong> {eventDetails.time}</p>
        </div>
        <div className="info-column">
          <h2>Venue Information</h2>
          <p><strong>Venue Name:</strong> {eventDetails.venue.name}</p>
          <p><strong>Address:</strong> {eventDetails.venue.address}</p>
        </div>
        <div className="info-column">
          <h2>Customer Information</h2>
          <p><strong>Name:</strong> {eventDetails.customer.name}</p>
          <p><strong>Phone Number:</strong> {eventDetails.customer.phone}</p>
          <p><strong>Email:</strong> {eventDetails.customer.email}</p>
        </div>
      </div>
      
      <h2>Service Details</h2>
      <p><strong>Number of Guests:</strong> {eventDetails.guests}</p>
      
      <h3>Additional Services</h3>
      <ul>
        {eventDetails.additionalServices.map((service, index) => (
          <li key={index}><strong>{service.name}:</strong> ${service.price}</li>
        ))}
      </ul>
      
      <h3>Cost Breakdown</h3>
      <p><strong>Base Venue Cost:</strong> ${eventDetails.baseVenueCost}</p>
      <p><strong>Additional Services Total:</strong> ${totalAdditionalServices}</p>
      <p><strong><em>Total Cost:</em></strong> ${totalCost}</p>
      
      <h2>Payment Information</h2>
      <p><strong>Total Amount Due:</strong> ${totalCost}</p>
      
    </div>
    <div className="payment">   <PaymentModal /></div>
   
    </div>
  )
}
