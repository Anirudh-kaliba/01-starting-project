import CoreConcept from './Cor';  // Import CoreConcept component

const CoreConcepts = ({ concepts }) => {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {concepts.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
