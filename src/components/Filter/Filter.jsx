import React from 'react';
import PropTypes from 'prop-types';

export default function Filter(props) {
  const { value, onFilterChange } = props;
  return (
    <div>
      <input value={value} type="text" onChange={onFilterChange} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
