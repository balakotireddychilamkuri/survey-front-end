import logo from './logo.svg';
import './App.css';
import Home from './Home';
import SurveyComponent from './SurveyComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AllSurvays from './AllSurvays';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<SurveyComponent />} />
      <Route path="/allsurvays" element={< AllSurvays />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
