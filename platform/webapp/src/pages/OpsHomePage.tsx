import { Link } from 'react-router-dom';
import { JointMetricTrio } from '../components/JointMetricTrio';

export function OpsHomePage() {
  return (
    <div>
      <header className="page-header">
        <h1>Customer ops home</h1>
        <p>Are we resolving bill-shock contacts or deflecting them? Joint metrics stay inseparable.</p>
      </header>
      <JointMetricTrio
        costPerResolvedContact="€4.80"
        firstContactResolution="71%"
        complaintRate="2.1%"
      />
      <div className="panel" style={{ marginTop: 16 }}>
        <h2>Alerts</h2>
        <p>Cohort coh_winter25 decision due in 6 days · Release rel_0.2.0 pending approval</p>
        <div className="btn-row">
          <Link className="btn" to="/contacts">
            Open contacts
          </Link>
          <Link className="btn" to="/cohorts">
            Open cohort
          </Link>
        </div>
      </div>
    </div>
  );
}
