import React, { useState } from 'react';

export default function ExperienceForm({ expData, addExpData, onRemove }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    addExpData({ ...expData, [id]: value });
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
    <div className="expform" key={expData.id}>
      {isEditing ? (
        <form>
          <input
            id="position"
            type="text"
            placeholder="Position"
            value={expData.position}
            onChange={handleChange}
          />
          <input
            id="company"
            type="text"
            placeholder="Company"
            value={expData.company}
            onChange={handleChange}
          />
          <input
            id="city"
            type="text"
            placeholder="City"
            value={expData.city}
            onChange={handleChange}
          />
          <input
            id="country"
            type="text"
            placeholder="Country"
            value={expData.country}
            onChange={handleChange}
          />
          <input
            id="startDate"
            type="text"
            placeholder="Start Date"
            value={expData.startDate}
            onChange={handleChange}
          />
          <input
            id="endDate"
            type="text"
            placeholder="End Date"
            value={expData.endDate}
            onChange={handleChange}
          />
          <input
            id="description"
            type="text"
            placeholder="Description"
            value={expData.description}
            onChange={handleChange}
          />
        </form>
      ) : (
        <>
          <div>Position: {expData.position}</div>
          <div>Company: {expData.company}</div>
          <div>City: {expData.city}</div>
          <div>Country: {expData.country}</div>
          <div>Start Date: {expData.startDate}</div>
          <div>End Date: {expData.endDate}</div>
          <div>Description: {expData.description}</div>
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
