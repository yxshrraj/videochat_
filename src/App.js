
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Home';
import RoomPage from './pages/Room';
// import Navbar from './Components/Navbar';



function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Homepage />} />
      
      <Route path="/room/:roomId" element={<RoomPage />} />

    </Routes>
    </>
  );
}

export default App;



