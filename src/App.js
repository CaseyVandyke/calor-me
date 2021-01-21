import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import  Navbar  from './components/Navbar';
import Register from './components/Register';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/login" component={Login}/>
      <Route path="/register"  component={Register} />
    </Router>
  );
}

export default App;
