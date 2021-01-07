import './App.css';
import Bookapp from './components/Bookapp';
import Nav from './components/nav/Nav';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import LogInForm from './components/auth/LogInForm';
import SignUpForm from './components/auth/SignUpForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Bookapp}/>
          <Route path='/login' exact component={LogInForm}/>
          <Route path='/signin' exact component={SignUpForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
