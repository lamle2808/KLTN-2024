import { useState } from 'react';
import './ServiceSelection.scss';
import { services } from '../../lib/venue_data_20';

export default function ServiceSelection() {
  const data = services;
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const totalCost = selectedServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <div className='ServiceSelection'>
      <h2>Select Additional Services</h2>
      <div className='totalCost'>
        <strong>Total Cost: {totalCost.toLocaleString()} VND</strong>
      </div>
      <div className='serviceCards'>
        {data.map((service) => (
          <div key={service.id} className='serviceCard'>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className='price'>{service.price.toLocaleString()} VND</p>
            <label className='checkboxContainer'>
              <input
                type='checkbox'
                checked={selectedServices.includes(service)}
                onChange={() => handleServiceChange(service)}
              />
              <span className='checkmark'></span>
              Select
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
