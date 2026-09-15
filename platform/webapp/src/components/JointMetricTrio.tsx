export function JointMetricTrio(props: {
  costPerResolvedContact: string;
  firstContactResolution: string;
  complaintRate: string;
}) {
  return (
    <div className="metric-trio" aria-label="Joint resolution metrics">
      <div className="metric">
        <div className="label">Cost / resolved contact</div>
        <div className="value">{props.costPerResolvedContact}</div>
      </div>
      <div className="metric">
        <div className="label">First-contact resolution</div>
        <div className="value">{props.firstContactResolution}</div>
      </div>
      <div className="metric">
        <div className="label">Complaint rate</div>
        <div className="value">{props.complaintRate}</div>
      </div>
    </div>
  );
}
