import { useParams } from 'react-router-dom';
import { GateStrip } from '../components/GateStrip';
import { DriverBreakdown } from '../components/DriverBreakdown';
import { EscalationPackage } from '../components/EscalationPackage';
import { ComplaintClock } from '../components/ComplaintClock';

export function ContactSessionPage() {
  const { sessionId = 'ctc_demo' } = useParams();
  return (
    <div>
      <header className="page-header">
        <h1>Contact session</h1>
        <p>
          Continue without restart — conversation, data used, purpose, and next step in one
          composition. <span className="mono">{sessionId}</span> · release{' '}
          <span className="mono">rel_0.1.0</span>
        </p>
      </header>
      <GateStrip
        role="supplier"
        purpose="billing_explanation"
        granularity="daily"
        vulnerability="cleared"
        state="cleared"
      />
      <ComplaintClock deadlineLabel="none active" />
      <div className="panel">
        <EscalationPackage completeness={0.94} />
      </div>
      <div className="panel">
        <h2>Consumption explanation (shared view)</h2>
        <DriverBreakdown
          drivers={[
            { name: 'Weather / degree days', amount: '+€18.40', note: 'Colder than prior period' },
            { name: 'Tariff change', amount: '+€6.10' },
            { name: 'Consumption change', amount: '+€22.00' },
            {
              name: 'Estimated-read correction',
              amount: '−€4.20',
              note: 'Estimate disclosed; correction applied',
            },
            { name: 'Standing / network charges', amount: '+€3.50' },
          ]}
        />
        <div className="btn-row">
          <button className="btn btn-primary" type="button">
            Send reply
          </button>
          <button className="btn" type="button">
            Mark explanation wrong
          </button>
          <button className="btn" type="button">
            Open complaint
          </button>
          <button className="btn" type="button">
            Raise data defect
          </button>
        </div>
      </div>
    </div>
  );
}
