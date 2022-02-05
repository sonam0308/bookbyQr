import logo from './logo.svg';
import './App.css';
import Signup from './InternalPages/Signup/Signup';
import Login from './InternalPages/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './InternalPages/LandingPage';
import Schedules from './InternalPages/Schedules/Schedules';
import Termsofuse from './Component/terms/Terms';
import Privacy from './Component/terms/Privacy';
import Refund from './Component/terms/Refund';
function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/register' component={Signup}/>
        <Route path='/schedules' component={Schedules}/>
        <Route path='/terms' component={Termsofuse}/>
        <Route path='/privacy' component={Privacy}/>
        <Route path='/refund' component={Refund}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
