import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./UsersList.scss"
import UserCard from "../../components/UserCard/UserCard"

class UsersList extends Component {
  render() {
    const users = this.props.usersData.map(item => {
      return (
        <UserCard
          user={item}
          key={item.id}
        />
      )
    })
    return (
      <div className="users-list">
        <h2>Users list</h2>
        {users}
        <hr/>
        <Link
          to={'/user-form/create-user'}
          className="users-list__add-new-user"
        >
          add new user
        </Link>
      </div>
    );
  }
}

export default UsersList;