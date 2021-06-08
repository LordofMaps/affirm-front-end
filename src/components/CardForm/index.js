import './style.css';
import NameInput from './NameInput';
import CardNumberInput from './CardNumberInput';
import ExpInput from './ExpInput';
import Button from '../Button';

function CardForm() {
  return (
    <form className="card-form">
      <NameInput />
      <CardNumberInput />
      
      <ExpInput />
      <Button>Submit</Button>
    </form>
  );
}

export default CardForm;
