import React, {Component} from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  useParams,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { getUsersData } from './redux/actions/actions';

import UsersList from "./containers/UsersList/UsersList";
import UserPage from "./containers/UserPage/UserPage";
import UserForm from "./containers/UserForm/UserForm";

class App extends Component {
  componentDidMount() {
    this.props.getUsersData();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <UsersList usersData={this.props.usersData}/>
          </Route>
          <Route path="/user-page/:id">
            <UserPage />
          </Route>
          <Route path="/user-form/create-user">
            <UserForm />
          </Route>
          <Route path="/user-form/:id">
            <UserForm />
          </Route>
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    usersData: state.usersData,
  }
}

export default connect(mapStateToProps, ({ getUsersData }))(App);
