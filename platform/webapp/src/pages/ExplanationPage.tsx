import { GateStrip } from '../components/GateStrip';
import { DriverBreakdown } from '../components/DriverBreakdown';

export function ExplanationPage() {
  return (
    <div>
      <header className="page-header">
        <h1>Explanation shared view</h1>
        <p>Named, quantified bill drivers — the same commercial object for customer and advisor.</p>
      </header>
      <GateStrip
        role="supplier"
        purpose="billing_explanation"
        granularity="daily"
        vulnerability="cleared"
      />
      <div className="panel">
        <div className="banner banner-amber">Estimated read disclosed — correction −€4.20</div>
        <DriverBreakdown
          drivers={[
            { name: 'Weather', amount: '+€18.40' },
            { name: 'Tariff', amount: '+€6.10' },
            { name: 'Consumption', amount: '+€22.00' },
            { name: 'Estimated-read correction', amount: '−€4.20' },
            { name: 'Standing / network', amount: '+€3.50' },
          ]}
        />
      </div>
    </div>
  );
}
