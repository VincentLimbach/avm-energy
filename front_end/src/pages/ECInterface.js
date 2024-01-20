import React, { useState } from 'react';
import ToggleButtonBar from './../components/ToggleButtonBar'; // Import ToggleButtonBar
import ECTable from "./../components/ECTable"
import GoldenBox from "./../components/GoldenBox"


const ECInterface = () => {
  const [userStatus, setUserStatus] = useState('unknown'); // 'guest' or 'loggedIn'
  const [selectedOption, setSelectedOption] = useState('unknown');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const [size, setSize] = useState('');
  const [type, setType] = useState('');
  const [cost, setCost] = useState('');

  const handleSetUserStatus = (index, option) => {
    setUserStatus(option);
  };

  const handleSetOption = (index, option) => {
    setSelectedOption(option);
    setShowCreateForm(false);
  };

  const createNewOffer = () => {
    setShowCreateForm(!showCreateForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:3001/create_offer', { // Replace with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ size, type, cost }),
      });

      const data = await response.json();
      console.log(data);
      // Reset form or handle response
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  return (
    <div className='base_page flex flex-col justify-center items-center'>
      <p className='textBox' id={`component-0`}>Willkommen beim Abschnitt <strong>Energy Communities</strong> auf SolarSimplify – Ihrer komfortablen Lösung für die Integration von Solarenergie in Ihren Alltag! Hier können sie sich mit anderen Menschen zu Energy Communities zusammenschließen, um gemeinsam einen wichtigen Beitrag zur Energiewende beizutragen.</p>
      <GoldenBox text="Haben Sie schon einen Account oder wollen Sie einen Account erstellen?" />
      {(
        <ToggleButtonBar
          options={['Anmeldung', 'Gastzugang']}
          setList={handleSetUserStatus}
          activeIndex={userStatus === 'unknown' ? -1 : (userStatus === 'Anmeldung' ? 0 : 1)}
          posIndex={0}
        />
      )}

      {userStatus != 'unknown' && (
        <ToggleButtonBar
          options={['Flächenbesitzer', 'Investor']}
          setList={handleSetOption}
          activeIndex={userStatus === 'unknown' ? -1 : (selectedOption === 'Flächenbesitzer' ? 0 : 1)}
          posIndex={1}
        />
      )}

{selectedOption !== 'unknown' && (
  <>
    {!showCreateForm ? (
      <div style={{ width: '30%', marginBottom: '1%'}}>
        <GoldenBox text="Create New Offer" onClick={createNewOffer} />
      </div>
    ) : (
      <div style={{ width: '100%', marginBottom: '1%'}}>
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Flächengröße:</label>
              <input type="text" value={size} onChange={(e) => setSize(e.target.value)} className="form-input" />
            </div>
            <div className="form-group">
              <label>Flächenart:</label>
              <input type="text" value={type} onChange={(e) => setType(e.target.value)} className="form-input" />
            </div>
            <div className="form-group">
              <label>Erwartete Kosten:</label>
              <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} className="form-input" />
            </div>
            <button type="submit" className="submit-button">Angebot erstellen</button>
          </form>
        </div>
      </div>
    )}
    <ECTable />
  </>
)}

    </div>
  );
};

export default ECInterface;
