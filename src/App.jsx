import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import GeneralInfoForm from './general'
import EducationForm from './education'
import ExperienceForm from './experience'
import SkillsForm from './skills'

export default function App() {
  const [generalData, setGeneralData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    position: '',
    phonenumber: '',
    email: '',
  });

  const [eduDataList, setEduDataList] = useState([]);
  const [eduData, setEduData] = useState({
    school: '',
    degree: '',
    city: '',
    country: '',
    startYear: '',
    endYear: '',
  });

  const addNewEducation = () => {
    setEduDataList([...eduDataList, { ...eduData, id: uuidv4() }]);
    setEduData({
      school: '',
      degree: '',
      city: '',
      country: '',
      startYear: '',
      endYear: '',
    });
  };


  const [expDataList, setExpDataList] = useState([]);
  const [expData, setExpData] = useState({
    position: '',
    company: '',
    city: '',
    country: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const addNewExperience = () => {
    setExpDataList([...expDataList, { ...expData, id: uuidv4() }]);
    setExpData({
      position: '',
      company: '',
      city: '',
      country: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  const [skillsDataList, setSkillsDataList] = useState([]);
  const [skillsData, setSkillsData] = useState({ skill: '' });

  const addNewSkill = () => {
    setSkillsDataList([...skillsDataList, { ...skillsData, id: uuidv4() }]);
    setSkillsData({ skill: '' });
  }

  return (
    <div className='masterctn'>
      <div className="formctn">
      <h1>Data Input</h1>
      <h2 className="heading">General</h2>
        <GeneralInfoForm
          generalData={generalData}
          addGeneralData={setGeneralData}
        />

        <h2 className="heading">Education</h2>
        {eduDataList.map((eduEntry, index) => (
          <EducationForm
            key={eduEntry.id}
            eduData={eduEntry}
            addEduData={(updatedData) => {
              const updatedList = [...eduDataList];
              updatedList[index] = updatedData;
              setEduDataList(updatedList);
            }}
            onRemove={() => {
              const updatedList = eduDataList.filter((edu) => edu.id !== eduEntry.id);
              setEduDataList(updatedList);
            }}
          />
        ))}
        <button className="addEdu" onClick={addNewEducation}>
          Add Education
        </button>

        <h2 className="heading">Experience</h2>
        {expDataList.map((expEntry, index) => (
          <ExperienceForm
            key={expEntry.id}
            expData={expEntry}
            addExpData={(updatedData) => {
              const updatedList = [...expDataList];
              updatedList[index] = updatedData;
              setExpDataList(updatedList);
            }}
            onRemove={() => {
              const updatedList = expDataList.filter((exp) => exp.id !== expEntry.id);
              setExpDataList(updatedList);
            }}
          />
        ))}
        <button className="addExp" onClick={addNewExperience}>
          Add Experience
        </button>

        <h2 className="heading">Skills</h2>
        {skillsDataList.map((skillEntry, index) => (
          <SkillsForm
            key={skillEntry.id}
            skillData={skillEntry}
            addSkillData={(updatedData) => {
              const updatedList = [...skillsDataList];
              updatedList[index] = updatedData;
              setSkillsDataList(updatedList);
            }}
            onRemove={() => {
              const updatedList = skillsDataList.filter((skill) => skill.id !== skillEntry.id);
              setSkillsDataList(updatedList);
            }}
          />
        ))}
         <button className="addSkill" onClick={addNewSkill}>
          Add Skill
        </button>
      </div>
      

      <div className="previewctn">
        <div>Received General Data:
          <div>Full Name: {generalData.firstname} {generalData.lastname}</div>
          <div>Address: {generalData.address}</div>
          <div>Position: {generalData.position}</div>
          <div>Phone Number: {generalData.phonenumber}</div>
          <div>Email: {generalData.email}</div>
        </div>

        <div>Received Edu Data:</div>
        {eduDataList.map((eduEntry) => (
          <div key={eduEntry.id}>
            <div>School: {eduEntry.school}</div>
            <div>Degree: {eduEntry.degree}</div>
            <div>City: {eduEntry.city}</div>
            <div>Country: {eduEntry.country}</div>
            <div>Start Year: {eduEntry.startYear}</div>
            <div>End Year: {eduEntry.endYear}</div>
          </div>
        ))}

        <div>Received Exp Data:</div>
        {expDataList.map((expEntry) => (
          <div key={expEntry.id}>
            <div>Position: {expEntry.position}</div>
            <div>Company: {expEntry.company}</div>
            <div>City: {expEntry.city}</div>
            <div>Country: {expEntry.country}</div>
            <div>Start Date: {expEntry.startDate}</div>
            <div>End Date: {expEntry.endDate}</div>
            <div>Description: {expEntry.description}</div>
          </div>
        ))}

        <div>Received Skills Data:</div>
        <ul>
          {skillsDataList.map((skillEntry) => (
            <li key={skillEntry.id}>{skillEntry.skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}