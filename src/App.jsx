import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLayout from "./layouts/admin/AdminLayout"; // Renamed for clarity
import MealsPage from "./pages/admin/MealsPage";
import AppointmentsPage from "./pages/admin/AppointmentsPage";
import PetsPage from "./pages/admin/PetsPage";
import DashboardPage from "./pages/admin/DashboardPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected/Admin Routes */}
        <Route path="/dashboard/*" element={<AdminLayout />}>
          {/* Default Dashboard Home */}
          <Route index element={<DashboardPage />} />
          <Route path="meals" element={<MealsPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="pets" element={<PetsPage />} />
        </Route>
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer />
    </BrowserRouter>
  );
}

// import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import DashboardLayout from "./layouts/admin/AdminLayout";
// import MealsPage from "./pages/admin/MealsPage";
// import AppointmentsPage from "./pages/admin/AppointmentsPage";
// import PetsPage from "./pages/admin/PetsPage";
// import DashboardPage from "./pages/admin/DashboardPage.jsx";



// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/login" element={<LoginPage />} /> {/* Added this line */}
//         <Route path="/register" element={<RegisterPage />} />

//         {/* Protected/Admin Routes */}
//         <Route path="/dashboard/*" element={<DashboardLayout />}>
//           <Route index element={<div>Welcome to Dashboard</div>} />
//           <Route path="meals" element={<MealsPage />} />
//           <Route path="appointments" element={<AppointmentsPage />} />
//           <Route path="pets" element={<PetsPage />} />
//           <Route path="/dashboard/*" element={<DashboardPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
