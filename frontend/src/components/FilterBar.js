import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="mb-4 text-center">
      <div className="row g-2 justify-content-center">
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Search by Name"
            value={filters.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            name="species"
            placeholder="Search by Species"
            value={filters.species}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <select
            name="mood"
            className="form-select"
            value={filters.mood}
            onChange={handleChange}
          >
            <option value="">All Moods</option>
            <option value="Happy">Happy</option>
            <option value="Excited">Excited</option>
            <option value="Sad">Sad</option>
          </select>
        </div>
        <div className="col-md-2">
          <select
            name="adopted"
            className="form-select"
            value={filters.adopted}
            onChange={handleChange}
          >
            <option value="">All Status</option>
            <option value="true">Adopted</option>
            <option value="false">Available</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
