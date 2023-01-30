import react from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import WeatherInput from './Components/WeatherInput';





function App() {

  return (
  <div>

    <Router>
    <Routes>
        <Route path='/' element={<WeatherInput/>}/>
    </Routes>
    </Router>
    
  </div>

  );
}

export default App;
