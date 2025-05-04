import React from 'react';
import {formatDate, getMoodColor, capitalize } from '../utils/helpers';

const PetCard = ({
  pet,
  onAdopt,
  onDelete,
  onEdit,
  isEditing,
  editForm,
  onChange,
  onUpdate,
  onCancelEdit
}) => {
  const { _id, name, species, age, personality, adopted, mood } = pet;

  return (
    <div id={`pet-${_id}`} className="card m-2 p-3 shadow" style={{ borderLeft: `5px solid ${!adopted ? getMoodColor(mood) : '#ccc'}` }}>
      {isEditing ? (
        <>
          <input className="form-control mb-2" name="name" value={editForm.name} onChange={onChange} />
          <input className="form-control mb-2" name="species" value={editForm.species} onChange={onChange} />
          <input className="form-control mb-2" name="age" type="number" value={editForm.age} onChange={onChange} />
          <input className="form-control mb-2" name="personality" value={editForm.personality} onChange={onChange} />
          <div className="d-flex gap-2">
            <button className="btn btn-success" onClick={onUpdate}>Save</button>
            <button className="btn btn-secondary" onClick={onCancelEdit}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h5>{capitalize(name)}</h5>
          <p><strong>Species:</strong> {capitalize(species)}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Personality:</strong> {capitalize(personality)}</p>
          {!adopted && <p><strong>Mood:</strong> <span style={{ color: getMoodColor(mood) }}>{mood}</span></p>}
          {adopted && <p><strong>Adoption Date:</strong> {formatDate(pet.adoption_date)}</p>}
          <p><strong>Status:</strong> {adopted ? "Adopted" : "Available"}</p>
          <div className="d-flex gap-2">
            {!adopted && <button className="btn btn-sm btn-success" onClick={onAdopt}>Adopt</button>}
            <button className="btn btn-sm btn-warning" onClick={onEdit}>Update</button>
            <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PetCard;
