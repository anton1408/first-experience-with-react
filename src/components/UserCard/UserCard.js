import React from "react";
import "./UserCard.scss";
import {Link} from "react-router-dom";
import {
  deleteUser, getSingleUserData
} from "../../redux/actions/actions";
import {connect} from "react-redux";

const UserCard = props => (
  <div className="user-card">
    <div className="user-card__user-name">first name: {props.user.first_name}</div>
    <div className="user-card__user-surname">last name: {props.user.last_name}</div>
    <div className="user-card__user-b-date">birth date: {props.user.birth_date}</div>
    <div className="user-card__user-gender">gender: {props.user.gender}</div>
    <div className="user-card__group-btn">
      <Link to={`/user-page/${props.user.id}`}>
        <button className="btn user-card__details-btn">user details</button>
      </Link>
      <button
        className="btn user-card__delete-btn"
        onClick={() => props.deleteUser(props.user.id)}
      >
        delete user
      </button>
    </div>
  </div>
);

export default connect(null, ({ deleteUser }))(UserCard);