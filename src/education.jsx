import React, { useState } from 'react';
import './forms.css'

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
          <label> School:
            <input
              id="school"
              type="text"
              placeholder="UCLA"
              value={eduData.school}
              onChange={handleChange}
            />
          </label>
          <label> Degree:
            <input
              id="degree"
              type="text"
              placeholder="Psychobiology B.S"
              value={eduData.degree}
              onChange={handleChange}
            />
          </label>
          <label> City:
            <input
              id="city"
              type="text"
              placeholder="Los Angeles"
              value={eduData.city}
              onChange={handleChange}
            />
          </label>
          <label> Country:
            <input
              id="country"
              type="text"
              placeholder="USA"
              value={eduData.country}
              onChange={handleChange}
            />
          </label>
          <div className='dates'>
            <label> Start Year:
              <input
                id="startYear"
                type="tel"
                maxLength={4}
                placeholder="2014"
                value={eduData.startYear}
                onChange={handleChange}
              />
            </label>
            <label> Graduation Year:
              <input
                id="endYear"
                type="tel"
                maxLength={4}
                placeholder="2018"
                value={eduData.endYear}
                onChange={handleChange}
              />
            </label>
          </div>
        </form>
      ) : (
        <div className='formdata'>
          <div>School: {eduData.school}</div>
          <div>Degree: {eduData.degree}</div>
          <div>City: {eduData.city}</div>
          <div>Country: {eduData.country}</div>
          <div className='dates'>
            <div>Start Year: {eduData.startYear}</div>
            <div>Graduation Year: {eduData.endYear}</div>
          </div>
        </div>
      )}

      <div className='btnctn'>
        <button className={isEditing ? 'savebtn' : 'editbtn'} type="button" onClick={isEditing ? handleSave : handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <object className='trashicon' data='./trash.png' type="image/png" onClick={handleDelete} aria-label="Trash Icon"></object>
      </div>
    </div>
  );
}
