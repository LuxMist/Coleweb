import { contact, expertise, journey, navItems, opportunities, ventures } from '@/lib/site-content';

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top">Cole Rippe</a>
        <div className="navLinks">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="heroGrid">
          <div className="heroCopy reveal">
            <p className="kicker">Licensed Florida Sheet Metal Contractor · Founder · DJ · Builder</p>
            <h1>Cole Rippe</h1>
            <h2>Builder. Operator. Entrepreneur.</h2>
            <p className="lede">I build businesses, systems, and infrastructure across trades, technology, hospitality, real estate, and AI-powered operations.</p>
            <div className="actions">
              <a className="button primary" href="#ventures">View Ventures</a>
              <a className="button secondary" href="#contact">Work With Me</a>
            </div>
          </div>
          <div className="heroPanel reveal delay" aria-hidden="true">
            <div className="orb" />
            <div className="stat"><span>South Florida</span><strong>Home Base</strong></div>
            <div className="stat"><span>Trades × Tech</span><strong>Operating Edge</strong></div>
            <div className="stat"><span>Ventures</span><strong>Built for Revenue</strong></div>
          </div>
        </div>
      </section>

      <section className="section split" id="about">
        <p className="sectionLabel">About</p>
        <div>
          <h2>A hands-on founder building practical companies from the ground up.</h2>
          <p>Cole Rippe is a South Florida entrepreneur focused on building practical, revenue-producing businesses. His work spans construction, property maintenance, misting systems, AI operations, hospitality, music, and real estate. He combines hands-on trade experience with modern software and systems thinking to create scalable businesses from the ground up.</p>
        </div>
      </section>

      <section className="section" id="ventures">
        <div className="sectionHeader">
          <p className="sectionLabel">Venture Portfolio</p>
          <h2>Brands and platforms across service, infrastructure, hospitality, impact, and culture.</h2>
        </div>
        <div className="cards">
          {ventures.map((venture) => (
            <article className="card" key={venture.name}>
              <p>{venture.eyebrow}</p>
              <h3>{venture.name}</h3>
              <span>{venture.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="expertise">
        <div className="sectionHeader compact">
          <p className="sectionLabel">Expertise</p>
          <h2>Operator skill sets that connect the field, the back office, and the customer experience.</h2>
        </div>
        <div className="expertiseGrid">
          {expertise.map((group) => (
            <div className="expertiseCard" key={group.group}>
              <h3>{group.group}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="quote section" id="philosophy">
        <p className="sectionLabel">Philosophy</p>
        <blockquote>“I don’t just want to own businesses. I want to build systems that make them stronger, cleaner, smarter, and more scalable.”</blockquote>
      </section>

      <section className="section split">
        <p className="sectionLabel">Journey</p>
        <ol className="timeline">
          {journey.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="section workWithMe">
        <div>
          <p className="sectionLabel">Work With Me</p>
          <h2>Building something serious? Bring the concept, the asset, or the operational problem.</h2>
        </div>
        <div className="opportunities">
          {opportunities.map((item) => <span key={item}>{item}</span>)}
        </div>
        <a className="button primary" href="#contact">Let’s Build Something</a>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="sectionLabel">Contact</p>
          <h2>Start a conversation.</h2>
          <p>{contact.location} · <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <div className="socials">{contact.socials.map((social) => <a href="#" key={social}>{social}</a>)}</div>
        </div>
        <form className="contactForm">
          <label>Name<input name="name" placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
          <label>Project<textarea name="message" placeholder="Tell Cole what you want to build" /></label>
          <button className="button primary" type="submit">Send Inquiry</button>
        </form>
      </section>
    </main>
  );
}
