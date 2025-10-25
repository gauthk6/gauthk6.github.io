import React, { useEffect, useRef } from 'react';

const Publications = () => {
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
    <section id="publications" className="content-section">
      <div className="section-container scroll-fade-in" ref={sectionRef}>
        <h2 className="section-title">Publications</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {publications.map((pub, index) => (
            <div
              key={index}
              className="card"
              style={{
                borderLeft: '6px solid var(--accent-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontSize: '1.7rem',
                  fontWeight: 700,
                  color: 'var(--gray-warm-900)',
                  marginBottom: '8px',
                  lineHeight: '1.4',
                  fontFamily: 'var(--font-display)'
                }}>
                  {pub.title}
                </h3>
                <p className="card-subtitle" style={{ marginBottom: '8px' }}>
                  {pub.venue}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--gray-warm-700)',
                  marginBottom: '12px',
                  lineHeight: '1.6'
                }}>
                  {pub.authors}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {pub.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: '0.875rem',
                        fontWeight: 700
                      }}
                    >
                      {link.label}
                      <svg
                        className="external-link-icon"
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
              <div style={{ flexShrink: 0 }}>
                <span className="badge" style={{
                  backgroundColor: 'var(--cream-dark)',
                  border: '1px solid var(--border-light)',
                  padding: '8px 16px'
                }}>
                  {pub.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
