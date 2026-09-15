export function DataDefectsPage() {
  return (
    <div>
      <header className="page-header">
        <h1>Data defects</h1>
        <p>Metering defects raised from wrong explanations — work items for billing operations.</p>
      </header>
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Defect</th>
              <th>Account</th>
              <th>Source session</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">def_01</td>
              <td className="mono">acc_1001</td>
              <td className="mono">ctc_03</td>
              <td>open</td>
            </tr>
          </tbody>
        </table>
        <div className="btn-row">
          <button className="btn btn-primary" type="button">
            Raise defect
          </button>
        </div>
      </div>
    </div>
  );
}
