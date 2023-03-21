import PropTypes from 'prop-types';
import '../css/calculator.css';

const CalcBtn = (props) => {
  const { extraClass, text } = props;

  return (
    <button type="button" className={`calc-btn ${extraClass}`}>
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
};

export default CalcBtn;
