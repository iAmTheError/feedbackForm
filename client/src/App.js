import logo from './logo.svg';
import './App.css';
import FeedbackForm from './FeedbackForm';
import { allFeedback } from './FeedbackForm';
import Home from 'home.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addfeedback" element= {<FeedbackForm/>}/>
        <Route path = "viewfeedback" element ={<allFeedback/>}/>
      </Routes>
    </Router>
  );
}

export default App;
