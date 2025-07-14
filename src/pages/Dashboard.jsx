import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome {user?.name || 'to Cura Pet'} 🐾</h1>
      <p className="text-gray-700">Your pet’s wellness, now at your fingertips.</p>
    </div>
  );
};

export default Dashboard;

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Card, CardContent } from '@/components/ui/Card';
// // import { FaDog, FaUserCircle, FaCalendarCheck, FaInfoCircle } from 'react-icons/fa';

// // const Dashboard = () => {
// //   const cards = [
// //     {
// //       icon: <FaUserCircle className="text-4xl text-blue-500" />,
// //       title: "Profile",
// //       description: "View & manage your profile",
// //       route: "/profile",
// //     },
// //     {
// //       icon: <FaDog className="text-4xl text-green-500" />,
// //       title: "Pet Details",
// //       description: "Manage your pets",
// //       route: "/pets",
// //     },
// //     {
// //       icon: <FaCalendarCheck className="text-4xl text-purple-500" />,
// //       title: "Appointments",
// //       description: "Book & view appointments",
// //       route: "/appointments",
// //     },
// //     {
// //       icon: <FaInfoCircle className="text-4xl text-yellow-500" />,
// //       title: "About",
// //       description: "Learn about Cura Pet",
// //       route: "/about",
// //     },
// //   ];

// //   return (
// //     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //       {cards.map((card, index) => (
// //         <Card key={index} className="hover:shadow-xl transition duration-300">
// //           <Link to={card.route}>
// //             <CardContent className="flex items-center space-x-4">
// //               {card.icon}
// //               <div>
// //                 <h2 className="text-lg font-semibold">{card.title}</h2>
// //                 <p className="text-sm text-gray-500">{card.description}</p>
// //               </div>
// //             </CardContent>
// //           </Link>
// //         </Card>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Dashboard;



// // // src/pages/Dashboard.jsx
// // import React from "react";
// // import Sidebar from "../components/sidebar";
// // const Dashboard = () => {
// //   return (
// //     <div className="pt-24 px-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-bold text-purple-700 mb-6">Welcome to Dashboard</h1>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         <div className="bg-white p-6 rounded-xl shadow-md">
// //           <h2 className="text-lg font-semibold">Profile</h2>
// //           <p className="text-gray-600 mt-2">View and edit your profile details.</p>
// //         </div>

// //         <div className="bg-white p-6 rounded-xl shadow-md">
// //           <h2 className="text-lg font-semibold">Notifications</h2>
// //           <p className="text-gray-600 mt-2">Check latest alerts and updates.</p>
// //         </div>

// //         <div className="bg-white p-6 rounded-xl shadow-md">
// //           <h2 className="text-lg font-semibold">Settings</h2>
// //           <p className="text-gray-600 mt-2">Manage your account settings.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import React from "react";
// import Sidebar from "../components/Sidebar";
// import AppointmentsList from "../components/appointmentbooking";

// const Dashboard = () => {
//   const token = "your_jwt_token_here"; // Replace this with dynamic login later

//   return (
//     <div className="flex">
//       <Sidebar />
//       <main className="ml-64 p-8 bg-gray-100 min-h-screen w-full">
//         <h1 className="text-3xl font-bold text-cyan-800 mb-6">Welcome to Dashboard</h1>

//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-lg font-semibold">Meditation Summary</h2>
//             <p className="text-gray-600 mt-2">You completed 3 sessions today.</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-lg font-semibold">Mood Tracker</h2>
//             <p className="text-gray-600 mt-2">You're feeling great this week!</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-lg font-semibold">Progress Overview</h2>
//             <p className="text-gray-600 mt-2">Consistency: 5 days in a row 🎉</p>
//           </div>
//         </div> */}

//         {/* Journaling Feature Below */}
//         <AppointmentsList token={token} />
        
        
        
//       </main>
//     </div>
//   );
// };

// export default Dashboard;