import './style.css';

function Input({ error, ...props }) {
  const statusClass = error ? 'error' : 'valid';

  return (
    <input className={`input ${statusClass}`} {...props} />
  );
}

export default Input;
