import React, { useState } from 'react';
import ToggleButtonBar from './../components/ToggleButtonBar';
import EigenheimComponent from './../components/EigenheimComponent';
import EigentümerComponent from './../components/EigentümerComponent'
import GewerblichComponent from './../components/GewerblichComponent';
import { useSidebar } from './../components/ui/SidebarContext';
import MieterComponent from 'components/MieterComponent';
import GoldenBox from 'components/GoldenBox';
import PächterComponent from 'components/PächterComponent';
import WederNochComponent from 'components/WedernochComponent';
import MehrfamilienComponent from 'components/MehrfamilienComponent';
import DachComponent from 'components/DachComponent';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [componentList, setComponentList] = useState<Array<string | null>>(new Array(10).fill(null));
  const { insertSidebarItem } = useSidebar();

  const handleSetList = (posIndex: number, option: string): void => {
    // Update the componentList: set the selected option at posIndex and nullify subsequent entries
    const updatedList = componentList.map((item, index) =>
      index === posIndex ? option : (index > posIndex ? null : item)
    );
    setComponentList(updatedList);

    // Update the sidebar item
    insertSidebarItem({ name: option, path: `#component-${posIndex}` }, posIndex);
  };

  const handleInitial= (posIndex: number, option: string): void => {
    if (option === 'Hintergrund und Finanzierung'){
      router.push("Information")
    }
    if (option === 'DIY Tutorials'){
      router.push("ECInterface")
    }
    if (option === 'Energy Communities'){
      router.push("ECInterface")
    }
  };

  const renderComponent = (componentName: string | null, posIndex: number) => {
    switch (componentName) {
      case 'Mieter':
        return <MieterComponent setList={handleSetList} componentList={componentList} posIndex={posIndex} />;
      case 'Pächter':
        return <PächterComponent setList={handleSetList} componentList={componentList} posIndex={posIndex} />;
      case 'Eigentümer':
        return <EigentümerComponent setList={handleSetList} componentList={componentList} posIndex={posIndex} />;
      case 'Eigenheim':
        return <EigenheimComponent setList={handleSetList} componentList={componentList} posIndex={posIndex} />;
      case 'Gewerbliche':
        return <GewerblichComponent setList={handleSetList} componentList={componentList} posIndex={posIndex} />;
      case 'Weder vermietet noch verpachtet':
        return <WederNochComponent setList={handleSetList} componentList={componentList} posIndex={posIndex} />;
      case 'Mehrfamilienhaus':
          return <MehrfamilienComponent setList={handleSetList} componentList={componentList} posIndex={posIndex} />;
      case 'Dach':
          return <DachComponent setList={handleSetList} componentList={componentList} posIndex={posIndex} />;
      default:
        return null;
    }
  };
  console.log(componentList)
  return (
    <div className='base_page flex flex-col justify-center items-center'>
      <p className='textBox' id={`component-0`}>
      Willkommen bei SolarSimplify – Ihrer komfortablen Lösung für die Integration von Solarenergie in Ihren Alltag! Wir verstehen, dass der Übergang zu sauberer Energie manchmal eine Herausforderung darstellen kann. Genau aus diesem Grund haben wir SolarSimplify entwickelt, um Ihnen den Weg zu umweltfreundlicher und kosteneffizienter Energiegewinnung so einfach wie möglich zu gestalten.<br />SolarSimplify ermöglicht es Ihnen, in die Welt der Solarenergie einzusteigen, ohne komplizierte Prozesse oder technische Hürden überwinden zu müssen. Unser Ziel ist es, die Vorteile der Sonnenenergie für jeden zugänglich zu machen, sei es für Ihren Wohnraum, Ihr Unternehmen oder Ihr tägliches Leben. SolarSimplify betont die Bedeutung von Bildung durch klare und einfach zugängliche Informationen sowie das Einbeziehen aller Mitglieder einer Gemeinschaft für eine grünere Zukunft. <br/><br/>
      Hintergrund und Finanzierung: Dieser Abschnitt bietet fundierte, lokal relevante Informationen, die auf Ihren Eingaben basieren. Sie erhalten rechtlich geprüfte Erklärungen zu Solarenergiegesetzen in Deutschland und München, sowie einen Überblick über technische und finanzielle Optionen. <br/>
      Energy Communities: Hier finden Sie ein Portal für die Gründung oder den Beitritt zu sogenannten Energy Communities. Dies ermöglicht Gruppen von Bürgern, Unternehmen und lokalen Behörden, gemeinsam in erneuerbare Energiequellen zu investieren, wobei die Einnahmen entsprechend der Beteiligung aufgeteilt werden.
      </p>
      <GoldenBox text="Wie können wir Ihnen am besten weiterhelfen?"/>
      <ToggleButtonBar
        options={['Hintergrund und Finanzierung', 'Energy Communities']}
        setList={handleInitial}
        activeIndex={-1} 
        posIndex={-1}
      />
    </div>
  );
};

export default HomePage;
