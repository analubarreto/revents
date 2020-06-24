import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route } from 'react-router-dom';
import { HomePage } from '../../features/home/HomePage';
import { EventDetailPage } from '../../event/EventDetail/EventDetailPage';
import { PeopleDashboard } from '../../features/user/PeopleDashboard/PeopleDashboard';
import { UserDetailedPage } from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../event/EventForm/EventForm';
import TestComponent from '../../features/testarea/TestComponent';

class App extends Component  {
  render() {
    return (
      <Fragment>
        {/* This turned the home page into a landing page outside of our app */}
        <Route exact path='/' component={HomePage} />
        <Route path='/(.+)' render={() => (
          <Fragment className="App">
            <NavBar />
            <Container className="main">
              <Route path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailPage} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingsDashboard} />
              <Route path='/createEvent' component={EventForm} />
              <Route path='/test' component={TestComponent} />
            </Container>
          </Fragment>
        )} 
        />
      </Fragment>
    );
  }
}

export default App;
