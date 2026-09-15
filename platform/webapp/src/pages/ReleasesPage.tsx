export function ReleasesPage() {
  return (
    <div>
      <header className="page-header">
        <h1>Release control</h1>
        <p>Versioned capability releases with named approvers; interactions pin to the serving version.</p>
      </header>
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Release</th>
              <th>Approver</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">rel_0.1.0</td>
              <td>compliance.lead</td>
              <td>approved</td>
            </tr>
            <tr>
              <td className="mono">rel_0.2.0</td>
              <td>—</td>
              <td>pending</td>
            </tr>
          </tbody>
        </table>
        <div className="btn-row">
          <button className="btn btn-primary" type="button">
            Approve release
          </button>
        </div>
      </div>
    </div>
  );
}
