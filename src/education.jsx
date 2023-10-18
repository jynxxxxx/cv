import React, { useState } from 'react';

export default function EducationForm({ eduData, addEduData, onRemove }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    addEduData({ ...eduData, [id]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    onRemove();
  };

  return (
    <div className="eduform" key={eduData.id}>
      {isEditing ? (
        <form>
          <input
            id="school"
            type="text"
            placeholder="UCLA"
            value={eduData.school}
            onChange={handleChange}
          />
          <input
            id="degree"
            type="text"
            placeholder="Psychobiology B.S"
            value={eduData.degree}
            onChange={handleChange}
          />
          <input
            id="city"
            type="text"
            placeholder="Los Angeles"
            value={eduData.city}
            onChange={handleChange}
          />
          <input
            id="country"
            type="text"
            placeholder="USA"
            value={eduData.country}
            onChange={handleChange}
          />
          <input
            id="startYear"
            type="number"
            maxLength={4}
            placeholder="2014"
            value={eduData.startYear}
            onChange={handleChange}
          />
          <input
            id="endYear"
            type="number"
            maxLength={4}
            placeholder="2018"
            value={eduData.endYear}
            onChange={handleChange}
          />
        </form>
      ) : (
        <>
          <div>School: {eduData.school}</div>
          <div>Degree: {eduData.degree}</div>
          <div>City: {eduData.city}</div>
          <div>Country: {eduData.country}</div>
          <div>Start Year: {eduData.startYear}</div>
          <div>End Year: {eduData.endYear}</div>
        </>
      )}

      <button type="button" onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
