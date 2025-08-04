// import React, { useState } from 'react';

// const initialAppointments = [
//   { id: 1, petName: 'Bella', date: '2025-07-01', reason: 'Vaccination' },
//   { id: 2, petName: 'Milo', date: '2025-07-05', reason: 'Check-up' },
// ];

// export default function AppointmentsList() {
//   const [appointments, setAppointments] = useState(initialAppointments);
//   const [form, setForm] = useState({ id: null, petName: '', date: '', reason: '' });
//   const [isEditing, setIsEditing] = useState(false);

//   const resetForm = () => setForm({ id: null, petName: '', date: '', reason: '' });

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!form.petName || !form.date || !form.reason) return alert('Fill all fields');

//     if (isEditing) {
//       setAppointments(appointments.map(a => (a.id === form.id ? form : a)));
//       setIsEditing(false);
//     } else {
//       setAppointments([...appointments, { ...form, id: Date.now() }]);
//     }
//     resetForm();
//   };

//   const handleEdit = appointment => {
//     setForm(appointment);
//     setIsEditing(true);
//   };

//   const handleDelete = id => {
//     if (window.confirm('Delete this appointment?')) {
//       setAppointments(appointments.filter(a => a.id !== id));
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Appointments List</h1>

//       <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2 max-w-md">
//         <input
//           type="text"
//           name="petName"
//           placeholder="Pet Name"
//           value={form.petName}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="reason"
//           placeholder="Reason"
//           value={form.reason}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <div>
//           <button type="submit" className="bg-blue-600 text-white px-4 rounded mr-2">
//             {isEditing ? 'Update' : 'Add'}
//           </button>
//           {isEditing && (
//             <button
//               type="button"
//               onClick={() => {
//                 resetForm();
//                 setIsEditing(false);
//               }}
//               className="bg-gray-500 text-white px-4 rounded"
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>

//       <ul>
//         {appointments.map(({ id, petName, date, reason }) => (
//           <li key={id} className="flex justify-between mb-2 border-b pb-1 max-w-md">
//             <div>
//               <strong>{petName}</strong> - {date} <br />
//               <small>{reason}</small>
//             </div>
//             <div>
//               <button
//                 onClick={() => handleEdit({ id, petName, date, reason })}
//                 className="text-yellow-600 mr-2"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(id)}
//                 className="text-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
