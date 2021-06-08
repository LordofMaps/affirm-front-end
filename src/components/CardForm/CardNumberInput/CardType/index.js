import './style.css';

import { cardType } from '../../../../utils/ccValidation';

function CardType(props) {
  const type = cardType(props.ccNumber)
  return (
    <div className='card-type'>{type}</div>
  );
}

export default CardType;
