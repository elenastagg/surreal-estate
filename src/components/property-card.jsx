import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = props => (
  <div className="property-card">
    <div className="property-card__title">{props.title}</div>
    <div className="property-card__type">{props.type}</div>
    <div className="property-card__bathrooms">
      <i className="fas fa-shower" />{props.bathrooms}
    </div>
    <div className="property-card__bedrooms">
      <i className="fas fa-bed" />{props.bedrooms}
    </div>
    <div className="property-card__price">&#163;{props.price}</div>
    <div className="property-card__city">{props.city}</div>
    <div className="property-card__email">{props.email}</div>


    <div><button className="email-button" onClick={() => props.onSelect(props.email)}>Email</button></div>
  </div>
);

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
