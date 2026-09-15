export function ComplianceEvidencePage() {
  return (
    <div>
      <header className="page-header">
        <h1>Unbundling and evidence</h1>
        <p>Role-boundary checks and ombudsman-ready packs (conversation, data used, version).</p>
      </header>
      <div className="panel">
        <h2>Unbundling checks</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Check</th>
              <th>Role</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">ubc_01</td>
              <td>supplier</td>
              <td>pass</td>
            </tr>
            <tr>
              <td className="mono">ubc_02</td>
              <td>supplier</td>
              <td>blocked</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="panel">
        <h2>Evidence pack</h2>
        <p>Select session range or complaint id, generate, download, attest integrity.</p>
        <div className="btn-row">
          <button className="btn btn-primary" type="button">
            Generate pack
          </button>
          <button className="btn" type="button">
            Attest integrity
          </button>
        </div>
      </div>
    </div>
  );
}
