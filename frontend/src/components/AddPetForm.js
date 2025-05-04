import React, { useState } from 'react';
import api from '../services/api';

const AddPetForm = ({ onPetAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    age: '',
    personality: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/', formData);
      onPetAdded(res.data); // add pet to list
      setFormData({ name: '', species: '', age: '', personality: '' });

      // Scroll to Available Pets section
      const availableSection = document.getElementById('available-section');
      if (availableSection) {
        availableSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      console.error('Failed to add pet:', err);
    }
  };

  return (
    <form className="p-3 shadow mb-4" onSubmit={handleSubmit}>
      <h4 className="mb-3">Add a New Pet</h4>
      <div className="row">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            name="species"
            placeholder="Species"
            value={formData.species}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-2">
          <input
            type="number"
            className="form-control"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            name="personality"
            placeholder="Personality"
            value={formData.personality}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button className="btn btn-primary mt-2" type="submit">Add Pet</button>
    </form>
  );
};

export default AddPetForm;
