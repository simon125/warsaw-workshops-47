import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UsersList extends Component {
  static propTypes = {
    users: PropTypes.array,
  };

  render() {
    return (
      <>
        {this.props.users.map(({ id, name, username }) => {
          return (
            <li key={id}>
              <b>{name}</b>
            </li>
          );
        })}
      </>
    );
  }
}
