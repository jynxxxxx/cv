import React, { useState } from 'react';
import './forms.css'

export default function GeneralInfoForm({ generalData, addGeneralData }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    addGeneralData({ ...generalData, [id]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="generalform">
      {isEditing ? (
        <form>
          <label> First Name:
            <input
              id="firstname"
              type="text"
              placeholder="First Name"
              value={generalData.firstname}
              onChange={handleChange}
            />
          </label>
          <label> Last Name:
            <input
              id="lastname"
              type="text"
              placeholder="Last Name"
              value={generalData.lastname}
              onChange={handleChange}
            />
          </label>
          <label> Title:
            <input
              id="position"
              type="text"
              placeholder="Position"
              value={generalData.position}
              onChange={handleChange}
            />
          </label>
          <label> Summary:
            <textarea
              id="summary"
              placeholder="summary"
              value={generalData.summary}
              onChange={handleChange}
            />
          </label>
        </form>
      ) : (
        <>
          <div>First Name: {generalData.firstname}</div>
          <div>Last Name: {generalData.lastname}</div>
          <div>Position: {generalData.position}</div>
          <div>Summary: {generalData.summary}</div>
        </>
      )}

      <button className='savebtn' type="button" onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}
