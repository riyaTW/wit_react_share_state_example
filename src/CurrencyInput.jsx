import React from 'react';

class CurrencyInput extends React.Component {

    render() {
        const {amount, currency} = this.props;
        return (
            <div>
                <input type='text' name='currency' value={amount} onChange={this.props.changeAmount}/>
                <select value={currency} onChange={this.props.changeCurrency}>
                    <option value="INR">Indian Rupee</option>
                    <option value="USD">US Dollar</option>
                </select>
            </div>
        );
    }
}

export default CurrencyInput;