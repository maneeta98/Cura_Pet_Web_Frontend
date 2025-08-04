import React, { useState } from 'react';

const initialPets = [
  { id: 1, name: 'Bella', type: 'Dog' },
  { id: 2, name: 'Milo', type: 'Cat' },
];

export default function PetsList() {
  const [pets, setPets] = useState(initialPets);
  const [form, setForm] = useState({ id: null, name: '', type: '' });
  const [isEditing, setIsEditing] = useState(false);

  const resetForm = () => setForm({ id: null, name: '', type: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.type) return alert('Fill all fields');

    if (isEditing) {
      setPets(pets.map(p => (p.id === form.id ? form : p)));
      setIsEditing(false);
    } else {
      setPets([...pets, { ...form, id: Date.now() }]);
    }
    resetForm();
  };

  const handleEdit = pet => {
    setForm(pet);
    setIsEditing(true);
  };

  const handleDelete = id => {
    if (window.confirm('Delete this pet?')) {
      setPets(pets.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pets List</h1>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="type"
          placeholder="Pet Type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          {isEditing ? 'Update' : 'Add'}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              resetForm();
              setIsEditing(false);
            }}
            className="bg-gray-500 text-white px-4 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      <ul>
        {pets.map(pet => (
          <li key={pet.id} className="flex justify-between mb-2 border-b pb-1">
            <span>
              {pet.name} ({pet.type})
            </span>
            <div>
              <button
                onClick={() => handleEdit(pet)}
                className="text-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(pet.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
