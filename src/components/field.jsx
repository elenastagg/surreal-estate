import React from 'react';
import PropTypes from 'prop-types';

const Field = props => (
  <div className="field">
    <div className="label">
      <label htmlFor={props.name}>{props.label}:</label>
    </div>
    {props.children}
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Field;
