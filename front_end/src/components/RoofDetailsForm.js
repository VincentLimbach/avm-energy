import React, { useState } from 'react';

const RoofDetailsForm = () => {
  const [material, setMaterial] = useState('');
  const [shape, setShape] = useState('');
  const [shading, setShading] = useState('');
  const [area, setArea] = useState('');
  const [storageSystemInterested, setStorageSystemInterested] = useState('');
  const [KWRange, setKWRange] = useState('');
  const [netzanbieter, setNetzanbieter] = useState('');
  const [financingInfo, setFinancingInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming calculation logic is handled here
    setFinancingInfo(".")
  };

  return (
    <div className="bg-gray-100 p-6">
      <form className='textBox' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="material" className="block font-medium mb-2">Aus welchem Material besteht Ihr Dach?</label>
          <select
            id="material"
            name="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none"
          >
            <option value="dachziegel">Dachziegel- oder Steine</option>
            <option value="biberschwanz">Biberschwanz</option>
            <option value="schiefer">Schiefer</option>
            <option value="trapezblech">Trapezblech</option>
            <option value="sandwich">Sandwich Wabendach</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="shape" className="block font-medium mb-2">Welche Dachform hat das Gebäude?</label>
          <select
            id="shape"
            name="shape"
            value={shape}
            onChange={(e) => setShape(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none"
          >
            <option value="satteldach">Satteldach</option>
            <option value="walmdach">Walmdach</option>
            <option value="pultdach">Pultdach</option>
            <option value="flachdach">Flachdach</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="shading" className="block font-medium mb-2">Gibt es eine Verschattung auf Ihrem Dach?</label>
          <select
            id="shading"
            name="shading"
            value={shading}
            onChange={(e) => setShading(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none"
          >
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="area" className="block font-medium mb-2">Wie groß ist die Fläche bzw. die geplante Anlage?</label>
          <input
            type="text"
            id="area"
            name="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="______ m²"
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="storageSystemInterested" className="block font-medium mb-2">Wäre für Sie ein Speichersystem interessant?</label>
          <select
            id="storageSystemInterested"
            name="storageSystemInterested"
            value={storageSystemInterested}
            onChange={(e) => setStorageSystemInterested(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none"
          >
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="KWRange" className="block font-medium mb-2">kW Bereich</label>
          <select
            id="KWRange"
            name="KWRange"
            value={KWRange}
            onChange={(e) => setKWRange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none"
          >
            <option value="">Bitte wählen</option>
            <option value="3-5kW">3-5 kW</option>
            <option value="5-10kW">5-10 kW</option>
            <option value="10-15kW">10-15 kW</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="netzanbieter" className="block font-medium mb-2">Netzanbieter</label>
          <select
            id="netzanbieter"
            name="netzanbieter"
            value={netzanbieter}
            onChange={(e) => setNetzanbieter(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none"
          >
            <option value="">Bitte wählen</option>
            <option value="swmInfrastruktur">SWM Infrastruktur</option>
            <option value="vattenfallEuropa">Vattenfall Europa</option>
            <option value="suewagAg">Süwag AG</option>
          </select>

        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-tumBlue-100 text-white rounded-lg hover:bg-tumBlue-200 focus:outline-none"
          >
            Absenden
          </button>
        </div>
      </form>

      {financingInfo && (
  <div className="textBox">
    <p>
      Basierend auf unserer Datenbank, würden wir die Gesamtkosten für die Installation der Solaranlagen auf 33.000 Euro netto einschätzen. Dieses Ergebnis basiert auf ähnlichen Angeboten von:
      <br/>
      <a href="https://sonnenmacher.de/">sonnenmacher.de</a>,
      <br/>
      <a href="https://www.isarphotovoltaik.de/">isarphotovoltaik.de</a>,
      <br/>
      <a href="https://www.schletter-group.com/">schletter-group.com</a>.
    </p>
    <p>
      Zur Deckung dieser Kosten stehen verschiedene Finanzierungsoptionen zur Verfügung. Diese Optionen umfassen:
    </p>
    <ul>
      <li>
        <strong>Kauf:</strong> Vollständige Bezahlung der Anlagekosten in einer Summe. Diese Option erfordert sofortige Liquidität, aber es entstehen keine Zinsen oder zusätzliche Finanzierungskosten.
      </li>
      <li>
        <strong>Finanzierung:</strong> Inanspruchnahme eines Kredits zur Deckung der Kosten, wobei der Betrag über einen festgelegten Zeitraum zurückgezahlt wird. Diese Option führt zu zusätzlichen Kosten in Form von Zinsen.
      </li>
      <li>
        <strong>Teilfinanzierung:</strong> Eine Kombination aus teilweiser sofortiger Bezahlung und Finanzierung des Restbetrags. Diese Methode reduziert die erforderliche sofortige Liquidität und die Gesamtfinanzierungskosten im Vergleich zur vollständigen Finanzierung.
      </li>
      <li>
        <strong>Mieten:</strong> Anstatt die Anlage zu kaufen, wird sie gemietet. Diese Option vermeidet hohe Anfangsinvestitionen und kann Wartung und Service beinhalten, führt aber zu regelmäßigen Mietzahlungen über einen vereinbarten Zeitraum.
      </li>
      <li>
        <strong>Energy Community (Energiegemeinschaft):</strong> Eine Energiegemeinschaft ist eine Gruppe von Personen oder Organisationen, die sich zusammenschließen, um gemeinsam Energieerzeugungsanlagen, wie Solaranlagen, zu finanzieren und zu errichten.
      </li>
    </ul>
  </div>
)}

    </div>
  );
};

export default RoofDetailsForm;
