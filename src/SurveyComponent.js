import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SurveyComponent = () => {
  const [formData, setFormData] = useState({
    ageGroup: '',
    gender: '',
    isRegisteredVoter: '',
    votingFrequency: '',
    importantElections: '',
    votingIssues: [],
    votingFactors: [],
    informationSources: [],
    changedPreference: '',
    voterTurnoutMeasures: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // Handle checkboxes separately as they have multiple values
      const updatedValues = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: updatedValues,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    let data = {
      ageGroup: formData.ageGroup,
    gender:formData.gender,
    isRegisteredVoter: formData.isRegisteredVoter,
    votingFrequency: formData.votingFrequency,
    importantElections:formData.importantElections, 
    votingIssues: formData.votingIssues,
    votingFactors:formData.votingFactors,
    informationSources: formData.informationSources,
    changedPreference: formData.changedPreference,
    voterTurnoutMeasures: formData.voterTurnoutMeasures
    }
    e.preventDefault();
    console.log(formData);
    axios.post('http://localhost:8080/survays/create', data).then((res)=> {
      console.log(res)
      window.location.href = '/allsurvays'
    }).catch((err)=> {
      console.log(err)
    })
    // You can add your submission logic here
  };

  return (
    <div className="container mt-4">
      <h1>Survey: Voting Habits</h1>
      <form onSubmit={handleSubmit}>
        {/* Age Group */}
        <div className="form-group">
          <label>1.Which age group do you belong to?</label>
          <select
            className="form-control"
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="18-25 years">18-25 years</option>
            <option value="26-35 years">26-35 years</option>
            <option value="36-45 years">36-45 years</option>
            <option value="46-55 years">46-55 years</option>
            <option value="56+ years">56+ years</option>
          </select>
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>2.What is your gender?</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Male"
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Female"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Non-binary/Third gender"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Non-binary/Third gender</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Prefer not to say"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Prefer not to say</label>
            </div>
          </div>
        </div>

        {/* Are you a registered voter */}
        <div className="form-group">
          <label>3.Are you a registered voter in your country?</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="isRegisteredVoter"
                value="Yes"
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="isRegisteredVoter"
                value="No"
                onChange={handleInputChange}
              />
              <label className="form-check-label">No</label>
            </div>
          </div>
        </div>

        {/* How frequently do you vote */}
        <div className="form-group">
          <label>4.How frequently do you vote in elections?</label>
          <select
            className="form-control"
            name="votingFrequency"
            value={formData.votingFrequency}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Always">Always</option>
            <option value="Frequently">Frequently</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </div>

        {/* Which type of elections do you find most important */}
        <div className="form-group">
          <label>5.Which type of elections do you find most important?</label>
          <div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="importantElections"
                value="National (e.g., Presidential)"
                onChange={handleInputChange}
              />
              <label className="form-check-label">National (e.g., Presidential)</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="importantElections"
                value="State/Provincial"
                onChange={handleInputChange}
              />
              <label className="form-check-label">State/Provincial</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="importantElections"
                value="Local/Municipal"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Local/Municipal</label>
            </div>
          </div>
        </div>

        {/* What issues are most important */}
        <div className="form-group">
          <label>6.What issues are the most important to you when voting?</label>
          <div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingIssues"
                value="Economy and jobs"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Economy and jobs</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingIssues"
                value="Healthcare"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Healthcare</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingIssues"
                value="Education"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Education</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingIssues"
                value="Environment"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Environment</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingIssues"
                value="Social justice"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Social justice</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingIssues"
                value="National security"
                onChange={handleInputChange}
              />
              <label className="form-check-label">National security</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingIssues"
                value="Other"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Other (please specify)</label>
            </div>
          </div>
        </div>

        {/* What factors influence your voting decisions the most */}
        <div className="form-group">
          <label>7.What factors influence your voting decisions the most?</label>
          <div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingFactors"
                value="Political party affiliation"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Political party affiliation</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingFactors"
                value="Candidate's policies and platform"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Candidate's policies and platform</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingFactors"
                value="Candidate's character and leadership qualities"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Candidate's character and leadership qualities</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingFactors"
                value="Campaign advertisements and media coverage"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Campaign advertisements and media coverage</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingFactors"
                value="Recommendations from friends and family"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Recommendations from friends and family</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="votingFactors"
                value="Other"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Other (please specify)</label>
            </div>
          </div>
        </div>

        {/* How do you typically gather information about candidates and ballot measures */}
        <div className="form-group">
          <label>8.How do you typically gather information about candidates and ballot measures before voting?</label>
          <div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="informationSources"
                value="Television news"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Television news</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="informationSources"
                value="Online news websites"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Online news websites</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="informationSources"
                value="Social media"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Social media</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="informationSources"
                value="Candidate debates"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Candidate debates</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="informationSources"
                value="Official voter guides"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Official voter guides</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="informationSources"
                value="Other"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Other (please specify)</label>
            </div>
          </div>
        </div>

        {/* Have you ever changed your voting preference based on a candidate's performance during a debate or public event */}
        <div className="form-group">
          <label>9.Have you ever changed your voting preference based on a candidate's performance during a debate or public event?</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="changedPreference"
                value="Yes"
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="changedPreference"
                value="No"
                onChange={handleInputChange}
              />
              <label className="form-check-label">No</label>
            </div>
          </div>
        </div>

        {/* In your opinion, what measures could be taken to encourage higher voter turnout */}
        <div className="form-group">
          <label>10.In your opinion, what measures could be taken to encourage higher voter turnout?</label>
          <div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="voterTurnoutMeasures"
                value="Easier voter registration process"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Easier voter registration process</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="voterTurnoutMeasures"
                value="Voting by mail or online"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Voting by mail or online</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="voterTurnoutMeasures"
                value="Making Election Day a national holiday"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Making Election Day a national holiday</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="voterTurnoutMeasures"
                value="Increasing awareness through education campaigns"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Increasing awareness through education campaigns</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="voterTurnoutMeasures"
                value="Other"
                onChange={handleInputChange}
              />
              <label className="form-check-label">Other (please specify)</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SurveyComponent;
