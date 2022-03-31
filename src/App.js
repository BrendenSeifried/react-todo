import './App.css';
import Home from './views/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getUser } from './services/fetchutils'; 
import { useState } from 'react';
import Auth from './views/Auth/Auth';
import Header from './components/Header';


function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <BrowserRouter>
      <div className="App">
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path = '/'>
            {currentUser ? <Home /> : <Redirect to='/auth'/>}
          </Route>

          <Route exact path = '/auth'>
            <Auth setCurrentUser={setCurrentUser}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
