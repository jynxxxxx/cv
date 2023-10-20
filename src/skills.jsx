import { useState } from 'react';
import './forms.css'

export default function SkillsForm({ skillData, addSkillData, onRemove }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;
    addSkillData({ ...skillData, skill: value });
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

  const preventSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
  };

  return (
    <div className="skillsform" key={skillData.id}>
      {isEditing ? (
        <form onSubmit={preventSubmit}>
          <label> Skill:
            <input
              id="skill"
              type="text"
              placeholder="Skill"
              value={skillData.skill}
              onChange={handleChange}
            />
          </label>
        </form>
      ) : (
        <div>{skillData.skill}</div>
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
