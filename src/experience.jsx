import React, { useState } from 'react';
import './forms.css'

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
          <label> Company Name:
            <input
              id="company"
              type="text"
              placeholder="Company"
              value={expData.company}
              onChange={handleChange}
            />
          </label>
          <label> City:
            <input
              id="city"
              type="text"
              placeholder="City"
              value={expData.city}
              onChange={handleChange}
            />
          </label>
          <label> Country:
            <input
              id="country"
              type="text"
              placeholder="Country"
              value={expData.country}
              onChange={handleChange}
            />
          </label>
          <div className='dates'>
            <label> Start Date:
              <input
                id="startDate"
                type="text"
                placeholder="MMM YYYY (ex: Mar 2016)"
                maxLength={8}
                value={expData.startDate}
                onChange={handleChange}
              />
            </label>
            <label> End Date:
              <input
                id="endDate"
                type="text"
                placeholder="MMM YYYY (ex: Dec 2019)"
                maxLength={8}
                value={expData.endDate}
                onChange={handleChange}
              />
            </label>
          </div>
          <label> Position:
            <input
              id="position"
              type="text"
              placeholder="Position"
              value={expData.position}
              onChange={handleChange}
            />
          </label>
          <label> Roles and Responsibilities:
            <textarea
              id="description"
              type="text"
              placeholder="Description"
              value={expData.description}
              onChange={handleChange}
            />
          </label>
        </form>
      ) : (
        <>
          <div>Position: {expData.position}</div>
          <div>Company: {expData.company}</div>
          <div>City: {expData.city}</div>
          <div>Country: {expData.country}</div>
          <div>Start Date: {expData.startDate}</div>
          <div>End Date: {expData.endDate}</div>
          <div>R&R: {expData.description}</div>
        </>
      )}

      
      <div className='btnctn'>
        <button className='savebtn' type="button" onClick={isEditing ? handleSave : handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <object className='trashicon' data='./trash.png' type="image/png" onClick={handleDelete} aria-label="Trash Icon"></object>
      </div>
    </div>
  );
}
