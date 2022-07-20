import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import Header from './components/header/header';
import Rockets from './components/pages/rockets/rockets';
import Missions from './components/pages/misions/misions';
import MyProfile from './components/pages/myProfile/myProfile';
import getRockets from './rocket-api';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route index element={<Rockets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
