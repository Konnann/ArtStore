import React, { Component } from 'react';
import './ArtStore.css';
import NavBar from './components/Header/NavBar';
import Header from './components/Header/Header';
import MainContent from './components/Common/MainContent'
import Home from './components/Home/Home';
import Register from './components/Register/Register'
import { Route, Switch } from 'react-router';
import ArtStoreModel from './models/ArtStoreModel'; 

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

    return (
      <div className="App">
        <div className="main-container">
          <Header />
          <NavBar />
          <MainContent>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/register" component={RegisterPage} />
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

