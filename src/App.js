import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import  Navbar  from './components/Navbar';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/signin" component={Login}/>
    </Router>
  );
}

export default App;
