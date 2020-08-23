import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CalculatorContainer extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    amount: 0,
    currency: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { amount, currency } = this.state;
    return (
      <div>
        <div>
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={this.handleChange}
          />
          <select name="currency" value={currency} onChange={this.handleChange}>
            <option hidden value="">
              SELECT CURRENCY
            </option>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="PLN">PLN</option>
          </select>
        </div>
      </div>
    );
  }
}
