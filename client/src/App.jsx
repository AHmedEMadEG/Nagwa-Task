import './App.scss';
import Practice from './pages/practice/Practice';
import Rank from './pages/rank/Rank';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Practice/>}/>
          <Route path="/rank" element={<Rank/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
