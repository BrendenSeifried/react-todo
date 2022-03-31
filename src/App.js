import './App.css';
import Home from './views/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path = '/'>
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
