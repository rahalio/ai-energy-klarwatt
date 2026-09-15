type GateState = 'cleared' | 'blocked' | 'human_required';

export function GateStrip(props: {
  role: string;
  purpose: string;
  granularity: string;
  vulnerability: string;
  state?: GateState;
}) {
  const state = props.state ?? 'cleared';
  const cls =
    state === 'blocked' ? 'gate-block' : state === 'human_required' ? 'gate-human' : 'gate-ok';
  return (
    <div className={`gate-strip ${cls}`} role="status" aria-live="polite">
      <div className="gate-chip">
        <span className="label">Regulated role</span>
        <span className="value">{props.role}</span>
      </div>
      <div className="gate-chip">
        <span className="label">Lawful purpose</span>
        <span className="value">{props.purpose}</span>
      </div>
      <div className="gate-chip">
        <span className="label">Granularity ceiling</span>
        <span className="value">{props.granularity}</span>
      </div>
      <div className="gate-chip">
        <span className="label">Vulnerability</span>
        <span className="value">{props.vulnerability}</span>
      </div>
    </div>
  );
}
