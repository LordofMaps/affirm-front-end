import './style.css';

import { cardType } from '../../../../utils/ccValidation';

function CardType(props) {
  const type = cardType(props.ccNumber)
  return (
    <span className='card-type'>{type}</span>
  );
}

export default CardType;
