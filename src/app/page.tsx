const projects = [
  {
    number: "01",
    name: "Kizuna Rail",
    category: "FULL-STACK APPLICATION",
    description:
      "A team-built railway booking application with trip browsing and booking workflows. My contributions have included ticket-class pagination, search and filtering, and booking-flow improvements.",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    url: "https://github.com/marthasibiya25/kizuna-rail-new-team-project",
  },
  {
    number: "02",
    name: "UniMarket",
    category: "COLLABORATIVE WEB APPLICATION",
    description:
      "A collaborative marketplace application for university communities. My contributions have included work on the listings API and data-access layer.",
    technologies: ["TypeScript", "Next.js", "APIs"],
    url: "https://github.com/marthasibiya25/unimarket",
  },
  {
    number: "03",
    name: "Sacrament Meeting Planner",
    category: "WEB APPLICATION",
    description:
      "A Next.js and TypeScript application developed as part of my software development coursework, with a focus on structured application development.",
    technologies: ["Next.js", "TypeScript", "React"],
    url: "https://github.com/marthasibiya25/sacrament-meetings",
  },
  {
    number: "04",
    name: "Books Web Service",
    category: "BACKEND DEVELOPMENT",
    description:
      "A JavaScript backend project exploring web-service development and API-driven application functionality.",
    technologies: ["JavaScript", "Web Services"],
    url: "https://github.com/marthasibiya25/books-web-service",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "PostgreSQL",
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Git & GitHub",
  "REST APIs",
  "C#",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href="#home">MS<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">Let&apos;s talk</a>
        </nav>
      </header>

      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO INTERNSHIPS, LEARNERSHIPS & JUNIOR ROLES
          </div>
          <p className="eyebrow">HELLO, I&apos;M MARTHA SIBIYA</p>
          <h1>Aspiring software<br /><span>developer</span>, ready<br />to contribute.</h1>
          <p className="hero-description">
            I&apos;m a Software Development student at BYU–Idaho,
            learning to turn ideas into useful web applications through
            code, creativity, and continuous growth.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work</a>
            <a className="button button-secondary" href="#about">About me</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/marthasibiya25" target="_blank" rel="noreferrer">GitHub</a>
            <span>/</span>
            <a href="mailto:marthasibiya25@gmail.com">Email</a>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="code-card-top">
              <div className="window-dots"><span /><span /><span /></div>
              <span className="code-filename">martha.ts</span>
            </div>
            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="code-indent">name: <span className="code-green">&quot;Martha&quot;</span>,</p>
              <p className="code-indent">role: <span className="code-green">&quot;Student&quot;</span>,</p>
              <p className="code-indent">learning: <span className="code-green">&quot;Always&quot;</span>,</p>
              <p className="code-indent">building: <span className="code-green">&quot;The future&quot;</span></p>
              <p>{"};"}</p>
              <p className="code-comment">{"// One step at a time."}</p>
            </div>
            <div className="code-card-footer"><span><span className="status-dot" /> Ready to grow</span><span>TS</span></div>
          </div>
          <div className="floating-chip chip-top">
            <span className="chip-icon">{"</>"}</span>
            <span><strong>Curious mind</strong><small>Always learning</small></span>
          </div>
          <div className="floating-chip chip-bottom">
            <span className="chip-icon">{"{}"}</span>
            <span><strong>Built with purpose</strong><small>Growing through code</small></span>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line" />SCROLL TO EXPLORE</a>
      </section>

      <section className="section container" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
          <h2>Becoming the developer<br /><span>I want to be.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              My journey into software development is built on curiosity,
              commitment, and a willingness to learn. As an online student
              at BYU–Idaho, I&apos;m developing my skills through practical
              projects and problem-solving.
            </p>
            <p>
              I enjoy working with other developers, investigating issues, and improving my code through feedback and testing. I&apos;m looking for an opportunity to contribute to a development team, strengthen my skills, and help build reliable, useful software.
            </p>
            <a className="text-link" href="#contact">Let&apos;s connect ?</a>
          </div>
          <div className="about-highlight">
            <span className="highlight-symbol">{"{}"}</span>
            <p className="highlight-label">MY APPROACH</p>
            <h3>Stay curious.<br />Keep building.<br /><span>Never stop growing.</span></h3>
            <p className="highlight-note">Every project is a chance to learn something new.</p>
          </div>
        </div>
      </section>

      <section className="projects-section section" id="projects">
        <div className="container">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>Projects that show<br /><span>my progress.</span></h2>
            </div>
            <a className="text-link" href="https://github.com/marthasibiya25?tab=repositories" target="_blank" rel="noreferrer">View all repositories</a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <a className="project-arrow" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>&rarr;</a>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View project on GitHub</a>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="section container" id="skills">
        <div className="section-heading">
          <p className="eyebrow">03 / MY TOOLKIT</p>
          <h2>Technologies I&apos;m<br /><span>learning and using.</span></h2>
          <p className="section-description">Technologies encountered through my software development studies and projects.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
              <span>{skill}</span>
              <span className="skill-spark">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">04 / WHAT&apos;S NEXT?</p>
          <h2>Let&apos;s build<br /><span>something meaningful.</span></h2>
          <p className="contact-description">
            I&apos;m actively seeking software development internships, learnerships, graduate programmes, and junior roles where I can contribute, learn from experienced developers, and grow professionally.
          </p>
          <a className="button button-primary contact-button" href="mailto:marthasibiya25@gmail.com?subject=Let%27s%20Connect">Contact me</a>
          <div className="contact-bottom">
            <a href="mailto:marthasibiya25@gmail.com">marthasibiya25@gmail.com</a>
            <a href="tel:+27658767672">+27 65 876 7672</a>
            <a href="https://github.com/marthasibiya25" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">MS<span>.</span></a>
          <p>Designed with purpose. Built while learning.</p>
          <p>© 2026 Martha Sibiya</p>
        </div>
      </footer>
    </main>
  );
}
