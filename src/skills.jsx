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

  return (
    <div className="skillsform" key={skillData.id}>
      {isEditing ? (
        <form>
          <label> Skill:
            <input
              id="skill"
              type="text"
              placeholder="skill"
              value={skillData.skill}
              onChange={handleChange}
            />
          </label>
        </form>
      ) : (
        <div>Skill: {skillData.skill}</div>
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
