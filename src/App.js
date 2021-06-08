import 'sanitize.css';
import 'sanitize.css/forms.css';

import './App.css';

import CardForm from './components/CardForm';
import Header from './components/Header';

function App() {
  return (
    <div className='app-content'>
      <div className='app-form'>
        <Header>Enter Your Credit Card Info</Header>
        <CardForm />
      </div>
    </div>
  );
}

export default App;
