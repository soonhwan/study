import React, { useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const Checkbox = memo(({id, name, label, className, checked, disabled, indeterminate, onChange, children}) => {
  //console.log("label = ", label);
  const [chk, setChk] = useState(false);
  const chkRef = useRef(null);

  const customClassName = classNames(
    "chk-base",
    { "disabled": disabled},
    { "indeterminate": indeterminate},
    className
  )
  //onsole.log('customClassName = ', customClassName);

  const handleChange = () => {
    if(checked === undefined){
      setChk(!chk);
    }
    const target = {
      id: id,
      name: name,
      label: label,
      className: customClassName,
      indeterminate: indeterminate,
      checked: chkRef.current.checked,
      disabled: chkRef.current.disabled,
    }
    if(typeof onChange === 'function') onChange({target});
  };

  return (
    <label htmlFor={id} className={customClassName}>
      <input className="a11y" ref={chkRef} id={id} name={name} type="checkbox" checked={checked===undefined?chk:checked} disabled={disabled} onChange={handleChange} />
      <span className="label">{children || label}</span>
    </label>
  );
});

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
}

Checkbox.defaultProps = {
  id: '',
  name: '',
  label: '',
  className: '',
  disabled: false,
  indeterminate: false,
}

export default Checkbox;






