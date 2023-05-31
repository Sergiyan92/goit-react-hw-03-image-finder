import css from './Button.module.css';
import PropTypes from 'prop-types';
const Button = ({ onClick, children }) => {
  return (
    <button className={css.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
