import React, { useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';
import { useDispatch } from 'react-redux';
import { getPost } from './actions/postAction';
import Home from './components/Home';
import Navbar from './components/Navigation/defaultNav';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Register from './components/Register';
import Create from './components/Create';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost())
  }, [dispatch]);


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/posts' component={Posts} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
