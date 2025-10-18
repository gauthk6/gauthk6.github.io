import React from 'react';

const Publications = () => {
  const publications = [
    {
      title: 'Do Vision-Language Models Have Internal World Models? Towards an Atomic Evaluation',
      venue: 'ACL Findings 2025',
      authors: 'Qiyue Gao, Xinyu Pi, Kevin Liu, Junrong Chen, Ruolan Yang, Xinqi Huang, Xinyu Fang, Lu Sun, Gautham Kishore, et al.',
      links: [
        { label: 'Paper', url: 'https://aclanthology.org/2025.findings-acl.1342/' },
        { label: 'Project', url: 'https://wm-abench.maitrix.org/' },
      ],
      year: 2025,
    },
    {
      title: 'CoTran: An LLM-based Code Translator using Reinforcement Learning',
      venue: 'ECAI 2024',
      authors: 'Prithwish Jana, Piyush Jha, Haoyang Ju, Gautham Kishore, Aryan Mahajan, Vijay Ganesh',
      links: [
        { label: 'arXiv', url: 'https://arxiv.org/abs/2306.06755' },
      ],
      year: 2024,
    },
  ];

  return (
    <section id="publications" className="section-container bg-white">
      <h2 className="section-title">Publications</h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="card border-l-4 border-primary-500">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {pub.title}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-2">
                  {pub.venue}
                </p>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {pub.authors}
                </p>
                <div className="flex flex-wrap gap-3">
                  {pub.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      {link.label}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded">
                  {pub.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
