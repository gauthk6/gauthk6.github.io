import React from 'react';

const Experience = () => {
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
    <section id="experience" className="section-container">
      <h2 className="section-title">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="card relative">
            {exp.current && (
              <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                Current
              </span>
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {exp.title}
              </h3>
              <p className="text-primary-600 font-medium mb-2">
                {exp.organization}
              </p>
              <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
