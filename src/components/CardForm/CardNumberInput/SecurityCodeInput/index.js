import { useState, useEffect } from 'react';
import './style.css';
import Input from '../../../InputField';
import { isValidCSC } from '../../../../utils/ccValidation';

function SecurityCodeInput(props) {
  const [csc, setCSC] = useState('');
  const [isError, setError] = useState(false);

  useEffect(() => {
    setError(props.ccNumber && !isValidCSC(props.ccNumber, csc));
  }, [props.ccNumber, csc])

  const updateCSC = (e) => {
    const value = e.target.value.replace(/\D /g, '');
    setCSC(value);
  }

  return (
    <Input name='cc-csc' id='cc-csc' placeholder='CSC' value={csc} onChange={updateCSC} error={isError} />
  );
}

export default SecurityCodeInput;
