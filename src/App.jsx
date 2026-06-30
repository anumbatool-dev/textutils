import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Users from './components/Users';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');

  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setmode('dark');
      document.body.style.backgroundColor = 'pink';
    }
  };

  return (
    <Router>
      <Navbar
        text="TextUtils"
        mode={mode}
        togglemode={togglemode}
      />

      <div className="container my-3">

        <Routes>

          <Route
            path="/"
            element={
              <Textform
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/users"
            element={<Users />}
          />

        </Routes>

      </div>
    </Router>
  );
}

export default App;