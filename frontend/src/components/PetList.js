import React, { useEffect, useState } from 'react';
import api from '../services/api';
import FilterBar from './FilterBar';
import PetCard from './PetCard';

const PetList = ({ onlyAvailable = false }) => {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ name: '', species: '', mood: '', adopted: '' });
  const [sortOption, setSortOption] = useState('');
  const [editingPet, setEditingPet] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', species: '', age: '', personality: '' });

  useEffect(() => {
    fetchPets();
  }, []); // ✅ Only run once on mount

  const fetchPets = async () => {
    try {
      const res = await api.get('/');
      setPets(res.data);
    } catch (err) {
      console.error('Error fetching pets:', err);
    }
  };

  const handleAdoptPet = async (_id) => {
    try {
      await api.patch(`/${_id}/adopt`);
      fetchPets();
    } catch (err) {
      console.error('Error adopting pet:', err);
    }
  };

  const handleDeletePet = async (_id) => {
    const element = document.getElementById(`pet-${_id}`);
    if (element) {
      element.classList.add('fade-out');
      setTimeout(async () => {
        await api.delete(`/${_id}`);
        fetchPets();
      }, 500);
    }
  };

  const startEdit = (pet) => {
    setEditingPet(pet._id);
    setEditForm({ name: pet.name, species: pet.species, age: pet.age, personality: pet.personality });
  };

  const cancelEdit = () => {
    setEditingPet(null);
    setEditForm({ name: '', species: '', age: '', personality: '' });
  };

  const handleUpdatePet = async () => {
    try {
      await api.put(`/${editingPet}`, editForm);
      cancelEdit();
      fetchPets();
    } catch (err) {
      console.error('Error updating pet:', err);
    }
  };

  const handleInputChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (name, value) => setFilters(prev => ({ ...prev, [name]: value }));
  const handleSortChange = (value) => setSortOption(value);
  const handleReset = () => setFilters({ name: '', species: '', mood: '', adopted: '' });

  const filteredPets = pets
    .filter(pet => {
      const respectsOnlyAvailable = onlyAvailable ? !pet.adopted : true;
      const matchesName = pet.name.toLowerCase().includes(filters.name.toLowerCase());
      const matchesSpecies = pet.species.toLowerCase().includes(filters.species.toLowerCase());
      const matchesMood = filters.mood ? (pet.mood === filters.mood && !pet.adopted) : true;
      const matchesAdopted = filters.adopted === '' ? true : pet.adopted.toString() === filters.adopted;
      return respectsOnlyAvailable && matchesName && matchesSpecies && matchesMood && matchesAdopted;
    })
    .sort((a, b) => {
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
      if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
      if (sortOption === 'age-asc') return a.age - b.age;
      if (sortOption === 'age-desc') return b.age - a.age;
      return 0;
    });

  return (
    <div className="container mt-4">
      {!onlyAvailable && (
        <>
          <h2 className="mb-3 text-center">🐾 Pet List (Manage All)</h2>
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleReset}
            onSortChange={handleSortChange}
          />
        </>
      )}

      <div className="row">
        {filteredPets.length === 0 ? (
          <p className="text-center">No pets match your search.</p>
        ) : (
          filteredPets.map(pet => (
            <div className="col-md-4" key={pet._id}>
              <PetCard
                pet={pet}
                onAdopt={() => handleAdoptPet(pet._id)}
                onDelete={() => handleDeletePet(pet._id)}
                onEdit={() => startEdit(pet)}
                isEditing={editingPet === pet._id}
                editForm={editForm}
                onChange={handleInputChange}
                onUpdate={handleUpdatePet}
                onCancelEdit={cancelEdit}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PetList;
