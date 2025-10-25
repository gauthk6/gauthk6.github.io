import React, { useEffect, useRef } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      title: 'AI Engineer Intern (Part-Time)',
      organization: 'Stealth AI Startup',
      period: 'Sep. 2025 – Present',
      description: 'Building search agents for intelligent information retrieval and discovery.',
      current: true,
    },
    {
      title: 'Data Science and ML Intern',
      organization: 'Legion Technologies',
      period: 'June 2024 – March 2025',
      description: 'Developed machine learning models and data pipelines for workforce optimization.',
      current: false,
    },
    {
      title: 'Research Assistant',
      organization: 'Halicioglu Data Science Institute, UC San Diego',
      period: 'June 2024 – Present',
      description: (
        <>
          Leading autonomous research agent development under Professor Zhiting Hu. <strong>Co-authored ACL Findings 2025 paper</strong> on evaluating internal world models in vision-language systems.
        </>
      ),
      current: true,
    },
    {
      title: 'Machine Learning Research Intern',
      organization: 'University of Waterloo',
      period: 'July 2021 – Sep. 2022',
      description: (
        <>
          Worked under Professor Vijay Ganesh (now at Georgia Tech) on neural code translation with reinforcement learning. <strong>Co-authored ECAI-2024 paper</strong> on CoTran, an LLM-based code translator.
        </>
      ),
      current: false,
    },
  ];

  return (
    <section id="experience" className="content-section">
      <div className="section-container scroll-fade-in" ref={sectionRef}>
        <h2 className="section-title">Professional Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="card" style={{ position: 'relative' }}>
              {exp.current && (
                <span className="badge" style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-subtle)',
                    animation: 'pulse 2s ease infinite'
                  }}></span>
                  Now
                </span>
              )}
              <div>
                <h3 className="card-title">
                  {exp.title}
                </h3>
                <p className="card-subtitle">
                  {exp.organization}
                </p>
                <p className="card-meta">{exp.period}</p>
                <div className="card-description">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
