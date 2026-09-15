export function ResolutionsAdvicePage() {
  return (
    <div>
      <header className="page-header">
        <h1>Resolutions and advice</h1>
        <p>Policy-bounded outcomes and energy-management recommendations with stated confidence.</p>
      </header>
      <div className="panel">
        <h2>Resolutions</h2>
        <p>Payment plan proposals and network referrals stay inside approved policy (BR-10).</p>
        <div className="btn-row">
          <button className="btn btn-primary" type="button">
            Propose payment plan
          </button>
          <button className="btn" type="button">
            Execute resolution
          </button>
        </div>
      </div>
      <div className="panel">
        <h2>Advice</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Recommendation</th>
              <th>Est. saving</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shift laundry off peak</td>
              <td className="driver-amount">€12 / mo</td>
              <td>0.72</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
