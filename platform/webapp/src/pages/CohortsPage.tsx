import { JointMetricTrio } from '../components/JointMetricTrio';

export function CohortsPage() {
  return (
    <div>
      <header className="page-header">
        <h1>Cohort analytics</h1>
        <p>Scale-or-stop with comparison group, weather/price adjustment, and decision date (BR-8).</p>
      </header>
      <JointMetricTrio
        costPerResolvedContact="€4.80"
        firstContactResolution="71%"
        complaintRate="2.1%"
      />
      <div className="panel" style={{ marginTop: 16 }}>
        <h2>coh_winter25</h2>
        <p>
          Comparison group: control_winter25 · Decision date:{' '}
          <span className="mono">2026-03-31</span> · Weather/price adjusted
        </p>
        <div className="btn-row">
          <button className="btn btn-primary" type="button">
            Scale
          </button>
          <button className="btn" type="button">
            Stop (unpenalised)
          </button>
        </div>
      </div>
    </div>
  );
}
