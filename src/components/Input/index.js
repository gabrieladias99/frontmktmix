import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

const Input = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <input defaultValue={defaultValue} ref={inputRef} {...rest} />
  );
};

export default Input;