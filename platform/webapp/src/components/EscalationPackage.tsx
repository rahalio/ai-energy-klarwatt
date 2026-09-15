export function EscalationPackage({
  completeness,
}: {
  completeness: number;
}) {
  const pct = Math.round(Math.min(1, Math.max(0, completeness)) * 100);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>Escalation package</strong>
        <span className="mono">{pct}%</span>
      </div>
      <p>Conversation · data used · reason · proposed next step</p>
      <div className="completeness" aria-hidden>
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
