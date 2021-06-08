import { useState, Fragment } from 'react';
import SecurityCodeInput from './SecurityCodeInput';
import CardType from './CardType';
import './style.css';
import Input from '../../InputField';
import { isCompleteCCNumber } from '../../../utils/ccValidation';

function CardNumberInput(props) {
  const [ccNumber, setCCNumber] = useState('');
  const [isError, setError] = useState(false);

  const updateCCNumber = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCCNumber(value);
    setError(!isCompleteCCNumber(value));
  }

  return (
    <Fragment>
      <CardType ccNumber={ccNumber} />
      <Input name='cc-number' id='cc-number' placeholder='Card Number' onChange={updateCCNumber} value={ccNumber} error={isError} />
      <SecurityCodeInput ccNumber={ccNumber} />
    </Fragment>
  );
}

export default CardNumberInput;
