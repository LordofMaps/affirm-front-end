import { useState, Fragment } from 'react';

import './style.css';
import Input from '../../InputField';

export function isValidDate(month, year) {
  if (month && year) {
    return new Date(year, month - 1, 0) > new Date();
  }
  return true;
}


function ExpMonthInput(props) {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isMonthError, setMonthError] = useState(false);
  const [isYearError, setYearError] = useState(false);

  const updateMonth = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setMonth(value);
    if (/(0[0-9]|1[012])/g.test(value) && isValidDate(value, year)) {
      setMonthError(false);
      setYearError(false);
    } else {
      setMonthError(true);
    }
  };

  const updateYear = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setYear(value);
    if (/20[2-9][0-9]/g.test(value) && isValidDate(month, value)) {
      setMonthError(false);
      setYearError(false);
    } else {
      setYearError(true);
    }
  };
  const isError = isMonthError && isYearError;
  return (
    <Fragment>
      <Input name='cc-exp-month' id='cc-exp-month' placeholder='MM' onChange={updateMonth} value={month} error={isMonthError || isError} />
      <Input name='cc-exp-year' id='cc-exp-year' placeholder='YYYY' onChange={updateYear} value={year} error={isYearError || isError} />
    </Fragment>
  );
}

export default ExpMonthInput;
