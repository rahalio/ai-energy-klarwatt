export function ComplaintClock({
  deadlineLabel,
  overdue,
}: {
  deadlineLabel: string;
  overdue?: boolean;
}) {
  return (
    <div className={`banner ${overdue ? 'banner-coral' : 'banner-amber'}`} role="status">
      Complaint regulatory clock — {deadlineLabel}
      {overdue ? ' (overdue)' : ''}
    </div>
  );
}
