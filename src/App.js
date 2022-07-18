import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Rockets from './components/pages/rockets/rockets';
import Missions from './components/pages/misions/misions';
import MyProfile from './components/pages/myProfile/myProfile';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
