import React from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';

const Examples = ({ selectedTopic, onSelect }) => {
  return (
    <section id="examples">
      <h2>Example</h2>
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => onSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => onSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => onSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => onSelect('state')}>State</TabButton>
      </menu>
      
      {!selectedTopic ? (
        <p>Please Click The Topic</p>
      ) : (
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      )}
    </section>
  );
};

export default Examples;
