import { useEffect, useState } from "react";
import { fetchPets, addPet, updatePet, deletePet } from "../../services/admin/authService";

// export default function PetsPage() {
//   return <div className="p-8">Pets Page</div>;
// }

export default function PetsPage() {
  const token = localStorage.getItem("token");
  const [pets, setPets] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: "", breed: "", age: "" });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchPets(token).then((res) => setPets(res.data));
  }, [token]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await updatePet(formData.id, formData, token);
    } else {
      await addPet(formData, token);
    }
    const res = await fetchPets(token);
    setPets(res.data);
    setFormData({ id: null, name: "", breed: "", age: "" });
    setEditing(false);
  };

  const handleEdit = (pet) => {
    setFormData(pet);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    await deletePet(id, token);
    setPets(pets.filter((p) => p._id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pet Profiles</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 max-w-md">
        <input type="text" name="name" placeholder="Pet Name" value={formData.name} onChange={handleChange} className="border p-2 w-full mb-2" />
        <input type="text" name="breed" placeholder="Breed" value={formData.breed} onChange={handleChange} className="border p-2 w-full mb-2" />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="border p-2 w-full mb-2" />
        <button className="bg-blue-500 text-white p-2 rounded w-full">{editing ? "Update" : "Add"} Pet</button>
      </form>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Breed</th>
            <th className="p-2 text-left">Age</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet._id} className="border-b">
              <td className="p-2">{pet.name}</td>
              <td className="p-2">{pet.breed}</td>
              <td className="p-2">{pet.age}</td>
              <td className="p-2">
                <button onClick={() => handleEdit(pet)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDelete(pet._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
