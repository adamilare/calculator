import PropTypes from 'prop-types';
import '../css/calculator.css';

const CalcDisplay = ({ text }) => (
  <span className="calc-btn calc-display">{text}</span>
);

CalcDisplay.defaultProps = {
  text: '0',
};

CalcDisplay.propTypes = {
  text: PropTypes.string,
};

export default CalcDisplay;
