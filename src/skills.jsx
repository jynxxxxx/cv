import { useState } from 'react';

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
          <input
            id="skill"
            type="text"
            placeholder="skill"
            value={skillData.skill}
            onChange={handleChange}
          />
        </form>
      ) : (
        <div>Skill: {skillData.skill}</div>
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
