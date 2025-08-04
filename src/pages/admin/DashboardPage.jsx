
import { Routes, Route, Link } from "react-router-dom";
import AdminLayout from "../../layouts/admin/AdminLayout";
import PetsPage from "./PetsPage";
import MealsPage from "./MealsPage";
import AppointmentsPage from "./AppointmentsPage";
import VaccinationPage from "./VaccinationPage";
import ProfilePage from "./ProfilePage";
import logo from "../../assets/cura-pet-logo.png";

const petCategories = [
  { img: "https://cdn-icons-png.flaticon.com/512/616/616408.png", label: "Dog" },
  { img: "https://cdn-icons-png.flaticon.com/512/616/616430.png", label: "Cat" },
  { img: "https://cdn-icons-png.flaticon.com/512/616/616410.png", label: "Horse" },
  { img: "https://cdn-icons-png.flaticon.com/512/616/616408.png", label: "Hamster" },
  { img: "https://cdn-icons-png.flaticon.com/512/616/616430.png", label: "Bird" },
  { img: "https://cdn-icons-png.flaticon.com/512/616/616410.png", label: "Goat" },
  { img: "https://cdn-icons-png.flaticon.com/512/616/616430.png", label: "Fish" },
];

function DashboardHome() {
  return (
    <div className="bg-white">
      {/* Header with Logo */}
      <header className="flex items-center justify-between px-10 py-4 border-b">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Cura Pet" className="h-10" />
          <span className="font-bold text-xl">Cura</span>
        </div>
        <nav className="flex items-center space-x-6 font-medium">
          <Link to="/dashboard/meals" className="hover:text-blue-500">
            Shop
          </Link>
          <Link to="/dashboard/appointments" className="hover:text-blue-500">
            Dispensary
          </Link>
          <Link to="/dashboard/pets" className="hover:text-blue-500">
            Brands
          </Link>
          <Link to="/dashboard/profile" className="hover:text-blue-500">
            Profile
          </Link>
        </nav>
      </header>

      {/* Banner */}
      <div className="relative mt-4 rounded-lg overflow-hidden mx-10">
        <img
          src="https://images.unsplash.com/photo-1612536149805-ecf2290eab02"
          alt="Banner"
          className="w-full h-72 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pl-8 bg-black/30">
          <h1 className="text-white text-3xl font-bold max-w-md">
            PET PRESCRIPTIONS AND PET PRODUCTS
          </h1>
          <Link
            to="/dashboard/meals"
            className="mt-4 inline-block bg-pink-300 text-black px-6 py-2 rounded hover:bg-pink-400"
          >
            SHOP ALL
          </Link>
        </div>
      </div>

      {/* Shop by Pet Section */}
      <div className="px-10 mt-10">
        <h2 className="text-lg font-semibold mb-4">SHOP BY PET</h2>
        <div className="grid grid-cols-7 gap-6">
          {petCategories.map((pet, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={pet.img}
                  alt={pet.label}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="mt-2 font-medium text-center">{pet.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="pets" element={<PetsPage />} />
        <Route path="meals" element={<MealsPage />} />
        <Route path="appointments" element={<AppointmentsPage />} />
        <Route path="vaccinations" element={<VaccinationPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

// import { Routes, Route } from "react-router-dom";
// import AdminLayout from "../../layouts/admin/AdminLayout";
// import PetsPage from "./PetsPage";
// import MealsPage from "./MealsPage";
// import AppointmentsPage from "./AppointmentsPage";
// import VaccinationPage from "./VaccinationPage";
// import ProfilePage from "./ProfilePage";

// // import PetsPage from "./admin/PetsPage";
// // import MealsPage from "./admin/MealsPage";
// // import AppointmentsPage from "./admin/AppointmentsPage";
// // import VaccinationPage from "./admin/VaccinationPage";
// // import ProfilePage from "./admin/ProfilePages";
// import bannerImg from "../../assets/pets.png"; // use your image

// function DashboardHome() {
//   return (
//     <div className="p-8 space-y-6 bg-gray-50">
//       {/* Banner */}
//       <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
//         <div className="max-w-md">
//           <h2 className="text-2xl font-bold text-gray-800">Activity Tracker</h2>
//           <p className="text-gray-500 mt-2">
//             Grooming – Professionally trained and certified dog and cat stylists are in our service!
//           </p>
//         </div>
//         <img
//           src={bannerImg}
//           alt="Cura Pet Banner"
//           className="w-40 h-32 object-cover rounded-lg"
//         />
//       </div>

//       {/* Graph + Success section */}
//       <div className="grid grid-cols-3 gap-6">
//         {/* Graph placeholder */}
//         <div className="bg-white rounded-xl shadow p-6 col-span-2">
//           <h3 className="font-semibold text-gray-700 mb-4">Monthly</h3>
//           <div className="h-40 flex items-center justify-center text-gray-400">
//             [Graph Placeholder]
//           </div>
//         </div>

//         {/* Congratulation card */}
//         <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
//           <h3 className="font-semibold mb-4">Congratulations!</h3>
//           <div className="w-24 h-24 rounded-full border-8 border-blue-300 flex items-center justify-center text-lg font-bold text-blue-600">
//             94
//           </div>
//           <p className="mt-4 text-center text-gray-500 text-sm">
//             Rate accomplished this quarter
//           </p>
//           <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded">
//             Submit
//           </button>
//         </div>
//       </div>

//       {/* Service Information */}
//       <div className="bg-white rounded-xl shadow p-6">
//         <h3 className="font-semibold text-gray-700 mb-4">Service Information</h3>
//         <table className="w-full text-left">
//           <thead>
//             <tr className="text-gray-600 border-b">
//               <th className="py-2">Name</th>
//               <th className="py-2">Pet</th>
//               <th className="py-2">Depart</th>
//               <th className="py-2">Service</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b">
//               <td className="py-2">Ahmed Zakhi</td>
//               <td className="py-2">Cat</td>
//               <td className="py-2">08:30</td>
//               <td className="py-2">Nail trimming</td>
//             </tr>
//             <tr className="border-b">
//               <td className="py-2">John Peter</td>
//               <td className="py-2">Dalmatian</td>
//               <td className="py-2">16:55</td>
//               <td className="py-2">Back shave</td>
//             </tr>
//             <tr>
//               <td className="py-2">Harold Grant</td>
//               <td className="py-2">Pomeranian</td>
//               <td className="py-2">16:55</td>
//               <td className="py-2">Eye cleaning</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default function DashboardPage() {
//   return (
//     <Routes>
//       <Route element={<AdminLayout />}>
//         <Route index element={<DashboardHome />} />
//         <Route path="pets" element={<PetsPage />} />
//         <Route path="meals" element={<MealsPage />} />
//         <Route path="appointments" element={<AppointmentsPage />} />
//         <Route path="vaccinations" element={<VaccinationPage />} />
//         <Route path="profile" element={<ProfilePage />} />
//       </Route>
//     </Routes>
//   );
// }
