import React, { Component } from "react";
import "./UsersList.scss"
import UserCard from "../../components/UserCard/UserCard"
import {Link} from "react-router-dom";

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
        <Link to={'/edit'}>
          <button>
            new user
          </button>
        </Link>
      </div>
    );
  }
}

export default UsersList;