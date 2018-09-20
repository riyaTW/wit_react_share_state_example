import React from 'react';
import PropTypes from 'prop-types';

class CurrencyInput extends React.Component {

    render() {
        const {amount, currency} = this.props;
        return (
            <div>
                <input type='text' name='currency' value={amount || 0} onChange={this.props.changeAmount}/>
                <select value={currency} onChange={this.props.changeCurrency}>
                    <option value="INR">Indian Rupee</option>
                    <option value="USD">US Dollar</option>
                </select>
            </div>
        );
    }
}

CurrencyInput.propTypes = {
    amount: PropTypes.number,
    currency: PropTypes.string.isRequired
};

export default CurrencyInput;