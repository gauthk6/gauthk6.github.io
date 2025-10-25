import React, { useEffect, useRef } from 'react';

const About = () => {
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

  return (
    <section id="about" className="content-section">
      <div className="section-container scroll-fade-in" ref={sectionRef}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <img
                src="/profile_pic.jpg"
                alt="Gautham Kishore"
                className="profile-picture"
                loading="eager"
              />
              <a
                href="/GauthamKishore.pdf"
                download
                className="btn-ghost"
                style={{ width: '200px', textDecoration: 'none' }}
                aria-label="Download CV as PDF"
              >
                <svg
                  style={{ width: '20px', height: '20px', marginRight: '8px' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h2 className="section-title">About</h2>
              <div className="prose">
                <p>
                  I'm a fourth-year undergraduate at{' '}
                  <a href="https://ucsd.edu/" target="_blank" rel="noopener noreferrer" className="link-underline">
                    UC San Diego
                  </a>{' '}
                  studying Mathematics and Computer Science, with a focus on machine learning and AI systems.
                </p>
                <p>
                  I'm currently leading a project on <strong>Deep Research Agents</strong> under the guidance of Professor{' '}
                  <a href="https://zhiting.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="link-underline">
                    Zhiting Hu
                  </a>{' '}
                  at the{' '}
                  <a href="https://datascience.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="link-underline">
                    Halıcıoğlu Data Science Institute
                  </a>
                  , where I previously <strong>co-authored a paper accepted to ACL 2025</strong> on whether vision-language models understand physical dynamics. Previously, I helped develop reinforcement learning systems for neural code translation at the University of Waterloo under Professor{' '}
                  <a href="https://vganesh1.github.io/" target="_blank" rel="noopener noreferrer" className="link-underline">
                    Vijay Ganesh
                  </a>{' '}
                  (now at Georgia Tech), resulting in an <strong>ECAI 2024 publication</strong>.
                </p>
                <p>
                  In industry, I work as an AI Engineer Intern at a stealth startup building search agents, and previously interned at{' '}
                  <a href="https://legion.co/" target="_blank" rel="noopener noreferrer" className="link-underline">
                    Legion Technologies
                  </a>{' '}
                  developing ML pipelines for demand forecasting.
                </p>
                <p>
                  I'm applying to graduate programs to pursue research in autonomous AI systems that can learn, reason, and solve complex problems.
                </p>
                <p>
                  Outside of research, I'm a passionate music enthusiast with 100k+ minutes streamed per year (
                  <a href="https://open.spotify.com/user/gs0neqlxibzott12hn90ax1mm?si=0a320d232a5c4164" target="_blank" rel="noopener noreferrer" className="link-underline">
                    check out my Spotify
                  </a>
                  ), and an active tennis and basketball player. As a Bay Area native, I'm a loyal Warriors and 49ers fan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
