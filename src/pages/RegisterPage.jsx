import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/cura-pet-logo.png";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/api/auth/register", {
        name,
        mobile,
        password,
      });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Cura Pet" className="h-16" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import logo from "../assets/cura-pet-logo.png";

// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");

//   const { handleRegister, loading } = useAuth();

//   const onSubmit = (e) => {
//     e.preventDefault();
//     handleRegister({ name, mobile, password });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded shadow-lg w-96">
//         <div className="flex justify-center mb-4">
//           <img src={logo} alt="Cura Pet" className="h-16" />
//         </div>
//         <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//         <form onSubmit={onSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Mobile"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
