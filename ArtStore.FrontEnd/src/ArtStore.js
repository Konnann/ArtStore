import React, { Component } from 'react';
import './ArtStore.css';
import NavBar from './components/Header/NavBar';
import Header from './components/Header/Header';
import MainContent from './components/Common/MainContent'
import Home from './components/Home/Home';
import Register from './components/Account/Register'
import { Route, Switch } from 'react-router';
import ArtStoreModel from './models/ArtStoreModel';
import LogIn from './components/Account/LogIn'
import observer from './infrastructure/observer';
import Logout from './components/Account/LogOut';
import MerchandiseForm from './components/Merchandise/MerchandiseForm'

export default class AppStartup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: new ArtStoreModel(),
      username: '',
      loggedIn: false
    }


    this.handleChange = this.handleChange.bind(this);
  }

  onAuthChange = username => {}

  render() {
    const HomePage = (props) => {
      return (
        <Home
          {...props}
          model={this.state.model.home}
          handleChange={this.handleChange}
        />
      );
    }

    const RegisterPage = (props) => {
      return (
        <Register
          {...props}
          model={this.state.model.register}
          handleChange={this.handleChange}
        />
      );
    }

    const LogInPage = (props) => {
      return (
        <LogIn
          {...props}
          model={this.state.model.logIn}
          handleStateChange={this.handleChange}
        />
      );
    }

    const MerchandisePage = () => {
      return (
        <MerchandiseForm
          handleChange={this.handleChange}
        />
      );
    }

    return (
      <div className="App">
        <div className="main-container">
          <Header />
          <NavBar />
          <MainContent>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/newMerch" component={MerchandisePage} />     
              <Route path="/logIn" exact component={LogInPage} />
              <Route path="/logout" exact component={Logout} />
            </Switch>
          </MainContent>
        </div>
      </div>
    );
  }

  handleChange(state) {
    console.log(state)
    this.setState((current) => ({
      ...current
    }))
    console.log(this.state.model);
  }
}

