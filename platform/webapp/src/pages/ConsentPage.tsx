export function ConsentPage() {
  return (
    <div>
      <header className="page-header">
        <h1>Purpose and consent</h1>
        <p>Lawful purposes, metering granularity ceilings, capture and withdrawal.</p>
      </header>
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Ceiling</th>
              <th>Consent required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">billing_explanation</td>
              <td>daily</td>
              <td>No</td>
            </tr>
            <tr>
              <td className="mono">energy_advice</td>
              <td>half_hourly</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <div className="btn-row">
          <button className="btn btn-primary" type="button">
            Capture consent
          </button>
          <button className="btn" type="button">
            Withdraw consent
          </button>
        </div>
      </div>
    </div>
  );
}
