import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Card from './pages/Card';

const App = () => {
  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
};

export default App;
