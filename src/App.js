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
import EditUser from "./containers/EditUser/EditUser";
import Header from "./components/Header";

class App extends Component {
  componentDidMount() {
    this.props.getUsersData();
  }

  render() {
    // console.log('APP', this.props.usersData);
    return (
      <Router>
        <Header />
        <hr/>
        <Switch>
          <Route exact path="/">
            <UsersList usersData={this.props.usersData}/>
          </Route>
          <Route path="/user-page/:id">
            <UserPage />
          </Route>
          <Route path="/edit">
            <EditUser />
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
