import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import RecordDetailPage from './pages/RecordDetailPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import EventPage from './pages/EventPage';
import BottomNav from './components/BottomNav';
import SideNav from './components/SideNav';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-text-primary">
        <div className="flex">
          <SideNav />
          <main className="flex-1 md:pl-64 pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/record/:id" element={<RecordDetailPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/event/:id" element={<EventPage />} />
            </Routes>
          </main>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
