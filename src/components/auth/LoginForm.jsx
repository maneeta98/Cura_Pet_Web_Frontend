import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/cura-pet-logo.png";

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left section with logo */}
      <div className="w-1/2 flex items-center justify-center bg-orange-50">
        <img src={logo} alt="Cura Pet Logo" className="w-64" />
      </div>

      {/* Right section with form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-96">
          <h2 className="text-3xl font-bold mb-2">Sign In</h2>
          <p className="text-gray-600 mb-6">
            Welcome Back! Enter your information below
          </p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="border border-gray-300 rounded w-full p-3"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                className="border border-gray-300 rounded w-full p-3"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded font-medium"
            >
              Log In
            </button>

            <div className="flex justify-between items-center mt-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" className="text-orange-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-500">Don't have an account?{" "}
                <span
                  className="text-orange-500 cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
