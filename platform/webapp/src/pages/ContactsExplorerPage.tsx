import { Link } from 'react-router-dom';

export function ContactsExplorerPage() {
  return (
    <div>
      <header className="page-header">
        <h1>Contacts explorer</h1>
        <p>Filter sessions by outcome, channel, and complaint state for ops and compliance review.</p>
      </header>
      <div className="panel">
        <div className="filter-bar">
          <select defaultValue="">
            <option value="">Outcome</option>
            <option>resolved</option>
            <option>escalated</option>
            <option>abandoned</option>
            <option>blocked_by_policy</option>
          </select>
          <select defaultValue="">
            <option value="">Channel</option>
            <option>voice</option>
            <option>chat</option>
            <option>app</option>
            <option>email</option>
          </select>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Session</th>
              <th>Outcome</th>
              <th>Channel</th>
              <th>Release</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">ctc_01</td>
              <td>escalated</td>
              <td>chat</td>
              <td className="mono">rel_0.1.0</td>
              <td>
                <Link className="btn" to="/advisor/session/ctc_01">
                  Open
                </Link>
              </td>
            </tr>
            <tr>
              <td className="mono">ctc_02</td>
              <td>resolved</td>
              <td>voice</td>
              <td className="mono">rel_0.1.0</td>
              <td>
                <Link className="btn" to="/advisor/session/ctc_02">
                  Open
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
