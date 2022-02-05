import logo from './logo.svg';
import './App.css';
import Signup from './InternalPages/Signup/Signup';
import Login from './InternalPages/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './InternalPages/LandingPage';
import Schedules from './InternalPages/Schedules/Schedules';
function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/register' component={Signup}/>
        <Route path='/schedules' component={Schedules}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
