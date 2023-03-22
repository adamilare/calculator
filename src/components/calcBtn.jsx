import PropTypes from 'prop-types';
import '../css/calculator.css';

const CalcBtn = (props) => {
  const { extraClass, onClick, text } = props;

  return (
    <button
      onClick={() => onClick(text)}
      type="button"
      className={`calc-btn ${extraClass}`}
    >
      {text}
    </button>
  );
};

CalcBtn.defaultProps = {
  extraClass: '',
  text: '',
};

CalcBtn.propTypes = {
  extraClass: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CalcBtn;
