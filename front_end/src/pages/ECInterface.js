import React, { useState } from 'react';
import ToggleButtonBar from './../components/ToggleButtonBar';
import ECTable from "./../components/ECTable"
import GoldenBox from "./../components/GoldenBox"


const ECInterface = () => {
  const [userStatus, setUserStatus] = useState('unknown');
  const [selectedOption, setSelectedOption] = useState('unknown');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const [size, setSize] = useState('');
  const [type, setType] = useState('');
  const [cost, setCost] = useState('');

  const [offers, setOffers] = useState([
    { id: 1, type: 'Schiefer Pultdach', size: '400 Quadratmeter', cost: '€5000' },
    { id: 2, type: 'Schiefer Pultdach', size: '80 Quadratmeter', cost: '€2000' },
    { id: 3, type: 'Flachdach', size: '150 Quadratmeter', cost: '€3000' },
    { id: 4, type: 'Giebeldach', size: '200 Quadratmeter', cost: '€4000' },
    { id: 5, type: 'Gründach', size: '250 Quadratmeter', cost: '€4500' },
    { id: 6, type: 'Mansarddach', size: '100 Quadratmeter', cost: '€2500' },
    { id: 7, type: 'Spitzdach', size: '350 Quadratmeter', cost: '€5500' }
  ]);

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
    event.preventDefault();
    const newOffer = {
      size: size + ' Quadratmeter',
      type,
      cost: '€' + cost
    };
    try {
      const response = await fetch('http://localhost:3001/create_offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOffer),
      });

      const data = await response.json();

      if (response.ok) {
      } else {
        console.error('Server error: ', data);
      }

    } catch (error) {
      console.error('Error submitting form: ', error);
    }
    const nextId = offers.length > 0 ? Math.max(...offers.map(o => o.id)) + 1 : 1;
    setOffers([...offers, { ...newOffer, id: nextId }]);
    setShowCreateForm(false);
    setSize('');
    setType('');
    setCost('');
  };

  return (
    <div className='base_page flex flex-col justify-center items-center'>
      <p className='textBox' id={`component-0`}>
        Willkommen beim Abschnitt <strong>Energy Communities</strong> auf SolarSimplify - Ihrer komfortablen Lösung für die Integration von Solarenergie in Ihren Alltag! Hier können sie sich mit anderen Menschen zu Energy Communities zusammenschließen, um gemeinsam einen wichtigen Beitrag zur Energiewende beizutragen.<br /><br />
        Hier bieten wir Ihnen ein Portal zur Gründung oder zum Beitritt von <strong>Energy Communities</strong>, auch bekannt als &quot;Erneuerbare Energiegemeinschaften&quot; (Renewable Energy Communities, RECs), an. Dieses fortschrittliche Konzept ermöglicht es Gruppen von Bürgern, Unternehmen und lokalen Behörden, gemeinsam in die Produktion und Verwaltung erneuerbarer Energiequellen zu investieren. Diese Gemeinschaften entstehen oft um ein zentrales Projekt – beispielsweise den Bau einer Photovoltaikanlage. Ein Mitglied stellt dabei häufig die benötigte Fläche zur Verfügung, während andere Mitglieder das erforderliche Kapital beisteuern. Durch solche gemeinsamen Anstrengungen entstehen reale Werte in unmittelbarer Nähe der beteiligten Mitglieder. Die daraus resultierenden Einnahmen – sei es durch die Einspeisung von Strom ins Netz oder durch die Reduktion der Energiekosten für angeschlossene Haushalte – werden dann entsprechend der Beteiligung unter den Mitgliedern aufgeteilt.<br />
      </p>
      <GoldenBox text="Haben Sie schon einen Account oder wollen Sie einen Account erstellen?" />
      {(
        <ToggleButtonBar
          options={['Anmeldung', 'Gastzugang']}
          setList={handleSetUserStatus}
          activeIndex={userStatus === 'unknown' ? -1 : (userStatus === 'Anmeldung' ? 0 : 1)}
          posIndex={0}
        />
      )}

      {userStatus !== 'unknown' && (
        userStatus === 'Anmeldung' ?
          <div className="prototype-message">
            <p>Der Prototyp hört hier auf. Weitere Inhalte finden Sie unter der Gastzugangoption.</p>
          </div>
          :
          <ToggleButtonBar
            options={['Flächenbesitzer', 'Investor']}
            setList={handleSetOption}
            activeIndex={selectedOption === 'unknown' ? -1 : (selectedOption === 'Flächenbesitzer' ? 0 : 1)}
            posIndex={1}
          />
      )}

      {selectedOption !== 'unknown' && (
        <>
          {selectedOption === "Flächenbesitzer" && (!showCreateForm ? (
            <div style={{ width: '30%', marginBottom: '1%' }}>
              <GoldenBox text="Create New Offer" onClick={createNewOffer} />
            </div>
          ) : (
            <div style={{ width: '100%', marginBottom: '1%' }}>
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
          ))}
          <ECTable offers={offers} />
        </>
      )}

    </div>
  );
};

export default ECInterface;
