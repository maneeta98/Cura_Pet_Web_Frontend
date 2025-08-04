import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/cura-pet-logo.png";

export default function AdminLayout() {
  return (
    <div>
      {/* Top Navbar */}
      <nav className="bg-white shadow flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Cura Pet Logo" className="h-10" />
          <span className="text-2xl font-bold text-gray-800">Cura Pet</span>
        </div>

        {/* Menu */}
        <div className="flex space-x-6">
          <Link to="/dashboard/meals" className="hover:text-blue-600">
            Meal Plans
          </Link>
          <Link to="/dashboard/appointments" className="hover:text-blue-600">
            Appointments
          </Link>
          <Link to="/dashboard/vaccinations" className="hover:text-blue-600">
            Vaccinations
          </Link>
          <Link to="/dashboard/profile" className="hover:text-blue-600">
            Profile
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-8 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
