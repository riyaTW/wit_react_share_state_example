import React from 'react';

class CurrencyInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount: 0, currency: 'USD'};
        this.changeAmount = this.changeAmount.bind(this);
        this.changeCurrency = this.changeCurrency.bind(this);
    }

    changeAmount(e) {
        this.setState({amount: parseInt(e.target.value)});
    }

    changeCurrency(e) {
        this.setState({currency: e.target.value});
    }

    render() {
        const {amount, currency} = this.state;
        return (
            <div>
                <input type='text' name='currency' value={amount} onChange={this.changeAmount}/>
                <select value={currency} onChange={this.changeCurrency}>
                    <option value="INR">Indian Rupee</option>
                    <option value="USD">US Dollar</option>
                </select>
                <span>You currently have {amount} {currency}</span>
            </div>
        );
    }
}

export default CurrencyInput;