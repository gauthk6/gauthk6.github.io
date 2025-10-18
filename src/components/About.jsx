import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container fade-in">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <img
            src="/profile_pic.jpg"
            alt="Gautham Kishore"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
            loading="eager"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>
        <div className="flex-1">
          <h2 className="section-title">About</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              I'm a fourth-year undergraduate at{' '}
              <a href="https://ucsd.edu/" target="_blank" rel="noopener noreferrer" className="link-hover inline-flex items-center">
                UC San Diego
                <svg className="external-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>{' '}
              studying Mathematics and Computer Science, with a focus on machine learning and AI systems.
            </p>
            <p>
              I'm currently leading a project on Deep Research Agents under the guidance of Professor{' '}
              <a href="https://zhiting.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="link-hover inline-flex items-center">
                Zhiting Hu
                <svg className="external-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>{' '}
              at the{' '}
              <a href="https://datascience.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="link-hover inline-flex items-center">
                Halıcıoğlu Data Science Institute
                <svg className="external-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              , where I previously co-authored a paper accepted to ACL 2025 on whether vision-language models understand physical dynamics. Previously, I helped develop reinforcement learning systems for neural code translation at the University of Waterloo under Professor{' '}
              <a href="https://vganesh1.github.io/" target="_blank" rel="noopener noreferrer" className="link-hover inline-flex items-center">
                Vijay Ganesh
                <svg className="external-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>{' '}
              (now at Georgia Tech), resulting in an ECAI 2024 publication.
            </p>
            <p>
              In industry, I work as an AI Engineer Intern at a stealth startup building search agents, and previously interned at{' '}
              <a href="https://legion.co/" target="_blank" rel="noopener noreferrer" className="link-hover inline-flex items-center">
                Legion Technologies
                <svg className="external-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>{' '}
              developing ML pipelines for demand forecasting.
            </p>
            <p>
              I'm applying to graduate programs to pursue research in autonomous AI systems that can learn, reason, and solve complex problems.
            </p>
            <p>
              Outside of research, I'm a passionate music enthusiast with 100k+ minutes streamed per year (
              <a href="https://open.spotify.com/user/gs0neqlxibzott12hn90ax1mm?si=0a320d232a5c4164" target="_blank" rel="noopener noreferrer" className="link-hover inline-flex items-center">
                check out my Spotify
                <svg className="external-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              ), and an active tennis and basketball player. As a Bay Area native, I'm a loyal Warriors and 49ers fan.
            </p>
            <div className="mt-6">
              <a
                href="/GauthamKishore.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-sm"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
