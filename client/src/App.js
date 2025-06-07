import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import FeedbackForm from './FeedbackForm';
import { AllFeedback } from './FeedbackForm';
import Home from './home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addfeedback" element= {<FeedbackForm/>}/>
        <Route path = "/viewfeedback" element ={<AllFeedback/>}/>
      </Routes>
    </Router>
  );
}

export default App;
