import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import  Navbar  from './components/Navbar';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/start" component={Login}/>
    </Router>
  );
}

export default App;
