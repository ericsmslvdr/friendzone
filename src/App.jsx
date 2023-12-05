import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-blog" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
