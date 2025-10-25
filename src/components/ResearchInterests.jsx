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
      icon: (
        <svg style={{ width: '34px', height: '34px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Search & Information Retrieval Systems',
      description: 'Building intelligent search agents and retrieval systems for efficient information discovery.',
      icon: (
        <svg style={{ width: '34px', height: '34px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: 'Vision-Language Models',
      description: 'Exploring how multimodal models understand and represent the world through vision and language.',
      icon: (
        <svg style={{ width: '34px', height: '34px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Machine Learning for Code',
      description: 'Applying ML techniques to code translation, program synthesis, and software engineering tasks.',
      icon: (
        <svg style={{ width: '34px', height: '34px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="research" className="content-section">
      <div className="section-container scroll-fade-in" ref={sectionRef}>
        <h2 className="section-title">Research Interests</h2>
        <div className="grid-2">
          {interests.map((interest, index) => (
            <div key={index} className="card" style={{ paddingTop: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-text)',
                  backgroundColor: 'var(--cream-dark)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '50%'
                }}>
                  {interest.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--gray-warm-900)',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-display)'
                  }}>
                    {interest.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: 'var(--gray-warm-700)'
                  }}>
                    {interest.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
