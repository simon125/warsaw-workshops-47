import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UsersList from '../components/UsersList';

// function

export default class UsersContainers extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = { users: [] };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ users: [] });
      });
  }

  render() {
    return (
      <div>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}
