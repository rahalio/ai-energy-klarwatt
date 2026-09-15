import { ContactsView } from '../features/contacts/views/ContactsView';
import { ConsumptionView } from '../features/consumption/views/ConsumptionView';
import { ConsentView } from '../features/consent/views/ConsentView';
import { VulnerabilityView } from '../features/vulnerability/views/VulnerabilityView';
import { ResolutionsView } from '../features/resolutions/views/ResolutionsView';
import { AdviceView } from '../features/advice/views/AdviceView';
import { ComplaintsView } from '../features/complaints/views/ComplaintsView';
import { CohortsView } from '../features/cohorts/views/CohortsView';
import { ComplianceView } from '../features/compliance/views/ComplianceView';

export function ScaffoldViewsPage() {
  return (
    <div>
      <header className="page-header">
        <h1>Generated domain views</h1>
        <p>Baseline scaffold output from zero-codegen webapp features layer.</p>
      </header>
      <div className="panel">
        <ContactsView />
      </div>
      <div className="panel">
        <ConsumptionView />
      </div>
      <div className="panel">
        <ConsentView />
      </div>
      <div className="panel">
        <VulnerabilityView />
      </div>
      <div className="panel">
        <ResolutionsView />
      </div>
      <div className="panel">
        <AdviceView />
      </div>
      <div className="panel">
        <ComplaintsView />
      </div>
      <div className="panel">
        <CohortsView />
      </div>
      <div className="panel">
        <ComplianceView />
      </div>
    </div>
  );
}
