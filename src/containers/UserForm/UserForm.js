import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {Form, Field} from 'react-final-form'
import {connect} from "react-redux";
import {getSingleUserData} from "../../redux/actions/actions";
import './UserForm.scss'

function UserForm(props) {
  let { id } = useParams();
  let initialFormValue = {}

  const singleUser = props.singleUserData;
  if(singleUser.first_name && !Number.isNaN(Number(id))) {
    initialFormValue = {
      firstName: `${singleUser.first_name}`,
      lastName: `${singleUser.last_name}`,
      birth_date: `${singleUser.birth_date}`,
      gender: `${singleUser.gender}`,
      job: `${singleUser.job}`,
      biography: `${singleUser.biography}`,
      is_active: Boolean(singleUser.is_active),
    }
  }

  useEffect(() => {
    if(!Number.isNaN(Number(id))) {
      props.getSingleUserData(id);
    }
  }, []);

  const onSubmit = async values => {
    console.log('submit', id)
  }

  return (
    <div className="user-form">
      <Form
        onSubmit={onSubmit}
        initialValues={initialFormValue}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
                value=""
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>birth date</label>
              <Field
                name="birth_date"
                component="input"
                type="date"
              />
            </div>
            <div>
              <label>gender</label>
              <Field name="gender" component="select">
                <option />
                <option value="male">male</option>
                <option value="female">female</option>
              </Field>
            </div>
            <div>
              <label>job</label>
              <Field
                name="job"
                component="input"
                type="text"
                placeholder="job"
              />
            </div>
            <div>
              <label>biography</label>
              <Field name="biography" component="textarea" placeholder="biography" />
            </div>
            <div>
              <label>activity</label>
              <Field name="is_active" component="input" type="checkbox" />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
      <hr/>
      <Link
        to={!Number.isNaN(Number(id)) ? `/user-page/${singleUser.id}` : '/'}
        className="user-form__back-to-home"
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

export default connect(mapStateToProps, ({ getSingleUserData }))(UserForm);
