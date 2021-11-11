import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.scss'
import CustomNav from './Nav/CustomNav';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Clientinput from './Pages/ClientInput';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <CustomNav/>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/ClientInput" element={<Clientinput/>}/>
        <Route path="/Dashboard" exact element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
