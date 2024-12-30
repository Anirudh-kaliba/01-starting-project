import React from 'react';
import CoreConcept from './CoreConcept.jsx';

const CoreConcepts = ({ concepts }) => {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {concepts.map((conceptItem, index) => (
          <CoreConcept key={index} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
