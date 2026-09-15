export type Driver = { name: string; amount: string; note?: string };

export function DriverBreakdown({ drivers }: { drivers: Driver[] }) {
  return (
    <div className="driver-list">
      {drivers.map((d) => (
        <div className="driver-row" key={d.name}>
          <div>
            <strong>{d.name}</strong>
            {d.note ? <p style={{ margin: '4px 0 0' }}>{d.note}</p> : null}
          </div>
          <div className="driver-amount">{d.amount}</div>
        </div>
      ))}
    </div>
  );
}
