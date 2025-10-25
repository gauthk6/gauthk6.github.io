import React, { useEffect, useRef } from 'react';

const ResearchInterests = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const interests = [
    {
      title: 'Autonomous Research Agents',
      description: 'Developing AI systems that can independently conduct research, explore hypotheses, and generate insights.',
    },
    {
      title: 'Search & Information Retrieval Systems',
      description: 'Building intelligent search agents and retrieval systems for efficient information discovery.',
    },
    {
      title: 'Vision-Language Models',
      description: 'Exploring how multimodal models understand and represent the world through vision and language.',
    },
    {
      title: 'Machine Learning for Code',
      description: 'Applying ML techniques to code translation, program synthesis, and software engineering tasks.',
    },
  ];

  return (
    <section id="research" className="content-section">
      <div className="section-container scroll-fade-in" ref={sectionRef}>
        <h2 className="section-title">Research Interests</h2>
        <div className="grid-2">
          {interests.map((interest, index) => (
            <div key={index} className="card">
              <h3 className="card-title" style={{ fontSize: '1.25rem' }}>
                {interest.title}
              </h3>
              <p className="card-description">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
