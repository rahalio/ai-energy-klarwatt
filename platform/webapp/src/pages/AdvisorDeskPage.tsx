import { Link } from 'react-router-dom';
import { ComplaintClock } from '../components/ComplaintClock';

const QUEUE = [
  {
    id: 'ctc_01',
    channel: 'chat',
    wait: '2m',
    reason: 'arrears signal',
    vulnerability: true,
    package: 0.92,
    complaint: true,
  },
  {
    id: 'ctc_02',
    channel: 'voice',
    wait: '6m',
    reason: 'bill-shock explanation',
    vulnerability: false,
    package: 1,
    complaint: false,
  },
  {
    id: 'ctc_03',
    channel: 'app',
    wait: '1m',
    reason: 'estimated-read dispute',
    vulnerability: false,
    package: 0.78,
    complaint: false,
  },
];

export function AdvisorDeskPage() {
  return (
    <div>
      <header className="page-header">
        <h1>Advisor desk</h1>
        <p>Live and escalated contacts with gate reason and package completeness before accept.</p>
      </header>
      <ComplaintClock deadlineLabel="case cmp_01 due in 4h" />
      <div className="panel">
        <div className="filter-bar">
          <select defaultValue="all">
            <option value="all">All escalations</option>
            <option value="vuln">Vulnerability only</option>
            <option value="complaint">Complaint clock running</option>
          </select>
          <button className="btn btn-primary" type="button">
            Accept next
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Session</th>
              <th>Channel</th>
              <th>Wait</th>
              <th>Reason</th>
              <th>Vulnerability</th>
              <th>Package</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {QUEUE.map((row) => (
              <tr key={row.id}>
                <td className="mono">{row.id}</td>
                <td>{row.channel}</td>
                <td>{row.wait}</td>
                <td>{row.reason}</td>
                <td>{row.vulnerability ? 'Flagged' : '—'}</td>
                <td className="mono">{Math.round(row.package * 100)}%</td>
                <td>
                  <Link className="btn" to={`/advisor/session/${row.id}`}>
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
