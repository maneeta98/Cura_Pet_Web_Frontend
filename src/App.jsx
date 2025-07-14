// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// // import Login from './pages/Login';
// // import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import PetsList from './pages/PetsList';
// import AppointmentsList from './pages/AppointmentsList';
// import PrivateLayout from './layouts/PrivateLayout';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Redirect root path to /dashboard */}
//         <Route path="/" element={<Navigate to="/dashboard" replace />} />

//         {/* <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} /> */}

//         <Route element={<PrivateLayout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/pets" element={<PetsList />} />
//           <Route path="/appointments" element={<AppointmentsList />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import LoginForm from "./pages/login";
// import RegisterForm from "./pages/register";
// import Dashboard from "./pages/Dashboard";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Placeholder route components
// const MeditationPage = () => <div className="ml-64 p-8">Meditation Page</div>;
// const JournalingPage = () => <div className="ml-64 p-8">Journaling Page</div>;
// const MoodTrackerPage = () => <div className="ml-64 p-8">Mood Tracker Page</div>;
// const ProgressPage = () => <div className="ml-64 p-8">Progress Page</div>;
// const SettingsPage = () => <div className="ml-64 p-8">Settings Page</div>;

// function App() {
//   return (
//     <Router>
//       {/* Navbar at the top */}
//       <Navbar />

//       {/* Toast notifications (works globally) */}
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Main content area */}
//       <div className="pt-20 px-4 w-full">
//         <Routes>
//           {/* <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} /> */}
//           <Route path="/dashboard" element={<Dashboard/>} />
//           <Route path="/meditation" element={<MeditationPage />} />
//           <Route path="/journaling" element={<JournalingPage />} />
//           <Route path="/moodtracker" element={<MoodTrackerPage />} />
//           <Route path="/progress" element={<ProgressPage />} />
//           <Route path="/settings" element={<SettingsPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
// import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
