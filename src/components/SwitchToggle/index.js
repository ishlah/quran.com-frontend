import React, { PropTypes } from 'react';

const styles = require('./style.scss');

const SwitchToggle = ({ id, flat, checked, onToggle }) => (
  <div className={styles.switch}>
    <input
      id={id}
      className={`${styles.toggle} ${flat ? styles.toggleFlat : styles.toggleRound}`}
      type="checkbox"
      checked={checked}
      onChange={onToggle}
    />
    <label htmlFor={id} className={styles.label} />
  </div>
);

SwitchToggle.propTypes = {
  id: PropTypes.string,
  flat: PropTypes.bool,
  checked: PropTypes.bool,
  onToggle: PropTypes.func.isRequired
};

SwitchToggle.defaultProps = {
  id: 'toggle',
  flat: false,
  checked: false
};

export default SwitchToggle;
