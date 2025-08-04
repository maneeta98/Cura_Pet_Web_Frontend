import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    petName: "",
    date: "",
    reason: "",
  });

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:5050/api/appointments");
      setAppointments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addAppointment = async () => {
    try {
      await axios.post("http://localhost:5050/api/appointments", newAppointment);
      setNewAppointment({ petName: "", date: "", reason: "" });
      fetchAppointments();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/api/appointments/${id}`);
      fetchAppointments();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Appointments</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Pet Name"
          value={newAppointment.petName}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, petName: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <input
          type="date"
          value={newAppointment.date}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, date: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Reason"
          value={newAppointment.reason}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, reason: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <button
          onClick={addAppointment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Appointment
        </button>
      </div>
      <ul>
        {appointments.map((appt) => (
          <li key={appt._id} className="mb-2">
            {appt.petName} - {appt.date} ({appt.reason})
            <button
              onClick={() => deleteAppointment(appt._id)}
              className="ml-4 text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default function AppointmentsPage() {
//   return <div className="p-8">Appointments Page</div>;
// }
