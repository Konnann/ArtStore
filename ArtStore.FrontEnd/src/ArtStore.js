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
import MerchandiseForm from './components/Merchandise/MerchandiseForm';

export default class AppStartup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: new ArtStoreModel()
    }

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          model={this.state.model.home}
          handleChange={this.handleChange}
        />
      );
    }

    const RegisterPage = () => {
      return (
        <Register
          model={this.state.model.register}
          handleChange={this.handleChange}
        />
      );
    }

    const LogInPage = () => {
      return (
        <LogIn
          model={this.state.model.logIn}
          handleChange={this.handleChange}
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
              <Route path="/logIn" component={LogInPage} />   
              <Route path="/newMerch" component={MerchandiseForm} />     
            </Switch>
          </MainContent>
        </div>
      </div>
    );
  }

  handleChange() {
    this.setState((current) => ({
      ...current
    }))
    console.log(this.state.model);
  }
}

