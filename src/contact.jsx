import React, { useState } from 'react';
import './forms.css'

export default function ContactForm({ contactData, addContactData }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    addContactData({ ...contactData, [id]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="contactform">
      {isEditing ? (
        <form>
          <label> Address:
            <input
              id="address"
              type="text"
              placeholder="Address"
              value={contactData.address}
              onChange={handleChange}
            />
          </label>
          <label> Phone Number:
            <input
              id="phonenumber"
              type="tel"
              placeholder="Phone Number"
              value={contactData.phonenumber}
              onChange={handleChange}
            />
          </label>
          <label> Email:
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={contactData.email}
              onChange={handleChange}
            />
          </label>
          <label> Website: (optional)
            <input
              id="site"
              type="text"
              placeholder="website"
              value={contactData.site}
              onChange={handleChange}
            />
          </label>
        </form>
      ) : (
        <>
          <div>Address: {contactData.address}</div>
          <div>Phone Number: {contactData.phonenumber}</div>
          <div>Email: {contactData.email}</div>
          <div>Website: {contactData.site}</div>
        </>
      )}

      <button className='savebtn' type="button" onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}
