import { ComplaintClock } from '../components/ComplaintClock';

export function ComplaintsPage() {
  return (
    <div>
      <header className="page-header">
        <h1>Complaints and clocks</h1>
        <p>Dissatisfaction recognised in automation starts the same regulatory clock as advisor cases.</p>
      </header>
      <ComplaintClock deadlineLabel="cmp_01 due in 4h" />
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Session</th>
              <th>Clock started</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">cmp_01</td>
              <td className="mono">ctc_01</td>
              <td>in automation</td>
              <td>open</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
