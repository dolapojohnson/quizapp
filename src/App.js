import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome';
import QuestionPage from './pages/questionpage';
import Score from './pages/scorepage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="container">
      <Routes>
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/questions' element={<QuestionPage/>} />
        <Route path='/quizscore' element={<Score/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
