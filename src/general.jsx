import React, { useState } from 'react';

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
          <input
            id="firstname"
            type="text"
            placeholder="First Name"
            value={generalData.firstname}
            onChange={handleChange}
          />
          <input
            id="lastname"
            type="text"
            placeholder="Last Name"
            value={generalData.lastname}
            onChange={handleChange}
          />
          <input
            id="address"
            type="text"
            placeholder="Address"
            value={generalData.address}
            onChange={handleChange}
          />
          <input
            id="position"
            type="text"
            placeholder="Position"
            value={generalData.position}
            onChange={handleChange}
          />
          <input
            id="phonenumber"
            type="text"
            placeholder="Phone Number"
            value={generalData.phonenumber}
            onChange={handleChange}
          />
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={generalData.email}
            onChange={handleChange}
          />
        </form>
      ) : (
        <>
          <div>First Name: {generalData.firstname}</div>
          <div>Last Name: {generalData.lastname}</div>
          <div>Address: {generalData.address}</div>
          <div>Position: {generalData.position}</div>
          <div>Phone Number: {generalData.phonenumber}</div>
          <div>Email: {generalData.email}</div>
        </>
      )}

      <button type="button" onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}
