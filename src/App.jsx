const links = [
  { label: 'Email', href: 'mailto:gauthk6@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/gauthk6' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gauthk6/' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=H1P1W_cAAAAJ&hl=en' },
  { label: 'CV', href: '/GauthamKishore.pdf' },
];

const works = [
  {
    title: 'Deep Research Agents',
    meta: 'Ongoing · UC San Diego (HDSI)',
    body: 'Building an autonomous deep research agent that maintains its own internal knowledge state.',
    image: '/visuals/deep-research-diagram.webp',
    alt: 'Hand drawn diagram of a deep research agent loop',
    featured: true,
  },
  {
    title: 'Do Vision-Language Models Have Internal World Models?',
    meta: 'ACL 2025',
    body: 'An atomic evaluation of physical understanding in vision-language systems.',
    image: '/visuals/research-papers.webp',
    alt: 'Research papers on a desk labeled ACL 2025 and CoTran',
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.findings-acl.1342/' },
      { label: 'Project', href: 'https://wm-abench.maitrix.org/' },
    ],
  },
  {
    title: 'CoTran',
    meta: 'ECAI 2024',
    body: 'Reinforcement learning for code translation with large language models.',
    image: '/visuals/cotran-code.webp',
    alt: 'CoTran code translation sheet with Python and C++ snippets',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2306.06755' }],
  },
  {
    title: 'Applied Research at Bliss Labs',
    meta: 'Ongoing',
    body: 'Search agents and retrieval systems for commerce.',
    image: '/visuals/hero-still-life.webp',
    alt: 'Desk with research notebook, papers, books, and records',
    links: [{ label: 'Bliss', href: 'https://findbliss.ai/' }],
  },
];

const credentials = [
  {
    year: '2025 — Present',
    title: 'Member of Technical Staff',
    place: 'Bliss Labs',
    detail: 'applied research, search agents, future of commerce',
  },
  {
    year: '2024 — Present',
    title: 'Research Assistant',
    place: 'HDSI, UC San Diego',
    detail: 'Deep Research Agents, World Model Evaluation (ACL 2025)',
  },
  {
    year: '2024 — 2025',
    title: 'Data Science and ML Intern',
    place: 'Legion Technologies',
    detail: 'forecasting pipelines',
  },
  {
    year: '2021 — 2022',
    title: 'Machine Learning Research Intern',
    place: 'University of Waterloo',
    detail: 'CoTran, ECAI 2024',
  },
  {
    year: '',
    title: 'UC San Diego',
    place: 'Mathematics & Computer Science',
    detail: '',
  },
];

const publications = [
  {
    year: '2025',
    title: 'Do Vision-Language Models Have Internal World Models? Towards an Atomic Evaluation',
    venue: 'ACL 2025',
    href: 'https://aclanthology.org/2025.findings-acl.1342/',
  },
  {
    year: '2024',
    title: 'CoTran: An LLM-based Code Translator using Reinforcement Learning',
    venue: 'ECAI 2024',
    href: 'https://arxiv.org/abs/2306.06755',
  },
];

const references = [
  {
    title: 'Music. Always on.',
    body: '100,000+ minutes a year on Spotify.',
    image: '/visuals/reference-music.webp',
    alt: 'Vinyl records and music objects on a warm wooden table',
  },
  {
    title: 'Film. Stories that stay.',
    body: 'Favorites: Pulp Fiction, Good Will Hunting, The Dark Knight.',
    image: '/visuals/reference-film.webp',
    alt: 'Film ticket stubs and monochrome cinema cards',
  },
  {
    title: 'Books. Returning to them over time.',
    body: 'Need to find my way back to reading like I used to.',
    image: '/visuals/reference-books.webp',
    alt: 'Stack of books on a warm wooden table',
  },
  {
    title: 'On court.',
    body: 'Tennis, basketball, lifting.',
    image: '/visuals/reference-court.webp',
    alt: 'Quiet tennis court in late afternoon light',
  },
];

