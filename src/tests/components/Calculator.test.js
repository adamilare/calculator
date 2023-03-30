import { render, fireEvent } from '@testing-library/react';
import Calculator from '../../routes/Calculator'; // eslint-disable-line

describe('Calculator', () => {
  it('renders the calculator as expected!', () => {
    const { getByText, getByRole } = render(<Calculator />);

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('6')).toBeInTheDocument();
    expect(getByText('7')).toBeInTheDocument();
    expect(getByText('8')).toBeInTheDocument();
    expect(getByText('9')).toBeInTheDocument();
    expect(getByRole('button', { name: '0' })).toBeInTheDocument();

    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('+/-')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('÷')).toBeInTheDocument();
    expect(getByText('x')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
  });

  it('displays the correct result when buttons are clicked', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const display = getByTestId('calc-display');

    fireEvent.click(getByText('1'));
    expect(display).toHaveTextContent('1');

    fireEvent.click(getByText('2'));
    expect(display).toHaveTextContent('12');

    fireEvent.click(getByText('+'));
    expect(display).toHaveTextContent('12 +');

    fireEvent.click(getByText('3'));
    expect(display).toHaveTextContent('12 + 3');

    fireEvent.click(getByText('='));
    expect(display).toHaveTextContent('15');
  });
});
