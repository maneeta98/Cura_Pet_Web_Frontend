import { useNavigate } from "react-router-dom";
import logo from "../assets/cura-pet-logo.png";

export default function SplashPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <img src={logo} alt="Cura Pet" className="h-32 mb-6" />
      <h1 className="text-3xl font-bold mb-4">Welcome to Cura Pet</h1>
      <button
        onClick={() => navigate("/login")}
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Get Started
      </button>
    </div>
  );
}
