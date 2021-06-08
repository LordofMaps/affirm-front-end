import './style.css';

function Header({ children }) {
  return (
    <h3 className='header'>{children}</h3>
  );
}

export default Header;
