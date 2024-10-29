import { useEffect, useState } from 'react';
import './ServiceSelection.scss';
import PropTypes from 'prop-types';

export default function ServiceSelection({services, onSelectServices}) {
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    onSelectServices(selectedServices);
  }, [selectedServices, onSelectServices]);


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
        {services.map((service) => (
          <div key={service.id} className='serviceCard'>
          <img src={service.img} alt={service.name} className='serviceImage' />
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
ServiceSelection.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
      img: PropTypes.string,
    })
  ).isRequired,
  onSelectServices: PropTypes.func.isRequired,
};