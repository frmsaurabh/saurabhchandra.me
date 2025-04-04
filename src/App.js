import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Saurabh Chandra's Portfolio</h1>
        <p>Functional Consultant | Financial Risk Management | InsurTech</p>

        <section>
          <h2>About Me</h2>
          <p>
            I specialize in **general insurance, financial risk management, and tech-driven solutions**.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            <li><strong>InsurAI</strong> – AI-Powered Policy Decoder</li>
            <li><strong>MissionOCR</strong> – AI-Powered OCR Trainer</li>
            <li><strong>LinkedIn Bot</strong> – Automated Content & Engagement</li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Email: saurabh@example.com</p>
          <p>GitHub: <a href="https://github.com/frmsaurabh" target="_blank" rel="noopener noreferrer">github.com/frmsaurabh</a></p>
        </section>
      </header>
    </div>
  );
}

export default App;
