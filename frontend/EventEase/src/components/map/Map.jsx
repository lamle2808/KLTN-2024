import { MapContainer, TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import './map.scss' 
import Pin from '../pin/Pin';
export default function Map({items}) {
  const isArray = Array.isArray(items);
  return (
    <MapContainer center={[10.8231, 106.6297]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     {isArray ? (
        items.map((item) => (
          <Pin item={item} key={item.id} />
        ))
      ) : (
        <Pin item={items} key={items.id} />
      )}
  </MapContainer>
  )
}


Map.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      coordinates: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }).isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string,
      capacity: PropTypes.number,
      price: PropTypes.number,
    })),
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      coordinates: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }).isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string,
      capacity: PropTypes.number,
      price: PropTypes.number,
    })
  ]).isRequired,
};
