import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <div className="login-hero">
      <div className="login-card panel">
        <span className="brand-mark">Klarwatt</span>
        <h1>Answers the bill — inside the licence</h1>
        <p>
          Regulated contact-resolution console for EU energy retailers. Role, purpose, and
          vulnerability gates stay visible before any utterance leaves the system.
        </p>
        <div className="btn-row">
          <Link className="btn btn-primary" to="/advisor">
            Enter advisor desk
          </Link>
        </div>
      </div>
    </div>
  );
}
