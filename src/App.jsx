import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import GeneralInfoForm from './general'
import EducationForm from './education'
import ExperienceForm from './experience'
import SkillsForm from './skills'
import ContactForm from './contact'

export default function App() {
  const [generalData, setGeneralData] = useState({
    fullname: '',
    position: '',
    summary: '',
  });

  const [contactData, setContactData] = useState({
    address: '',
    phonenumber: '',
    email: '',
    site: '',
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

  const print = () => {
    window.print();
  };

  return (
    <div className='masterctn'>
      <div className="formctn">
        <div className='topheader'>
          <h1 className='name'>CV Builder</h1>
          <div className='headericons'>
            {/* <object className='pdficon' data='./pdf.png' type="image/png" onClick={downloadpdf}></object> */}
            <object className='printicon' data='./print.png' type="image/png" onClick={print} ></object>
          </div>
        </div>
        <div className='section'>
          <div className="heading">
            <div className='title'>
              <object className='titleicon' data='./user.png' type="image/png" ></object>
              General Info
          </div>
        </div>
          <GeneralInfoForm
            generalData={generalData}
            addGeneralData={setGeneralData}
          />
        </div>

        <div className='section'>
          <div className="heading">
            <div className='title'>
              <object className='titleicon' data='./edu.png' type="image/png" ></object>
              Education
            </div>
            <button className="addbtn" onClick={addNewEducation}>
              <object className='addicon' data='./add.png' type="image/png" aria-label="Plus Icon"></object> Education
            </button>
          </div>
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
        </div>

        <div className='section'>
          <div className="heading">
            <div className='title'>
              <object className='titleicon' data='./work.png' type="image/png" ></object>
              Experience
            </div>
            <button className="addbtn" onClick={addNewExperience}>
              <object className='addicon' data='./add.png' type="image/png" aria-label="Plus Icon"></object> Experience
            </button>
          </div>
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
        </div>

        <div className='section'>
          <div className="heading">
            <div className='title'>
              <object className='titleicon' data='./skills.png' type="image/png" ></object>
              Skills
            </div>
            <button className="addbtn" onClick={addNewSkill}>
              <object className='addicon' data='./add.png' type="image/png" aria-label="Plus Icon"></object> Skill
            </button>
          </div>
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
        </div>

        <div className='section'>
          <div className="heading">
            <div className='title'>
                <object className='titleicon' data='./contact.png' type="image/png" ></object>
                Contact
            </div>
          </div>
          <ContactForm
            contactData={contactData}
            addContactData={setContactData}
          />
        </div>
      </div>
      

      <div className="previewctn">
        <div className='printdata'>
          <div className='header'>
            <div className='fullname'>{generalData.fullname}</div>
            <div className='position'>{generalData.position}</div>
          </div>

          <div className='maincontent'>
            <div className='leftside'>
              <div className='summary'>
                <div className='sectionlabel'>SUMMARY</div>
                <div className='summaryblurb'>{generalData.summary}</div>
              </div>
            
              <div className='experience'>
                <div className='sectionlabel'>EXPERIENCE</div>
                {expDataList.map((expEntry) => (
                  <div className='jobblurb' key={expEntry.id}>
                    <div className='companyinfo'>
                      <div className='company'>{expEntry.company}</div>
                      <div className='joblocation'>{expEntry.city}, {expEntry.country} </div>
                      <div className='jobdates'>{expEntry.startDate} - {expEntry.endDate}</div>
                    </div>
                    <div className='jobinfo'>
                      <div className='jobposition'>{expEntry.position}</div>
                      <div className='description'>{expEntry.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='rightside'>
              <div className='education'>
                <div className='sectionlabel'>EDUCATION</div>
                {eduDataList.map((eduEntry) => (
                  <div key={eduEntry.id}>
                    <div className='eduinfo'>
                      <div className='schoolname'>{eduEntry.school}</div>
                      <div className='degree'>{eduEntry.degree}</div>
                      <div className='eduyears'>{eduEntry.startYear} - {eduEntry.endYear}</div>
                      <div className='edulocation'>{eduEntry.city}, {eduEntry.country}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='skillsection'>
                <div className='sectionlabel'>SKILLS</div>
                <ul>
                  {skillsDataList.map((skillEntry) => (
                    <li className='skill' key={skillEntry.id}>{skillEntry.skill}</li>
                  ))}
                </ul>
              </div>

      
              <div className='contactinfo'>
                <div className='sectionlabel'>CONTACT</div>
                  <div className='contactblurb'>
                    <object className='contacticon' data='./location.png' type="image/png" aria-label="Location Icon"></object>
                    <div className='address'>{contactData.address}</div>
                  </div>
                  <div className='contactblurb'>
                    <object className='contacticon' data='./phone.png' type="image/png" aria-label="Phone Icon"></object>
                    <div className='number'>{contactData.phonenumber}</div>
                  </div>
                  <div className='contactblurb'>
                    <object className='contacticon' data='./email.png' type="image/png" aria-label="Email Icon"></object>
                    <div className='email'>{contactData.email}</div>
                  </div>
                  <div className='contactblurb'>
                    <object className='contacticon' data='./www.png' type="image/png" aria-label="Website Icon"></object>
                    <div className='site'>{contactData.site}</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}