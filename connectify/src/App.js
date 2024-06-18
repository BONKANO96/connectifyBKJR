import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Contact from './components/Home/Contact';
import { AuthProvider } from './context_authentification/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PhotoGallery from './components/Profile/PhotoGallery';
import MurPublication from './components/Profile/MurPublication';
import VideoGallery from './components/Profile/VideoGallery';
import MusicGallery from './components/Profile/MusicGallery';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/PhotoGallery" element={<PhotoGallery />} />
          <Route path="/MurPublication" element={<MurPublication />} />
          <Route path="/VideoGallery" element={<VideoGallery />} />
          <Route path="/MusicGallery" element={<MusicGallery />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
