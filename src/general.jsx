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
          <label> Full Name:
            <input
              id="fullname"
              type="text"
              placeholder="Full Name"
              value={generalData.fullname}
              onChange={handleChange}
            />
          </label>
          <label> Title:
            <input
              id="position"
              type="text"
              placeholder="Title"
              value={generalData.position}
              onChange={handleChange}
            />
          </label>
          <label> Summary:
            <textarea
              id="summary"
              placeholder="Summary"
              value={generalData.summary}
              onChange={handleChange}
            />
          </label>
        </form>
      ) : (
        <div className='formdata'>
          <div>Name: {generalData.fullname}</div>
          <div>Title: {generalData.position}</div>
          <div>Summary: {generalData.summary}</div>
        </div>
      )}

      <button className={isEditing ? 'savebtn' : 'editbtn'} type="button" onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}
