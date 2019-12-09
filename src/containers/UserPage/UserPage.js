import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {
  getSingleUserData,
  deleteUser
} from "../../redux/actions/actions";
import "./UserPage.scss"

function UserPage(props) {
  let { id } = useParams();

  useEffect(() => {
    props.getSingleUserData(id);
  }, []);

  const singleUser = props.singleUserData;

  return (
    <div className="user-page">
      <h2>User page</h2>
      <div className="user-details">
        <div className="user-details__user-name">first name: {singleUser.first_name}</div>
        <div className="user-details__user-surname">last name: {singleUser.last_name}</div>
        <div className="user-details__user-b-date">birth date: {singleUser.birth_date}</div>
        <div className="user-details__user-gender">gender: {singleUser.gender}</div>
        <div className="user-details__user-profession">profession: {singleUser.job}</div>
        <div className="user-details__user-biography">biography: {singleUser.biography}</div>
        <div className="user-details__user-activity">activity: {String(singleUser.is_active)}</div>
        <div className="user-details__group-btn">
          <Link to={`/user-form/${singleUser.id}`}>
            <button className="btn user-card__details-btn">edit information</button>
          </Link>
          <Link to={'/'}>
            <button
              className="btn user-details__delete-btn"
              onClick={() => props.deleteUser(singleUser.id)}
            >
              delete user
            </button>
          </Link>
        </div>
      </div>
      <hr/>
      <Link
        to={'/'}
        className="user-page__back-to-home"
      >
        back
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    singleUserData: state.singleUserData,
  }
}

export default connect(mapStateToProps, ({ getSingleUserData, deleteUser }))(UserPage);