function ArrowLink({ href, children, className = '' }) {
  return (
    <a className={`arrow-link ${className}`} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function SectionKicker({ number, label }) {
  return (
    <div className="section-kicker" aria-label={`Section ${number}`}>
      <span>{number}</span>
      {label && <span>{label}</span>}
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <a className="wordmark" href="#top" aria-label="Gautham Kishore home">gk</a>
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#notes">Notes</a>
          <a href="#about">About</a>
          <a href="#credentials">Credentials</a>
          <a href="#references">References</a>
        </nav>
        <a className="cv-link" href="/GauthamKishore.pdf">CV <span aria-hidden="true">→</span></a>
      </header>

      <main id="main">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero-copy reveal reveal-1">
            <SectionKicker number="01" />
            <h1 id="hero-title">Gautham<br />Kishore</h1>
            <p className="role">ML Researcher &amp; Engineer</p>
            <p className="place">UC San Diego — Mathematics &amp; Computer Science<br />San Diego, California</p>
            <div className="short-rule" />
            <p className="statement">I build systems that think, search, and create.</p>
            <div className="hero-links" aria-label="Contact links">
              {links.map((link) => (
                <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <figure className="hero-media reveal reveal-2">
            <img
              src="/visuals/hero-still-life.webp"
              alt="Warm desk still life with books, records, research notes, and papers"
              width="1586"
              height="992"
              decoding="async"
              fetchpriority="high"
            />
          </figure>
        </section>

        <div className="section-divider" aria-hidden="true"><span /></div>

        <section className="work-section section-frame" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <SectionKicker number="02" />
              <h2 id="work-title">Selected Work</h2>
            </div>
            <ArrowLink href="https://github.com/gauthk6">View all work</ArrowLink>
          </div>

          <div className="work-grid">
            <article className="work-card work-card-featured">
              <img src={works[0].image} alt={works[0].alt} width="1448" height="1086" loading="lazy" decoding="async" />
              <div className="work-copy">
                <h3>{works[0].title}</h3>
                <p>{works[0].body}</p>
                <p className="meta">{works[0].meta}</p>
                <ArrowLink href="#credentials">Details</ArrowLink>
              </div>
            </article>

            <div className="work-stack">
              {works.slice(1).map((work) => (
                <article className="work-card compact-work" key={work.title}>
                  <img src={work.image} alt={work.alt} width="1448" height="1086" loading="lazy" decoding="async" />
                  <div className="work-copy">
                    <h3>{work.title}</h3>
                    <p className="meta strong-meta">{work.meta}</p>
                    <p>{work.body}</p>
                    <div className="inline-links">
                      {(work.links || [{ label: 'Details', href: '#credentials' }]).map((link) => (
                        <ArrowLink key={link.label} href={link.href}>{link.label}</ArrowLink>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-notes section-frame" aria-label="About and notes">
          <article className="about-panel" id="about">
            <SectionKicker number="03" />
            <h2>About</h2>
            <div className="about-content">
              <div className="about-text">
                <p>I’m a fourth-year undergraduate at UC San Diego studying Mathematics and Computer Science.</p>
                <p>My work sits between research and engineering, with a focus on agents, retrieval, multimodal systems, and code.</p>
                <p>Recently, I’ve been building autonomous research agents that maintain internal knowledge and conduct multi-step investigation.</p>
                <p>Outside of work, I spend time around film, music, and sport — things that shape how I think and build.</p>
              </div>
              <img src="/visuals/shelf-archive.webp" alt="Personal shelf with books, records, film tickets, and sports objects" width="1672" height="941" loading="lazy" decoding="async" />
            </div>
          </article>

          <aside className="notes-panel" id="notes">
            <div className="notes-head">
              <div>
                <SectionKicker number="04" />
                <h2>Notes</h2>
              </div>
            </div>
            <article className="notes-coming-soon">
              <img src="/visuals/notes-desk.webp" alt="Open notebook with research notes on a desk" width="1448" height="1086" loading="lazy" decoding="async" />
              <div>
                <p className="eyebrow">Coming soon</p>
                <h3>Writing will live here once it earns the space.</h3>
                <p>For now, I’m keeping this as a place for future notes on research agents, search, systems, and taste.</p>
              </div>
            </article>
          </aside>
        </section>

        <section className="credentials section-frame" id="credentials" aria-labelledby="credentials-title">
          <div className="credentials-head">
            <SectionKicker number="05" />
            <h2 id="credentials-title">Credentials</h2>
          </div>
          <div className="credentials-grid">
            <div className="timeline-block">
              <p className="eyebrow">Experience</p>
              <div className="timeline">
                {credentials.map((item) => (
                  <article className="timeline-item" key={`${item.year}-${item.title}`}>
                    <p className="timeline-year">{item.year}</p>
                    <div className="timeline-dot" aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.place}</p>
                      {item.detail && <em>{item.detail}</em>}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="publication-block">
              <p className="eyebrow">Publications</p>
              {publications.map((publication) => (
                <article className="publication-item" key={publication.title}>
                  <p className="pub-year">{publication.year}</p>
                  <div>
                    <h3>{publication.title}</h3>
                    <p>{publication.venue}</p>
                    <ArrowLink href={publication.href}>Paper</ArrowLink>
                  </div>
                </article>
              ))}
            </div>

            <figure className="credentials-media">
              <img src="/visuals/credentials-still-life.webp" alt="Research notebook, clipped papers, and portrait card on a desk" width="1448" height="1086" loading="lazy" decoding="async" />
            </figure>
          </div>
        </section>

        <section className="references section-frame" id="references" aria-labelledby="references-title">
          <div className="references-head">
            <div>
              <SectionKicker number="06" />
              <h2 id="references-title">A few things I return to</h2>
            </div>
          </div>
          <div className="reference-grid">
            {references.map((reference) => (
              <article className="reference-card" key={reference.title}>
                <img src={reference.image} alt={reference.alt} width="1448" height="1086" loading="lazy" decoding="async" />
                <h3>{reference.title}</h3>
                <p>{reference.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer section-frame">
        <p>© 2026 Gautham Kishore</p>
        <nav aria-label="Footer links">
          {links.slice(0, 4).map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
              {link.label}
            </a>
          ))}
          <a href="#top">Top ↑</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
