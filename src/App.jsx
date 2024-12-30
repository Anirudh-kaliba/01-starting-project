import { useState } from 'react';
import './index.css';
import { CORE_CONCEPTS } from './data.js';
import Header from './Components/Header.jsx';
import CoreConcepts from './Components/CoreConcepts.jsx';
import Examples from './Components/Examples.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton); 
  }

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts concepts={CORE_CONCEPTS} />
        <Examples 
          selectedTopic={selectedTopic} 
          onSelect={handleSelect} 
        />
      </main>
    </div>
  );
}

export default App;
