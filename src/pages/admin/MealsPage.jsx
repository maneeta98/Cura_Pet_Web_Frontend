import { useState, useEffect } from "react";
import axios from "axios";

// export default function MealsPage() {
//   return <div className="p-8">Meals Page</div>;
// }


export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const [form, setForm] = useState({
    petName: "",
    mealTime: "",
    food: "",
  });

  const token = localStorage.getItem("token");

  const fetchMeals = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/meals", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMeals(res.data);
    } catch (err) {
      console.error("Error fetching meals:", err);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/meals", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm({ petName: "", mealTime: "", food: "" });
      fetchMeals();
    } catch (err) {
      console.error("Error adding meal:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Meal Planning</h1>

      {/* Meal Planning Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-6 w-full max-w-lg mb-8"
      >
        <div className="mb-4">
          <label className="block mb-2 font-medium">Pet Name</label>
          <input
            type="text"
            name="petName"
            value={form.petName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter pet's name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Meal Time</label>
          <input
            type="time"
            name="mealTime"
            value={form.mealTime}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Food</label>
          <input
            type="text"
            name="food"
            value={form.food}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter food details"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Add Meal Plan
        </button>
      </form>

      {/* Meals List */}
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Planned Meals</h2>
        {meals.length === 0 ? (
          <p className="text-gray-500">No meals planned yet.</p>
        ) : (
          <ul className="space-y-4">
            {meals.map((meal) => (
              <li
                key={meal._id}
                className="border p-4 rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">
                    {meal.petName} - {meal.food}
                  </p>
                  <p className="text-gray-500">Time: {meal.mealTime}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
