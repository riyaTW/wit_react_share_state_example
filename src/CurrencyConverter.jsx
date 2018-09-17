import React from 'react';
import CurrencyInput from './CurrencyInput';

const fxRates = [
    {from: 'USD', to: 'USD', rate: 1},
    {from: 'INR', to: 'INR', rate: 1},
    {from: 'USD', to: 'INR', rate: 72},
    {from: 'INR', to: 'USD', rate: 0.014}
];

class CurrencyConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount1: 0, currency1: 'INR', amount2: 0, currency2: 'USD'};
        this.changeAmount1 = this.changeAmount1.bind(this);
        this.changeCurrency1 = this.changeCurrency1.bind(this);
        this.changeAmount2 = this.changeAmount2.bind(this);
        this.changeCurrency2 = this.changeCurrency2.bind(this);
        this.convert = this.convert.bind(this);
    }

    convert(value, from, to) {
        return value * fxRates.find((e) => (e.from === from && e.to === to)).rate;
    }

    changeAmount1(e) {
        this.setState({amount1: e.target.value, amount2: this.convert(e.target.value, this.state.currency1, this.state.currency2)});
    }

    changeCurrency1(e) {
        this.setState({currency1: e.target.value, amount2: this.convert(this.state.amount1, e.target.value, this.state.currency2)});
    }

    changeAmount2(e) {
        this.setState({amount2: e.target.value, amount1: this.convert(e.target.value, this.state.currency2, this.state.currency1)});
    }

    changeCurrency2(e) {
        this.setState({currency2: e.target.value, amount1: this.convert(this.state.amount2, e.target.value, this.state.currency1)});
    }

    render() {
        const {amount1, currency1, amount2, currency2} = this.state;
        return (
            <div>
                <p>{amount1} {currency1} equals {amount2} {currency2}</p>
                <CurrencyInput amount={amount1}
                               currency={currency1}
                               changeAmount={this.changeAmount1}
                               changeCurrency={this.changeCurrency1}/>

                <CurrencyInput amount={amount2}
                               currency={currency2}
                               changeAmount={this.changeAmount2}
                               changeCurrency={this.changeCurrency2}/>
            </div>
        );
    }
}

export default CurrencyConverter;